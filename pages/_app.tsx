import "../styles/globals.css";
import type { AppProps } from "next/app";
import KofiButton from "kofi-button";
import Head from "next/head";
import { NextSeo } from "next-seo";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <_Scripts />
      <SEO />
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

const _Scripts = () => (
  <Head>
    <script
      async
      src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
    />
    <script
      dangerouslySetInnerHTML={{
        __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
              page_path: window.location.pathname,
            });
          `,
      }}
    />
    <link rel="icon" href="/favicon.ico" />
  </Head>
);

const SEO = () => {
  const title = "";
  const description = "";
  const url = "https://www.draftorders.com";

  const socialImg = {
    url: `${url}/screenshot.png`,
    width: 2222,
    height: 1196,
    alt: title,
  };
  return (
    <NextSeo
      title={title}
      titleTemplate={title}
      defaultTitle={title}
      description={description}
      canonical={url}
      openGraph={{
        url,
        title: "DraftOrders.com",
        description: "Generate your draft order, with a little fanfare.",
        images: [socialImg],
      }}
    />
  );
};

const Header = () => (
  <div className="p-2 px-4 flex bg-neutral text-white">
    <h1 className="self-center flex-none font-medium leading-tight text-2xl align-middle">
      My Logo
    </h1>
    <div className="self-center flex-none ml-2">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4.5 12c0-1.232.046-2.453.138-3.662a4.006 4.006 0 013.7-3.7 48.678 48.678 0 017.324 0 4.006 4.006 0 013.7 3.7c.017.22.032.441.046.662M4.5 12l-3-3m3 3l3-3m12 3c0 1.232-.046 2.453-.138 3.662a4.006 4.006 0 01-3.7 3.7 48.657 48.657 0 01-7.324 0 4.006 4.006 0 01-3.7-3.7c-.017-.22-.032-.441-.046-.662M19.5 12l-3 3m3-3l3 3"
        />
      </svg>
    </div>
    <div className="flex-auto"></div>

    <div className="flex-none space-x-2">
      <button className="btn btn-outline align-top text-white">
        Action Button
      </button>
    </div>
  </div>
);

const Footer = () => (
  <footer className="footer flex items-center p-4 bg-neutral text-white">
    <div>
      <div className="flex flex-none items-center grid-flow-col space-x-4">
        {/* <AvatarLogo /> */}
        <div>
          <p>
            Developed by <a href="http://johalloran.dev">James OHalloran.</a>
          </p>
          <p>Copyright © 2022 - All right reserved</p>
        </div>
        <KofiButton color="#0a9396" title="Tip the dev" kofiID="S6S5EMUTW" />
      </div>
    </div>
    <div className="flex-auto" />
    <div className="flex-none">
      <a href="https://twitter.com/jamespohalloran">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={24}
          height={24}
          viewBox="0 0 24 24"
          className="fill-current"
        >
          <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
        </svg>
      </a>
    </div>
  </footer>
);

export default MyApp;
