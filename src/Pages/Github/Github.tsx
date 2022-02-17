import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import ProjectCards from "../../Components/CardTypes/ProjectCards/ProjectCards";
import BasicCard from "../../Components/CardTypes/BasicCard/BasicCard";
import GithubCards from "../../Components/CardTypes/GithubCards/GithubCards";
// import LoadingIcon from '../../Components/LoadingIcon/LoadingIcon';
import { Group, Button, Container, Transition } from "@mantine/core";

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
                  {/* <Transition mounted={!isLoading} transition="fade" duration={10000} timingFunction="ease"> */}
                    {/* {(styles) => <span style={styles}> */}
                      <GithubCards></GithubCards>
                      {/* <ProjectCards></ProjectCards> */}
                      {/* <LoaderCards></LoaderCards> */}
                    {/* </span>} */}
                  {/* </Transition> */}
      
                </> : 
                /*

                  other loading idea: https://mantine.dev/core/loading-overlay/

                */

                <Button disabled leftIcon={""} loading={isLoading} loaderPosition="right">Pulling github data...</Button> 
              }            
            </Group>
          
        </div>


      </Container>
     
    </>
  );
}

export default Github;
