import Head from 'next/head';
import React from 'react';

const PageMeta = ({ title, description, path, image }) => {
  const vercelDomain =
    process.env.VERCEL_PROJECT_PRODUCTION_URL || process.env.VERCEL_URL;
  const siteUrl =
    (process.env.NEXT_PUBLIC_SITE_URL || (vercelDomain && `https://${vercelDomain}`))
      ?.replace(/\/+$/, '') || null;
  const pageUrl = siteUrl ? `${siteUrl}${path}` : null;
  const imageUrl = siteUrl && image ? `${siteUrl}${image}` : null;

  return (
    <Head>
      <title>{title}</title>
      <link rel='icon' href='/fav.png' />
      <meta name='description' content={description} />
      <meta property='og:type' content='website' />
      <meta property='og:title' content={title} />
      <meta property='og:description' content={description} />
      {pageUrl && <meta property='og:url' content={pageUrl} />}
      {imageUrl && <meta property='og:image' content={imageUrl} />}
      <meta
        name='twitter:card'
        content={imageUrl ? 'summary_large_image' : 'summary'}
      />
      <meta name='twitter:title' content={title} />
      <meta name='twitter:description' content={description} />
      {imageUrl && <meta name='twitter:image' content={imageUrl} />}
      {pageUrl && <link rel='canonical' href={pageUrl} />}
    </Head>
  );
};

export default PageMeta;
