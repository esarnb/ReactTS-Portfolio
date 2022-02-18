import { Helmet } from "react-helmet";
import { Container } from "@mantine/core";
import BasicCard from "../../Components/CardTypes/BasicCard/BasicCard";
import { GearIcon, ChatBubbleIcon, ImageIcon, MagnifyingGlassIcon, TrashIcon, PinRightIcon } from '@modulz/radix-icons';

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
        <div>
          <BasicCard />
          <GearIcon />
          <ChatBubbleIcon />
          <ImageIcon />
          <MagnifyingGlassIcon />
          <TrashIcon style={{color: "red"}} />
          <PinRightIcon />
          <b>{"<-----"}Icons</b>
        </div>
      </Container>
      
    </>
  );
}

export default Home;
