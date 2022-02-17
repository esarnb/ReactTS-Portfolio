import "./ProjectCards.css";

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

function ProjectCards(props: any) {
   let cards = projects.map( (each: singleCard, index) => Card(each));

   return (
    <div className="row1-container ">
      {cards}
    </div>
   )
}

function Card({ title, desc, img, alt, color }: singleCard) {
  return (
    <div className="rainbowGradient rainbow boxCard">
      <div className={"box box-down innerSquare " + color}>
        <h2>{title}</h2>
        <p>{desc}</p>
        <img src={img} alt={alt} />
      </div>
    </div>
  )
}

export default ProjectCards;