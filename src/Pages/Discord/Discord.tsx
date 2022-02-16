import { Helmet } from "react-helmet";
import "./Discord.css";
function Discord() {
  return (
    <>
       <Helmet>
        <title>Discord</title>
        <meta name="description" content="My Discord page through Helmet" />
      </Helmet>
      <div>Discord</div>
    </>
  );
}

export default Discord;
