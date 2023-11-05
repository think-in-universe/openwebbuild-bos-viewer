export const runtime = 'experimental-edge';
import type { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import { useRouter } from 'next/router';
import styled from 'styled-components';

import { ComponentWrapperPage } from '@/components/near-org/ComponentWrapperPage';
import { useBosComponents } from '@/hooks/useBosComponents';
import { useDefaultLayout } from '@/hooks/useLayout';
import { queryPost } from '@/utils/blog';
import type { NextPageWithLayout } from '@/utils/types';


const Wrapper = styled.div`
  @media (min-width: 600px) {
    margin: 0 80px;
  }
`;

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const { accountId, permalink } = query;
  const meta = await queryPost(accountId as string, permalink as string);

  return {
    props: {
      meta,
    },
  };
};

const BlogPage: NextPageWithLayout = ({ meta }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const router = useRouter();
  const components = useBosComponents();

  const { accountId, permalink } = router.query;

  return (
    <Wrapper>
      <ComponentWrapperPage
        src={components.blogPage}
        componentProps={{
          accountId,
          permalink
        }}
        meta={{ title: meta?.title, description: meta?.description, image: meta?.imageUrl }}
      />
    </Wrapper>
  );
};

BlogPage.getLayout = useDefaultLayout;

export default BlogPage;
