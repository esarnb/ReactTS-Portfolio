import { Helmet } from "react-helmet";

function NotFound() {
  return (
    <>
      <Helmet>
        <title>NotFound</title>
        <meta name="NotFound" content="My NotFound page through Helmet" />
        <meta property="og:title" content="esarnb" />
        <meta property="og:type" content="website" />
        <meta property="og:description" content="ReactTS - Not Found" />
        <meta property="og:url" content="https://esarnb.com" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:image" content="/images/banner.gif" />
      </Helmet>
      <div>NotFound</div>
    </>
  );
}

export default NotFound;
