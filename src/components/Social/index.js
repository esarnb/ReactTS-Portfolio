import React from "react"
import { Tag } from 'antd';
// import "./Social.css";

export default function Social() {
    return (
        <Fragment>
            <Tag icon={<TwitterOutlined />} color="#55acee"> <a href="" >Github </a></Tag> 
            <Tag icon={<LinkedinOutlined />} color="#55acee"> <a href="" > LinkedIn </a></Tag>
        </Fragment>
    )
}
