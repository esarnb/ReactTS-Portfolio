import React, { Fragment } from "react"
import { Tag } from "@chakra-ui/react"
import { MdSettings } from '@chakra-ui/icons'
import "./Social.css";

export default function Social() {
    return (
        <Fragment>
              <Tag size="md" key="github" variant="solid" colorScheme="teal" icon={<GithubOutlined />} className="sMedia" color="#000"> 
                    <a href="https://github.com/esarnb" target="_blank" rel="noreferrer">Github </a>
                    <TagLabel>x</TagLabel>
                    <TagRightIcon as={MdSettings} />
                </Tag>
              <Tag size="md" key="linkedin" variant="solid" colorScheme="teal" icon={<LinkedinOutlined />} className="sMedia" color="#0A66C2"> 
                    <a href="https://www.linkedin.com/in/esarnb" target="_blank" rel="noreferrer"> LinkedIn </a>
                    <TagLabel>x</TagLabel>
                    <TagRightIcon as={MdSettings} />
                </Tag>
              <Tag size="md" key="medium" variant="solid" colorScheme="teal" icon={<MediumOutlined />} className="sMedia" color="#222"> 
                    <a href="https://medium.com/@esarnb" target="_blank" rel="noreferrer"> Medium </a>
                    <TagLabel>x</TagLabel>
                    <TagRightIcon as={MdSettings} />
                </Tag>
        </Fragment>
    )
}
