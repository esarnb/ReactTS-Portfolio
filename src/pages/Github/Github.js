import React, { Component } from 'react';
import { Box, Button, SimpleGrid } from "@chakra-ui/react"
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
         <br /> 
        <div className="text-center">
          <h1 className="page-title">Github Repositories</h1>
        </div>
        <br />

        {loading ? <div>
          Loading Repositories... <br />
          {/* <Skeleton active/> <Skeleton active/> <Skeleton active/> <Skeleton active/>  */}
        </div> : (
          <SimpleGrid minChildWidth="300px" spacing="40px">
            {userdata && userdata.length ? userdata.map((item, i) => {
              return <Box key={`Git-Repos-${i}`} className="projCard" >
                  <Button className="git-card-btn" href={item.b1.link}>Repo</Button> <br />
                  <Box className="git-card-title">{item.title}</Box> <br /> <br /> 
                  <Box className="git-card-desc">{item.desc}</Box> <br /> 
                  <Box className="git-card-meta">
                    <p className="repo-update">Updated: {dayjs().from(item.lastRepoUpdate, true)} ago</p>
                  </Box>
                </Box>
            }) : <div className="flex-center">Empty</div>}
        </SimpleGrid>

        )}
      <br /> <br /> <br />
      </div>
    )
  }
}
