import React, { Component, Fragment } from 'react';
import { Card, Col, Row } from 'antd';
import axios from "axios";
import dayjs from "dayjs";

import Counter from "../Counter";
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
    console.log(userdata);
    return (
      <Fragment>
        
        <div className="text-center">
          <h1 className="page-title">Github Repositories</h1>
        </div>

        {loading ? <div>Loading...</div> : (
          <Row>
            {userdata ? userdata.map((item, i) => {
              return <Col span={8} key={`Git-Cols-${i}`}>
                <Card key={`Git-Repos-${i}`}
                  style={{ margin: 8 }}
                  type="inner"
                  title={item.title}
                  extra={<a href={item.b1.link}>Repo</a>}
                >
                  {item.desc} <br /> 
                  {/* [Updated: {dayjs().from(item.lastRepoUpdate, true)}] */}
                  <br />
                  <p className="repo-update">Updated: {dayjs().from(item.lastRepoUpdate, true)} ago</p>
                </Card>
              </Col>
            }) : null}
          </Row>
        )}

        <div className="bottom-counter"><Counter /></div>

      </Fragment>
    )
  }
}
