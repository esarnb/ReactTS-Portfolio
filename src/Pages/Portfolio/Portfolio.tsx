import { Helmet } from "react-helmet";
import BasicCard from "../../Components/CardTypes/BasicCard/BasicCard";
import "./Portfolio.css";
function Portfolio() {
  return (
    <>
       <Helmet>
        <title>Portfolio</title>
        <meta name="description" content="My Portfolio page through Helmet" />
      </Helmet>
      <BasicCard />
    </>
  );
}

export default Portfolio;
