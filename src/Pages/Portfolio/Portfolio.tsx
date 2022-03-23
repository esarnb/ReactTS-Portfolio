import { Helmet } from "react-helmet";
import ImageCards from "../../Components/CardTypes/ImageCards/ImageCards";
import { Group, Text } from "@mantine/core";
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
      <br /> <br />
      <Group id="aboutMe">      
        <Text align="center" size="lg">Developer - Web, App, Script</Text>
        <Text align="center" size="lg">Education - GIS</Text>
        <Text align="center" size="lg">Work - FS-WD - App Dev</Text>
      </Group>
      <Group id="mainSkills">
        <Text align="center" size="lg">Basic skills with icons</Text>
        <Text align="center" size="lg">Some frameworks with icons</Text>
        <Text align="center" size="lg">Some learnings/todos</Text>
      </Group>
      <Group id="topProjects">
        <ImageCards {...topProjects.A} />
        <ImageCards {...topProjects.B} />
        <ImageCards {...topProjects.C} />
      </Group>
      <Group id="progressOutline">
        
      </Group>
    </>
  );
}

const topProjects = {
  "A": {

  },
  "B": {

  },
  "C": {

  }
}

export default Portfolio;
