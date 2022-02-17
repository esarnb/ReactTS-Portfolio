import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import ProjectCards from "../../Components/ProjectCards/ProjectCards";
import LoaderCards from "../../Components/LoaderCards/LoaderCards";
import GithubCards from "../../Components/GithubCards/GithubCards";
// import LoadingIcon from '../../Components/LoadingIcon/LoadingIcon';
import { Group, Button, Container, ActionIcon } from "@mantine/core";

import "./Github.css";
import "../../App.css";
function Github() {
  const [isTouchScreen, setIsTouchScreen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState("");

  useEffect(() => {
    setTimeout(() => {
      setData("x")
      setIsLoading(false);
    }, 2500);
  }, [])

  return (
    <>
      <Helmet>
        <title>Github</title>
        <meta name="description" content="My Github page through Helmet" />
      </Helmet>
      <Container padding={0} id="gh-container">
        <h1 className="main-title text-center">Github</h1>

        <div>
            {data ? <div className="text-center" id="hoverIns">{isTouchScreen ? "Click on" : "Hover over"} the cards below!</div> : null}
            <Group position="center">
              {
                data ? 
                <>
                  
                  <GithubCards></GithubCards>
                  {/* <ProjectCards></ProjectCards> */}
                  {/* <LoaderCards></LoaderCards> */}
      
                </> : 
                
                <Button disabled leftIcon={""} loading={isLoading} loaderPosition="right">Pulling github data...</Button> 
              }            
            </Group>
          
        </div>


      </Container>
     
    </>
  );
}

export default Github;
