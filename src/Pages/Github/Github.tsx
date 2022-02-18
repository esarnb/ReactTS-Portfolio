import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import BasicCard  from "../../Components/CardTypes/BasicCard/BasicCard";
import { Group, Button, Container, ScrollArea } from "@mantine/core";
import { BaseData } from "../../Interfaces/Cards";
import "./Github.css";
import "../../App.css";

function Github() {
  // const [isTouchScreen, setIsTouchScreen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState<BaseData[]|null>(null);

  useEffect(() => {
    setTimeout(() => {
      let data: BaseData[] = mockData;
      setData(data)
      setIsLoading(false);
    }, 2500);
  }, [])
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
                  data ? data.map(({title, desc, btnText, link}, i: Number) => {
                  return <BasicCard key={"ghPkey#"+i} 
                    title={title} desc ={desc} btnText={btnText} link={link}
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
