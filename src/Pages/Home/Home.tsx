import { Helmet } from "react-helmet";
import { Container, Group, Center, Text, Space } from "@mantine/core";
import { GearIcon, ChatBubbleIcon, ImageIcon, MagnifyingGlassIcon, TrashIcon, PinRightIcon } from '@modulz/radix-icons';
import BasicCard from "../../Components/CardTypes/BasicCard/BasicCard";
import { BaseData } from "../../Interfaces/Cards";
import "../../App.css";
import "./Home.css";

const multipleCards: BaseData[] = [
  {
    title: <>
      <GearIcon />
      <ChatBubbleIcon />
      <ImageIcon />
      <MagnifyingGlassIcon />
      <TrashIcon style={{color: "red"}} />
      <PinRightIcon />
    </>, 
    desc: "Icons by @modulz/radix-icons",
    padding: "md", 
    shadow: "md", 
    radius: "md"
  },
  {
    title: "Portfolio", 
    desc: "Will contain quick bio, skills, top projects, and currently learning activities",
    padding: "md", 
    shadow: "md", 
    radius: "md"
  },
  {
    title: "Github", 
    desc: "Will be API-called repo status of projects",
    padding: "md", 
    shadow: "md", 
    radius: "md"
  },
  {
    title: "ThreeJS", 
    desc: "Will contain 3D Visual Interactive solar system",
    padding: "md", 
    shadow: "md", 
    radius: "md"
  },
  {
    title: "Discord", 
    desc: "Will contain Bot status live feed and oauth integration",
    padding: "md", 
    shadow: "md", 
    radius: "md"
  },
  {
    title: "Config", 
    desc: "Will contain localstorage settings: theme, lastSeen",
    padding: "md", 
    shadow: "md", 
    radius: "md"
  },
]

function Home() {
  return (
    <>
      <Helmet>
        <title>Home</title>
        <meta name="description" content="My Home page through Helmet" />
      </Helmet>
      
      <h1 className="main-title text-center">Home</h1>
      <Container>
        <Text align="center" size="lg">
          Welcome to my webpage, powered by ReactTS and Mantine.
        </Text>
        <Text align="center" className="main-subtitle">
          To Do:
        </Text>
        <Center>
          <br />
          <Group>
            {multipleCards.map((x: BaseData, i: Number) => <BasicCard {...x} key={"MultiHomeCard#"+i}/>)}
          </Group>
        </Center>
      </Container>

    </>
  );
}


export default Home;
