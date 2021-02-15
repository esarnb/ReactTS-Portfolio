import React, { Fragment } from "react"
import {
    Tag,
    TagLabel,
    TagLeftIcon,
    TagRightIcon,
    TagCloseButton,
  } from "@chakra-ui/react"
import { BellIcon } from '@chakra-ui/icons'
import "./Social.css";

export default function Social() {
    return (
        <Fragment>
            <Tag size="md" key="github" variant="solid" colorScheme="teal" className="sMedia" style={{backgroundColor: "#000"}} color="#fff"> 
                <a href="https://github.com/esarnb" target="_blank" rel="noreferrer">Github </a>
            </Tag>
            <Tag size="md" key="linkedin" variant="solid" colorScheme="teal" className="sMedia" style={{backgroundColor: "#0A66C2"}} color="#fff"> 
                <a href="https://www.linkedin.com/in/esarnb" target="_blank" rel="noreferrer"> LinkedIn </a>
            </Tag>
            <Tag size="md" key="medium" variant="solid" colorScheme="teal" className="sMedia" style={{backgroundColor: "#222"}} color="#fff"> 
                <a href="https://medium.com/@esarnb" target="_blank" rel="noreferrer"> Medium </a>
            </Tag>
        </Fragment>
    )
}
