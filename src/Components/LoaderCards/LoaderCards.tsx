// https://codepen.io/william-goldsworthy/pen/JzVajj?editors=1100

import "./LoaderCards.css";

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

function LoaderCards(props: any) {
   let cards = projects.map( (each: singleCard, index) => Card(each));

   return (
    <div className="row1-container ">
      {cards}
    </div>
   )
}

function Card({ title, desc, img, alt }: singleCard) {
  return (
      
    <div className="card">
      <h3 className="title">{title}</h3>
      
      <div className="bar">
        <div className="emptybar"></div>
        <div className="filledbar"></div>
      </div>

      <div className="circle">
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg">
          <circle className="stroke" cx="60" cy="60" r="50"/>
        </svg>
      </div>

    </div>

  )
}

export default LoaderCards;