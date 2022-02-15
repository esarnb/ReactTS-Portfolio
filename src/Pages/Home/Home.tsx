import { Helmet } from "react-helmet";
import "./Home.css";

function Home() {
  return (
    <>
      <Helmet>
        <title>Home</title>
        <meta name="description" content="My Home page through Helmet" />
      </Helmet>
      <div>Home</div>
    </>
  );
}

export default Home;
