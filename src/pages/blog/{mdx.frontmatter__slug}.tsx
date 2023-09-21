import React from 'react';
import Layout from '../../components/Layout';
import { graphql } from 'gatsby';
import Seo from '../../components/Seo';

type Props = {
  data: Queries.PostDetailQuery;
  children: React.ReactNode;
};

export default function BlogPost({ data, children }: Props) {
  console.log(children);
  return (
    <Layout title=''>
      <div>{children}</div>
    </Layout>
  );
}

export const query = graphql`
  query PostDetail($frontmatter__slug: String) {
    mdx(frontmatter: { slug: { eq: $frontmatter__slug } }) {
      body
      frontmatter {
        author
        category
        title
        data
        slug
      }
    }
  }
`;

export const Head = ({ data }: Props) => (
  <Seo title={data.mdx?.frontmatter?.title!} />
);
