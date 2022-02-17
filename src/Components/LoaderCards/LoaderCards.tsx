// https://codepen.io/william-goldsworthy/pen/JzVajj?editors=1100
// import Button from "../Button/Buttons";
import "./LoaderCards.css";

interface singleCard {
  title?: string,
  desc?: string,
  img?: string, 
  alt?: string,
}

const projects: singleCard[] = [
  {
    title: "1",
    desc: "2",
    img: "3",
    alt: "4",
  },
  {
    title: "a",
    desc: "b",
    img: "c",
    alt: "d",
  }
]

function LoaderCards(props: any) {
   let cards = projects.map( (each: singleCard, index) => Card(each));

   return (
    <div className="container">
      {
        projects.map((data,i) => <Card key={"ghCard#"+(i+1)} data={data}/>)
      }
    </div>
   )
}

function Card(props: any) {
  const { title, desc, img, alt }: singleCard = props;

  return (
    
    <div className="container">
      <div className="card">
        <h3 className="title">Card 1</h3>
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
      <div className="card">
        <h3 className="title">Card 2</h3>
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
      <div className="card">
        <h3 className="title">Card 3</h3>
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
      <div className="card">
        <h3 className="title">Card 4</h3>
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
    </div>
  )
}

export default LoaderCards;