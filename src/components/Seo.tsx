import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';

type Props = {
  title: string;
};

export default function Seo({ title }: Props) {
  const data = useStaticQuery<Queries.SeoDataQuery>(graphql`
    query SeoData {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <title>
      {data.site?.siteMetadata?.title} | {title}
    </title>
  );
}
