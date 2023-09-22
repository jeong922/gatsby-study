import * as React from 'react';
import Layout from '../components/Layout';
import Seo from '../components/Seo';
import { StaticImage } from 'gatsby-plugin-image';

export default function IndexPage() {
  return (
    <Layout title='Welcome to DevStickers ❤'>
      <StaticImage
        height={500}
        src='https://images.unsplash.com/photo-1531306728370-e2ebd9d7bb99?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1587&q=80'
        alt='image'
      />
    </Layout>
  );
}

export const Head = () => <Seo title='Home' />;
