import React from "react";
import { Breadcrumb, Tag } from 'antd';
import "./index.css";

function Footer(props) {
    let classes = props.theme === "dark" ? "footdark Footer" : "footlight  Footer";
    let sep =  <Tag color="purple" className={props.theme === "dark" ? "sepdark sep" : "seplight sep"}>></Tag>
    
	return (
        <div >
            <Breadcrumb className = {classes} separator={sep}>
                {props.crumbs.map((x,i) => <Breadcrumb.Item key={`bc${i}`} className={classes}>{x}</Breadcrumb.Item>)}
            </Breadcrumb>
        </div>
    );
}

export default Footer;
