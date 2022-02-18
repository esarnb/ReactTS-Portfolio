import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import BasicCard  from "../../Components/CardTypes/BasicCard/BasicCard";
import { Group, Button, Container, ScrollArea } from "@mantine/core";
import { GitData } from "../../Interfaces/Cards";
import "./Github.css";
import "../../App.css";

function Github() {
  const [isTouchScreen, setIsTouchScreen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState<GitData[]|null>(null);

  useEffect(() => {
    setTimeout(() => {
      setData([
        { title: "x", desc: "x", padding: "md", shadow: "md", radius: "md" },
        { title: "x", desc: "x", padding: "md", shadow: "md", radius: "md" },
        { title: "x", desc: "x", padding: "md", shadow: "md", radius: "md" },
        { title: "x", desc: "x", padding: "md", shadow: "md", radius: "md" },
        { title: "x", desc: "x", padding: "md", shadow: "md", radius: "md" },
        { title: "x", desc: "x", padding: "md", shadow: "md", radius: "md" },
        { title: "x", desc: "x", padding: "md", shadow: "md", radius: "md" },
        { title: "x", desc: "x", padding: "md", shadow: "md", radius: "md" },
        { title: "x", desc: "x", padding: "md", shadow: "md", radius: "md" },
        { title: "x", desc: "x", padding: "md", shadow: "md", radius: "md" },
        { title: "x", desc: "x", padding: "md", shadow: "md", radius: "md" },
        { title: "x", desc: "x", padding: "md", shadow: "md", radius: "md" },
        { title: "x", desc: "x", padding: "md", shadow: "md", radius: "md" },
        { title: "x", desc: "x", padding: "md", shadow: "md", radius: "md" },
        { title: "x", desc: "x", padding: "md", shadow: "md", radius: "md" },
        { title: "x", desc: "x", padding: "md", shadow: "md", radius: "md" },
        { title: "x", desc: "x", padding: "md", shadow: "md", radius: "md" },
        { title: "x", desc: "x", padding: "md", shadow: "md", radius: "md" },
        { title: "x", desc: "x", padding: "md", shadow: "md", radius: "md" },
        { title: "x", desc: "x", padding: "md", shadow: "md", radius: "md" },
        { title: "x", desc: "x", padding: "md", shadow: "md", radius: "md" },
        { title: "x", desc: "x", padding: "md", shadow: "md", radius: "md" },
        { title: "x", desc: "x", padding: "md", shadow: "md", radius: "md" },
        { title: "x", desc: "x", padding: "md", shadow: "md", radius: "md" },
      ])
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
        <h1 className="main-title text-center">Github</h1>

        <ScrollArea id="gh-container" >

              <Group position="center">
                {
                  data ? data.map(({ title, desc, padding, shadow, radius }: GitData, i: Number) => <BasicCard key={"ghPkey#"+i} title={title} desc={desc} padding={padding} shadow={shadow} radius={radius} ></BasicCard >)
                  : <Button loading={isLoading} loaderPosition="right">Pulling github data...</Button> 
                }
              </Group>


        </ScrollArea>
      </Container>
     
    </>
  );
}

export default Github;
