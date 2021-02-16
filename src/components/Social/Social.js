import React, { Fragment } from "react"
import { Tag } from 'antd';
import { GithubOutlined, LinkedinOutlined, MediumOutlined,  /*SlackOutlined */ } from '@ant-design/icons';
import "./Social.css";

export default function Social() {
    return (
        <Fragment>
            <Tag icon={<GithubOutlined />} className="sMedia" color="#000"> <a href="https://github.com/esarnb" target="_blank" rel="noreferrer">Github </a></Tag>
            <Tag icon={<LinkedinOutlined />} className="sMedia" color="#0A66C2"> <a href="https://www.linkedin.com/in/esarnb" target="_blank" rel="noreferrer"> LinkedIn </a></Tag>
            <Tag icon={<MediumOutlined />} className="sMedia" color="#222"> <a href="https://medium.com/@esarnb" target="_blank" rel="noreferrer"> Medium </a></Tag>
        </Fragment>
    )
}
