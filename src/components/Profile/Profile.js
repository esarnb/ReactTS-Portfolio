import React, { Fragment } from "react"
import { Avatar, Image } from 'antd';

import "./Profile.css";

export default function Profile() {
    return (
        <Fragment>
            <Avatar size={64} className="avatar" src={
                <Image src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
            }/>
        </Fragment>
    )
}
