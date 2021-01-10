import React from "react"
import { Card } from 'antd';

export default function Cards(proj) {
    let { b1, b2, title } = proj;
    console.log(proj);
    return (
        <Card title={title} bordered={false}>
            {b1 ? <a href={b1.link} rel="_blank">{b1.name}</a> : null}
            {b2 ? <a href={b2.link} rel="_blank">{b2.name}</a> : null}
        </Card>
    )
}
