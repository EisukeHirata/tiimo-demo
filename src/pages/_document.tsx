import { buildUrl } from "@/utils/buildUrl";
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  //removed /bg-c.png
  return (
    <Html lang="en">
      <Head />
      <body style={{ backgroundImage: `url(${buildUrl("/bg-c.png")})` }}>
        <Main />
        <NextScript />
        <script src="../path/to/flowbite/dist/flowbite.min.js"></script>
      </body>
    </Html>
  );
}
