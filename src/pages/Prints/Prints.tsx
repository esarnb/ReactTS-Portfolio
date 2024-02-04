
import Card from '../../components/Card/Card';
import './Prints.css';

const data = Array.from({length: 45}, () => (
  {
    title:"",
    description: "",
    category: "",
  }
));


export default function Prints() {
  return (
     <div className='print-container'>
      {
     data.map((details, index) => {
       return (
            <Card className="print-item" 
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
