import { buildUrl } from "@/utils/buildUrl";
import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  //removed /bg-c.png
  return (
    <Html lang="en">
      <Head />
      <body style={{ backgroundImage: `url(${buildUrl("/bg-c.png")})` }}>
        <Main />
        <NextScript />
        <Script
          src="../path/to/flowbite/dist/flowbite.min.js"
          strategy="afterInteractive"
        />
      </body>
    </Html>
  );
}
