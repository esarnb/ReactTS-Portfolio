import { Helmet } from "react-helmet";
import ProjectCards from "../../Components/CardTypes/ProjectCards/ProjectCards";
import "./Portfolio.css";
function Portfolio() {
  return (
    <>
       <Helmet>
        <title>Portfolio</title>
        <meta name="description" content="My Portfolio page through Helmet" />
      </Helmet>
      <ProjectCards />
    </>
  );
}

export default Portfolio;
