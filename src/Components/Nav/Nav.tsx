import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Anchor, Header, Burger, Button } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import NavMenu from "../NavMenu/NavMenu";
import "./Nav.css";

const pages = [
  {path: "/", name: "Home"},
  {path: "/portfolio", name: "Portfolio"},
  {path: "/github", name: "Github"},
  {path: "/threejs", name: "ThreeJS"},
  {path: "/discord", name: "Discord"},
  {path: "/config", name: "Config"},
];

export default function Nav() {
  const headerRef = useRef<any|null>(null);
  const navTabs = (
    <span style={{width: "fit-content", backgroundColor: "red"}} ref={headerRef}>
      {
        pages.map(({path, name}, i) => {
          return <Anchor key={"navBtnKey#"+i} className="navBtnsText" component={Link} to={path}>
            <Button variant="outline" className="navBtns">
              {name}
            </Button>
          </Anchor>
        })
      }
    </span>
  );
    
  const [opened, setOpened] = useState(false);
  const [Hwidth, setHwidth] = useState(false);
  let match = useMediaQuery(`(max-width: 586px)`);
  // let match = useMediaQuery(`(max-width: ${Hwidth}px)`);

  // useEffect(() => {
  //   if(headerRef?.current?.getBoundingClientRect()){
  //     console.log("OFFSET: ", headerRef.current.offsetWidth);
      
  //     const { width } = headerRef.current.getBoundingClientRect();
  //     console.log("WIDTH: ", width)
  //     console.log(headerRef.current.offsetWidth);
  //     // setHwidth(width);
  //     setHwidth(headerRef.current.offsetWidth);
  //   } else {
  //     console.log("WIDTH: ", undefined); 
  //   }

  // }, [match]);
  return (
    <Header  height={"auto"}>
      <span>esarnb</span> 
      {match ? <NavMenu  id="navMenu" paths={pages} isSmall={true}/> 
      : <span id="navBar">{!opened ? navTabs : null}</span>}
    </Header>
  )
}