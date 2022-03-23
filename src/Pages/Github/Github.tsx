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

    fetch("https://api.github.com/users/esarnb/repos").then(res => res.json()).then(data => {
      let filtered = data.map((x: any) => {
        return {
          name: x.name, 
          repo: x.html_url, 
          live: x.deployments_url, 
          updated: new Date(x.updated_at)
        }
      }).sort((a: gitRepo, b: gitRepo) => +a.updated - +b.updated);
      setData(filtered.reverse());
      setIsLoading(false);
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
                  data ? data.map(({name, repo, live, updated, description}, i: Number) => {
                  return <BasicCard key={"ghPkey#"+i} 
                    title={name} desc ={description ? description : ""} btnText={repo} link={live} updated={updated}
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

const mockData = [
  {title: "title", desc: "desc", btnText: "Repo", link: null},
        {title: "title", desc: "desc", btnText: "Repo", link: null},
        {title: "title", desc: "desc", btnText: "Repo", link: null},
        {title: "title", desc: "desc", btnText: "Repo", link: null},
        {title: "title", desc: "desc", btnText: "Repo", link: null},
        {title: "title", desc: "desc", btnText: "Repo", link: null},
        {title: "title", desc: "desc", btnText: "Repo", link: null},
        {title: "title", desc: "desc", btnText: "Repo", link: null},
        {title: "title", desc: "desc", btnText: "Repo", link: null},
        {title: "title", desc: "desc", btnText: "Repo", link: null},
        {title: "title", desc: "desc", btnText: "Repo", link: null},
        {title: "title", desc: "desc", btnText: "Repo", link: null},
        {title: "title", desc: "desc", btnText: "Repo", link: null},
        {title: "title", desc: "desc", btnText: "Repo", link: null},
        {title: "title", desc: "desc", btnText: "Repo", link: null},
        {title: "title", desc: "desc", btnText: "Repo", link: null},
        {title: "title", desc: "desc", btnText: "Repo", link: null},
]

export default Github;
