import { Helmet } from "react-helmet";
import "./Github.css";
function Github() {
  return (
    <>
       <Helmet>
        <title>Github</title>
        <meta name="description" content="My Github page through Helmet" />
      </Helmet>
      <div>Github</div>
    </>
  );
}

export default Github;
