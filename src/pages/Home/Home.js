import React, {Fragment} from "react";
import { Box, SimpleGrid } from "@chakra-ui/react";
import Social from "../../components/Social/Social";
import "./Home.css";

function Home() {
  return (
    <Box id="home-box">
      <br /> <br /> <br /> 
      <SimpleGrid minChildWidth="300px" spacing="40px">

        <Box className="projCard-main">
          <Box>
            <h1 className="git-card-title">[<a href="https://esarnb.com" target="_blank" rel="noreferrer">View</a>] esarnb.com</h1>
            <br />
            <div className="git-card-desc"> Personal website / Technology testing playground! Built with ReactJS, Redux, Ant Design. [Work in progress] </div>

            <br /> <br />
          </Box>
        </Box>
        
        <Box className="projCard-main">
          <Box>
            <h1 className="git-card-title">[<a href="http://beta.esarnb.com" target="_blank" rel="noreferrer">View</a>] beta.esarnb.com</h1>
            <br />
            <div className="git-card-desc"> Beta subdomain website - learning playground. Built with Next.JS and Semantic UI. [Work in progress] </div>

            <br /> <br />
          </Box>
        </Box>
        
        <Box className="projCard-main">
          <Box>
            <h1 className="git-card-title">[<a href="https://esarnb.github.io/portfolio" target="_blank" rel="noreferrer">View</a>] Portfolio</h1>
            <br />
            <div className="git-card-desc"> Portfolio - about myself & completed projects. Built with HTML (Bootstrap5 UI), CSS (Responsive & Animation), JS (JQuery & dayJS). </div>

          </Box>
        </Box>
      </SimpleGrid>
      <br /> <br /> <br /> 
      <SimpleGrid minChildWidth="300px" spacing="40px">

        <Box className="projCard-main">
          <Box>
            <h1 className="git-card-title">[<a href="/threejs" target="_blank" rel="noreferrer">View</a>] Suggestions</h1>
            <br />
            <div className="git-card-desc"> Check out the ThreeJS navbar tab to see 3D rendering! The one above is a work-in-progress render of our solar system. Also check out the Github tab to see my latest repository works! </div>

          </Box>
        </Box>

        <Box className="projCard-main">
          <Box>
            {/* <h1 className="git-card-title">Social Media</h1> */}
            <br />{/* 
            <div className="text-center"> <Social /> </div> */}
          </Box>
        </Box>
        
        <Box className="projCard-main">
          <Box title="Current Todos" bordered={false}  /*extra={<a href="https://www.google.com/" target="_blank" rel="noreferrer">View</a>}*/>
            <h1 className="git-card-title">Current Todos</h1>
            <br />
            <div className="git-card-desc">Add a dark/light theme similar to portfolio. Add background skin images - also based on theme Boxor. New tab for chat + profile integration. </div>
          </Box>
        </Box>
      </SimpleGrid>

    </Box>
  )
}
export default Home