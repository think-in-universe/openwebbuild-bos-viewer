import { cacheExchange, Client, fetchExchange, gql } from "@urql/core";

export async function queryPost(accountId: string, permalink: string) {
  const client = new Client({
    url: "https://near-queryapi.api.pagoda.co/v1/graphql",
    exchanges: [cacheExchange, fetchExchange],
    fetchOptions: {
      headers: { "x-hasura-role": "openwebbuild_near" }
    }
  });

  const QUERY_POST = gql`
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

  const result = await client.query(QUERY_POST, { accountId, permalink, offset: 0, limit: 1 }).toPromise();
  if (result.error) {
    throw result.error;
  }

  if (result) {
    const posts = result.data?.openwebbuild_near_blog_posts;
    if (posts && posts.length > 0) {
      const p = posts[0];
      const content = JSON.parse(p.content ?? null) as any;
      if (content) {
        return {
          title: content.title ?? null,
          description: content.text?.slice(0, 80) ?? null,
          imageUrl: content.image ?? null,
        }
      }
    }
  }
  return null;
}
