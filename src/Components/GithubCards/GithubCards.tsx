// https://codepen.io/william-goldsworthy/pen/JzVajj?editors=1100

import "./GithubCards.css";

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

function GithubCards(props: any) {
   let cards = projects.map( (each: singleCard, index) => Card(each));

   return (
    <div className="container">
    </div>
   )
}

function Card({ title, desc, img, alt }: singleCard) {
  return (
    <div className="card">
      <div className="face face1">
          <div className="content">
              <div className="icon">
                  <i className="fa fa-github-square" aria-hidden="true"></i>
              </div>
          </div>
      </div>
      <div className="face face2">
          <div className="content">
              <h3>
                  <a href="https://github.com/atom888" target="_blank">atom888</a>
              </h3>
              <p>This is where I share code and work on projects.</p>
          </div>
      </div>
    </div>
  )
}

export default GithubCards;