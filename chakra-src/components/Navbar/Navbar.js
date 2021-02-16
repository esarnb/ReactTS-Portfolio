import React, {Fragment} from "react"
import { NavLink } from 'react-router-dom';
import { Box, Image, Avatar, Tabs, TabList, Tab, TabPanels, TabPanel } from "@chakra-ui/react"
import Counter from "../Counter/Counter"
import Login from "../Login/Login"
import "./Navbar.css";

function Navbar() {
  return (
    <Box id="nav-box"  className="removeBoxBorder">
      <Tabs className="removeBoxBorder">
        <TabList  className="removeBoxBorder">
           <NavLink style={{ outline: 'none' }} className="navlink" to="/"><Tab className="removeBoxBorder"> Home </Tab> </NavLink>
           <NavLink style={{ outline: 'none' }} className="navlink" to="/github"><Tab className="removeBoxBorder"> Github </Tab> </NavLink>
           <NavLink style={{ outline: 'none' }} className="navlink" to="/threejs"><Tab className="removeBoxBorder"> ThreeJS </Tab> </NavLink>
           <NavLink style={{ outline: 'none' }} className="navlink" to="/config"><Tab className="removeBoxBorder"> Redux </Tab> </NavLink>
           <Tab className="removeBoxBorder"> <Login style={{ outline: 'none' }} className="floatRight" /> </Tab>
          <span className="moveRight"> 
            <Avatar className="floatRight" name="Kent Dodds" src="https://bit.ly/kent-c-dodds" />
          </span>
        </TabList>

      </Tabs>
    </Box>  
  )
}
export default Navbar