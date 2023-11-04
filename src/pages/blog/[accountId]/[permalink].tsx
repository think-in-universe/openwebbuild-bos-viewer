import { useRouter } from 'next/router';
import styled from 'styled-components';

import { ComponentWrapperPage } from '@/components/near-org/ComponentWrapperPage';
import { useBosComponents } from '@/hooks/useBosComponents';
import { useDefaultLayout } from '@/hooks/useLayout';
import type { NextPageWithLayout } from '@/utils/types';


const Wrapper = styled.div`
  @media (min-width: 600px) {
    margin: 0 80px;
  }
`;

const GatewaysPage: NextPageWithLayout = () => {
  const router = useRouter();
  const components = useBosComponents();

  const { accountId, permalink } = router.query;

  console.log("router.query", accountId, permalink);

  return (
    <Wrapper>
      <ComponentWrapperPage
        src={components.blogPage}
        componentProps={{
          accountId,
          permalink
        }}
        meta={{ title: 'Blog Post', description: 'post content' }}
      />
    </Wrapper>
  );
};

GatewaysPage.getLayout = useDefaultLayout;

export default GatewaysPage;
