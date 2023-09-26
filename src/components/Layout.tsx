import { Link } from 'gatsby';
import React from 'react';

type Props = {
  children: React.ReactNode;
  title?: string;
};

const nav = [
  { title: 'Home', path: '/' },
  { title: 'About Us', path: '/about-us' },
  { title: 'Blog', path: '/blog' },
];

export default function Layout({ children, title = '' }: Props) {
  return (
    <div className='container'>
      <nav>
        <ul>
          {nav.map((item) => (
            <li key={item.title}>
              <Link to={item.path}>{item.title}</Link>
            </li>
          ))}
        </ul>
      </nav>
      <h1>{title}</h1>
      <main>{children}</main>
    </div>
  );
}
