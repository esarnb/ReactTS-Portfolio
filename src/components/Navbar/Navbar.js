import React, {Fragment} from "react"
import { NavLink } from 'react-router-dom';
import { Box, Image, Avatar, Tabs, TabList, Tab, TabPanels, TabPanel } from "@chakra-ui/react"
import Counter from "../Counter/Counter"
import Login from "../Login/Login"
import "./Navbar.css";

function Navbar() {
  return (
    <Box id="nav-box">
      <Tabs>
        <TabList>
          <Tab> <NavLink to="/">Home</NavLink> </Tab>
          <Tab> <NavLink to="/github">Github</NavLink> </Tab>
          <Tab> <NavLink to="/threejs">ThreeJS</NavLink> </Tab>
          <Tab> <NavLink to="/config">Redux</NavLink> </Tab>
          <Tab> <Login className="floatRight" /> </Tab>
          <span className="moveRight"> 
            <Avatar className="floatRight" name="Kent Dodds" src="https://bit.ly/kent-c-dodds" />
          </span>
        </TabList>

      </Tabs>
    </Box>  
  )
}
export default Navbar