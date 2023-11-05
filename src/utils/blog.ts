const GRAPHQL_ENDPOINT = "https://near-queryapi.api.pagoda.co";
const IPFS_ENDPOINT = "https://ipfs.near.social/ipfs";

async function fetchGraphQL(operationsDoc: string, operationName: string, variables: Record<string, string | number>) {
  return await fetch(`${GRAPHQL_ENDPOINT}/v1/graphql`, {
    method: "POST",
    headers: { "x-hasura-role": "openwebbuild_near" },
    body: JSON.stringify({
      query: operationsDoc,
      variables: variables,
      operationName: operationName,
    }),
  });
}

const QUERY_POST = `
  query QueryPostByPermalink($accountId: String, $permalink: String, $offset: Int, $limit: Int) {
    openwebbuild_near_blog_posts(where: { account_id: { _eq: $accountId }, permalink: { _eq: $permalink } }, order_by: { block_height: desc }, offset: $offset, limit: $limit) {
      id
      permalink
      content
      block_height
      account_id
      block_timestamp
      title
    }
  }
`;

export async function queryPost(accountId: string, permalink: string) {
  const result = await fetchGraphQL(
    QUERY_POST,
    "QueryPostByPermalink",
    {
      accountId,
      permalink,
      offset: 0,
      limit: 1,
    }
  );

  if (result.status === 200) {
    const body = await result.json();
    if (body?.error) {
      throw body.error;
    }
    if (body?.data) {
      const posts = body.data.openwebbuild_near_blog_posts;
      if (posts && posts.length > 0) {
        const p = posts[0];
        const content = JSON.parse(p.content ?? null) as Record<string, string | any>;
        if (content) {
          let imageUrl = null;
          const image = content.image;
          if (image) {
            imageUrl = image.url ?? (image.ipfs_cid ? `${IPFS_ENDPOINT}/${image.ipfs_cid}` : null);
          }
          return {
            title: content.title ?? null,
            description: content.text?.slice(0, 80) ?? null,
            imageUrl,
          }
        }
      }
    }
  }
  return null;
}
