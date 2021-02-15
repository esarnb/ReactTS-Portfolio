import React, {Component, Fragment} from "react";
import { Progress } from 'antd';
import Space from "./Space";
import "./ThreeJS.css";

export default class ThreeJS extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      progress: 0,
    }
  }
  
  componentDidMount() {
    this.checkProgress()
  }

  incrementBy10 (x) {
    setTimeout(() => {    
      this.setState({progress: x+10})
      this.checkProgress()
    }, 250)
  }

  checkProgress () {
    let progress = this.state.progress;
    if (progress < 101) {
      this.incrementBy10(progress)
    } else {
      this.setState({progress: 101})
    }
  }

  render() {
    return (
      <Fragment>
        
          {this.state.progress < 101 ? (
              <Fragment>
                <div className="div-center text-center">
                  
                  <h1 className="page-title">ThreeJS</h1>
                  <br /> <br /> <br />
                  <h3>Full solar system files lost. Slowly rebuilding over time.</h3>
                  <br /> 
                  <h3>Use Mouse Buttons to view the system:</h3>
                  <br /> 
                  <ul>
                    <li>Zoom: Scroll wheel in/out (Mousepad 2 fingers zoom)</li>
                    <li>Angle: Hold left click to change angle (1 finger drag)</li>
                    <li>Move: Unknown, maybe lost in file misplace. </li>
                  </ul>
                  <br /> 
                  <Progress
                    type="circle"
                    strokeColor={{
                      '0%': '#108ee9',
                      '100%': '#87d068',
                    }}
                    percent={this.state.progress}
                  />
                  <br /> <br /> <br /> 
                  <p>Note to self / Todo: </p>
                  <p>1. Make light source inside the sun.</p>
                  <p>2. Add all planets again with textures.</p>
                  <p>3. Look up orbital ring speeds for each planet.</p>
                </div>
              </Fragment>
          ) : (
            <Space />
          )}
      </Fragment>
    )
  }
}