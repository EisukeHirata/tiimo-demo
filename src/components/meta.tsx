import { buildUrl } from "@/utils/buildUrl";
import Head from "next/head";
export const Meta = () => {
  const title = "Tiimo Demo";
  const description =
    "Your Virtual AI Teacher. Learn with your personal AI teacher and develop your skills further";
  const imageUrl = "https://i.imgur.com/wetSKi0.png";
  return (
    <Head>
      <link rel="icon" href="/favicon.png" />
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={imageUrl} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />
    </Head>
  );
};
