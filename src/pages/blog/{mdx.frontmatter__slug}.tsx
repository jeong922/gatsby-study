import React from 'react';
import Layout from '../../components/Layout';
import { graphql } from 'gatsby';
import Seo from '../../components/Seo';
import { getImage } from 'gatsby-plugin-image';
import { GatsbyImage } from 'gatsby-plugin-image';

type Props = {
  data: Queries.PostDetailQuery;
  children: React.ReactNode;
};

export default function BlogPost({ data, children }: Props) {
  const image = getImage(
    data.mdx?.frontmatter?.headerImage?.childImageSharp?.gatsbyImageData!
  );
  return (
    <Layout title=''>
      <GatsbyImage image={image as any} alt={data.mdx?.frontmatter?.title!} />
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
        headerImage {
          childImageSharp {
            gatsbyImageData(height: 450, placeholder: BLURRED)
          }
        }
      }
    }
  }
`;

export const Head = ({ data }: Props) => (
  <Seo title={data.mdx?.frontmatter?.title!} />
);
