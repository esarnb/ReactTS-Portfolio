import { Helmet } from "react-helmet";
import { Container, Space } from "@mantine/core";
import BasicCard from "../../Components/BasicCard/BasicCard";
import "../../App.css";
import "./Home.css";

function Home() {
  return (
    <>
      <Helmet>
        <title>Home</title>
        <meta name="description" content="My Home page through Helmet" />
      </Helmet>
      
      <Container>
        <h1 className="main-title text-center">Home</h1>
        <br />
        <BasicCard />
      </Container>
      
    </>
  );
}

export default Home;
