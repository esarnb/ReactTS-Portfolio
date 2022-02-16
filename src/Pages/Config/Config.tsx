import { Helmet } from "react-helmet";
import "./Config.css";
function Config() {
  return (
    <>
       <Helmet>
        <title>Config</title>
        <meta name="description" content="My Config page through Helmet" />
      </Helmet>
      <div>Config</div>
    </>
  );
}

export default Config;
