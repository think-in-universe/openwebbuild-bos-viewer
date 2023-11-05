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

const BlogsPage: NextPageWithLayout = () => {
  const components = useBosComponents();

  return (
    <Wrapper>
      <ComponentWrapperPage
        src={components.blogsPage}
        meta={{ title: 'Blog', description: 'Blogs by community' }}
      />
    </Wrapper>
  );
};

BlogsPage.getLayout = useDefaultLayout;

export default BlogsPage;
