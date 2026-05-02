import {ImageViewer} from '../../components/Images/Images'
import './Prints.css';

const data_bambu = Array.from({ length: 9 }, () => (
  {
    title: "",
    description: "",
    category: "",
  }
));

const vids_bambu = Array.from({ length: 7 }, () => (
  {
    title: "",
    description: "",
    category: "",
  }
));

const data_creality = Array.from({ length: 46 }, () => (
  {
    title: "",
    description: "",
    category: "",
  }
));

export default function Prints() {
  return (
    <>
      <div className="content">
          <ImageViewer height={250} src="https://filament2print.com/9790-tm_home_default/bambu-lab-x1e-fdm-3d-printer.jpg" alt_src="Bambu P1 Series Combo - Printer" />
          <div className='center-horiz'>
            <div className="details">
              <div> Bambu P1 Series Combo (with AMS) </div> <br />
              <div>PLA Plastic at 0.2mm of 0.4mm Nozzle.</div>
              <div>In Bambu Studio, smaller prints usually take 30min-3hr, and 8-16hr for larger Objects.</div>
              <div>Click on a photo to expand!</div>
            </div>
          </div>
      </div>

      <hr />
      
      <div className='print-container'>
        {
          data_bambu.map((details, index) => {
            return (
              <ImageViewer
              key={"Print#" + index}
              height={200}
              width={"auto"}
              details={details}
                // width={200}
                src={`/media/printed/bambu/${index}.png`}
              />
            )
          })
        }
         <div className="break"></div> 
        {
          vids_bambu.map((details, index) => {
            return (
              <video width="320" height="240" controls key={"Print#" + index} >
                <source src={`/media/printed/bambu/${index}.mp4`} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            )
          })
        }
      </div>

      <br />
      <hr />

      <div className="content">
        <ImageViewer height={250} src="https://cdn.simplyprint.io/i/printer_types/creality/ender_7/product_photo_md.png?61585053e6f4f" alt_src="Ender Creality 7 - Printer" />
          <div className='center-horiz'>
            <div className="details">
            <div>Ender Creality 7 </div> <br />
            <div>PLA Plastic at 0.1mm of 0.4mm Nozzle.</div>
            <div>Prints usually take 6-15hr in Creality Slicer and 12-20hr in UltiMaker Slicer.</div>
            <div>Click on a photo to expand!</div>
            </div>
          </div>
      </div>

      <hr />
      
      <div className='print-container'>
        {
          data_creality.map((details, index) => {
            return (
              <ImageViewer
              key={"Print#" + index}
              height={200}
              details={details}
                // width={200}
                src={`/media/printed/creality/${index}.jpg`}
              />
            )
          })
        }
      </div>
    </>
  )
}


// export default function Prints() {
//   return (
//      <div className='print-container'>
//       {
//      data.map((details, index) => {
//        return (
//             <Card className="print-item" 
//               image= {`/printed/${index}.jpg`}
//               title={details.title}
//               description={details.description}
//               category={details.category}
//              key={"Print#" + index} />
//        )
//      })
//    }
//     </div>
//   )
// }
