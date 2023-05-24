import { Html, Head, Main, NextScript } from "next/document";
import { GoogleFonts } from "next-google-fonts";
export default function Document() {
  return (
    <Html lang="ar" dir="rtl">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Alexandria:wght@400;500;600;700;800&family=Cairo&family=DM+Sans:ital,wght@0,500;0,700;1,400&family=IBM+Plex+Sans+Arabic:wght@400;500;600;700&family=Inter:wght@400;600;700&family=Lato&family=Montserrat+Subrayada&family=Noto+Kufi+Arabic:wght@400;500;600;700&family=Nunito+Sans:wght@800&family=Open+Sans&family=Poppins:ital,wght@0,200;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,600&family=Roboto:ital,wght@0,100;0,300;0,500;0,700;1,300;1,500&family=Work+Sans:ital,wght@0,800;1,700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
