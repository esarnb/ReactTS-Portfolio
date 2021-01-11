import React, { Fragment } from "react"
import { Tag } from 'antd';
import { GithubOutlined, LinkedinOutlined, /* MediumOutlined, SlackOutlined */ } from '@ant-design/icons';
// import "./Social.css";

export default function Social() {
    return (
        <Fragment>
            <Tag icon={<GithubOutlined />} color="#55acee"> <a href="x" >Github </a></Tag>
            <Tag icon={<LinkedinOutlined />} color="#55acee"> <a href="x" > LinkedIn </a></Tag>
        </Fragment>
    )
}
