// https://codepen.io/william-goldsworthy/pen/JzVajj?editors=1100
import { Button, Space, Group } from "@mantine/core";

import "./GithubCards.css";

interface singleCard {
  title?: string,
  desc?: string,
  img?: string, 
  alt?: string,
  color?: string
}

const projects: singleCard[] = [
  {
    title: "1",
    desc: "2",
    img: "3",
    alt: "4",
    color: "red"
  },
  {
    title: "a",
    desc: "b",
    img: "c",
    alt: "d",
    color: "blue"
  }
]

function GithubCards(props: any) {
   let cards = projects.map( (each: singleCard, i) => <Card key={"ghCard#"+i} data={each}/>);

   return (
    <div className="row1-container">
      {cards}
    </div>
   )
}

function Card(props: any) {
  const { title, desc, img, alt }: singleCard = props.data;
  
  return (
      
    <div className="card gh-card-light">
      <h3 className="title">{title}</h3>
      <div className="content">
        {desc}
        <img src={img} alt={alt} />
      </div>
      <div className="footer">
      <Group>
        <Button compact>Repo</Button>
        <Button compact>Live</Button>
      </Group>
      </div>
      
    </div>

  )
}

export default GithubCards;