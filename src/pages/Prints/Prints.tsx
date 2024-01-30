
import { Carousel } from '@mantine/carousel';
import Card from '../../components/PrinterModels/Card';
import './Prints.css';

const data = Array.from({length: 45}, (v, i) => (
  {
    title:"",
    description: "",
    category: "",
  }
));


export default function Prints() {
  return (
     <div className='container'>
      {
     data.map((details, index) => {
       return (
            <Card className="item" 
              image= {`/printed/${index}.jpg`}
              title={details.title}
              description={details.description}
              category={details.category}
             key={"Print#" + index} />
       )
     })
   }
    </div>
  )
}


// export default function Prints() {
//   return (
//     <>
//       {
//      data.map((details, index) => {
//        return (
//             <Card className="cards" {...details} key={"Print#" + index} />
//        )
//      })
//    }
//     </>
//   )
// }

          // image={details.image}
          // title={details.title}
          // description={details.description}
          // category={details.category}


// export default function Prints() {
  
//  <Carousel
//  className="category" 
//    withIndicators
//    height={200}
//    slideSize={{ base: '100%', sm: '50%', md: '33.333333%' }}
//    slideGap={{ base: 0, sm: 'md' }}
//    loop
//    align="start"
//  >
//    {
//      data.map((details, index) => {
//        return (
//          <Carousel.Slide  className="card" key={"Img#" + index}>
//           ok
//             {/* <Card className="cards" {...details} key={"Print#" + index} /> */}
//          </Carousel.Slide>
//        )
//      })
//    }
//  </Carousel>
// }


/*


 <Carousel
    className="category" 
      withIndicators
      height={200}
      slideSize={{ base: '100%', sm: '50%', md: '33.333333%' }}
      slideGap={{ base: 0, sm: 'md' }}
      loop
      align="start"
    >
      {
        data.map((details, index) => {
          return (
            <Carousel.Slide  className="card" key={"Img#" + index}>
               <Card className="cards" {...details} key={"Print#" + index} />
            </Carousel.Slide>
          )
        })
      }
    </Carousel>


    */