import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import BasicCard  from "../../Components/CardTypes/BasicCard/BasicCard";
import { Group, Button, Container, ScrollArea } from "@mantine/core";
import { gitRepo } from "../../Interfaces/Cards";
import "./Github.css";
import "../../App.css";

function Github() {
  // const [isTouchScreen, setIsTouchScreen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState<gitRepo[]|null>(null);

  useEffect(() => {

    fetch("http://localhost:4242/github/repos").then(res => {
      // console.log("Remaining Hits: ", res.headers.get("x-ratelimit-remaining"))
      return res.json()
    }).then(data => {
      let x: gitRepo[] = data;
      setIsLoading(false);
      let filtered = data.map((x: any) => {
        return {
          name: x.name, 
          repo: x.repo, 
          live: x.live ? x.live : false, 
          updated: new Date(x.updated),
          language: JSON.parse(x.language)
        }
      }).sort((a: gitRepo, b: gitRepo) => +b.updated - +a.updated);
    
    // console.log(x);
      console.log(filtered);
      setData(filtered);
    });
  }, []);

  return (
    <>
      <Helmet>
        <title>Github</title>
        <meta name="description" content="My Github page through Helmet" />
      </Helmet>
      
      <Container padding={20}>
        <h1 className="main-title text-center">My Github Repos</h1>

        <ScrollArea id="gh-container" >

              <Group position="center">
                {
                  data ? data.map(({name, repo, live, updated, description, language}, i: Number) => {
                  return <BasicCard key={"ghPkey#"+i} 
                    title={name} desc ={description ? description : ""} 
                    btn={repo} link={live} updated={updated} language={language}
                    padding= "md" shadow= "md" radius= "md"/>
                  })
                  : <Button loading={isLoading} loaderPosition="right">Pulling github data...</Button> 
                }
              </Group>

        </ScrollArea>
      </Container>
     
    </>
  );
}

export default Github;
