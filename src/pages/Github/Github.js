import React, { Component } from 'react';
import { Card, Col, Row, Skeleton, Empty } from 'antd';
import axios from "axios";
import dayjs from "dayjs";
import "./Github.css";

const relativeTime = require('dayjs/plugin/relativeTime')
dayjs.extend(relativeTime)

export default class Projects extends Component {

  constructor(props) {
    super(props);
    this.state = { userdata: null, loading: false };
  }

  async componentDidMount() {
    this.setState({ loading: true })
    await axios.get("https://api.esarnb.com/github/repos").then((res) => {
      let data = res.data;
      data.sort((a, b) => b.lastRepoUpdate.localeCompare(a.lastRepoUpdate))
      this.setState({ userdata: data, loading: false })
      console.log(data);
    })
  }

  render() {
    let { loading, userdata } = this.state;
    return (
      <div className="git-container">
        
        <div className="text-center">
          <h1 className="page-title">Github Repositories</h1>
        </div>

        {loading ? <div>
          Loading Repositories... <br />
          <Skeleton active/> <Skeleton active/> <Skeleton active/> <Skeleton active/> 
        </div> : (
          <Row>
            {userdata && userdata.length ? userdata.map((item, i) => {
              return <Col span={8} key={`Git-Cols-${i}`}>
                <Card key={`Git-Repos-${i}`}
                  style={{ margin: 8 }}
                  type="inner"
                  title={item.title}
                  extra={<a href={item.b1.link}>Repo</a>}
                  className="projCard"
                >
                  {item.desc} <br /> 
                  {/* [Updated: {dayjs().from(item.lastRepoUpdate, true)}] */}
                  <br />
                  <p className="repo-update">Updated: {dayjs().from(item.lastRepoUpdate, true)} ago</p>
                </Card>
              </Col>
            }) : <div className="flex-center"><Empty image={Empty.PRESENTED_IMAGE_SIMPLE} /></div>}
          </Row>
        )}

      </div>
    )
  }
}
