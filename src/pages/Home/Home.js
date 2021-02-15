import React, {Fragment} from "react"
import { Container } from "@chakra-ui/react";
import Social from "../../components/Social/Social";
import "./Home.css";

function Home() {
  return (
    <Container id="home-container">
        Home
        <br />
        <Social />

    </Container>
  )
}
export default Home