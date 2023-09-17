import React from 'react';

type Props = {
  title: string;
};

export default function Seo({ title }: Props) {
  return <title>{title}</title>;
}
