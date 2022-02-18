import { Helmet } from "react-helmet";
import ImageCards from "../../Components/CardTypes/ImageCards/ImageCards";
import { Group, Space } from "@mantine/core";
import "./Portfolio.css";
import "../../App.css";
function Portfolio() {
  return (
    <>
       <Helmet>
        <title>Portfolio</title>
        <meta name="description" content="My Portfolio page through Helmet" />
      </Helmet>

      <h1 className="main-title text-center">Portfolio</h1>
      <Group className="">
        <ImageCards />
        <ImageCards />
        <ImageCards />
      </Group>
    </>
  );
}

export default Portfolio;
