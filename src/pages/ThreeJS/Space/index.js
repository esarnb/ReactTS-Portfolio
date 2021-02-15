import React, { Component } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import earthTexture from "./Images/earth_texture.jpg";
import cloudTexture from "./Images/clouds_2.jpg";
import starTexture from "./Images/galaxy_starfield.png";
// import moonTexture from "./Images/moon_texture.jpg";
import sunTexture from "./Images/sun2.jpg";
import { CircularProgress, CircularProgressLabel } from "@chakra-ui/react"
import "./index.css"

//Animation global update object
const solarObjects = {
  earth: undefined,
  clouds: undefined,
  moon: undefined,
  sun: undefined,
  stars: undefined
}

var theta = 0; //Constant += for moon


class ThreeScene extends Component {

  constructor(props) {
    super(props);
    this.state = {
      percent: 0.0
    };
  }

  
  componentWillUnmount(){
    this.stop()
    this.mount.removeChild(this.renderer.domElement)
  }

  start = () => {
    if (!this.frameId) {
      this.animate = function() {}
      this.frameId = requestAnimationFrame(this.animate);
    }
  }
  stop = () => {
    if (this.frameId) cancelAnimationFrame(this.frameId)
  }

  componentDidMount() {
    
    let importTexture = (loadTexture) => {
      return new Promise((resolve, reject) => {
        resolve(new THREE.TextureLoader().load(loadTexture))
      })
    }

    this.visuals();
    this.orbitals();
    this.lights();

    importTexture(earthTexture).then(loaded => this.earth(loaded))
    importTexture(cloudTexture).then(loaded => this.clouds(loaded))
    //importTexture(moonTexture).then(loaded => this.moon(loaded))
    importTexture(sunTexture).then(loaded => this.sun(loaded))
    importTexture(starTexture).then(loaded => this.stars(loaded))

    var render = () => {

      if (this.state.progress !== 90 || this.state.progress !== 100) this.setState({ progress: 90 })
      if (solarObjects["earth"]) solarObjects["earth"].rotation.y += .006;
      if (solarObjects["clouds"]) solarObjects["clouds"].rotation.y -= .002;
      if (solarObjects["stars"]) solarObjects["stars"].rotation.y -= .00005;
      if (solarObjects["sun"]) solarObjects["sun"].rotation.y -= .00050;
      if (solarObjects["sun"]) solarObjects["sun"].rotation.x -= .00050;
      if (solarObjects["sun"]) solarObjects["sun"].rotation.z -= .00050;

      //Set the moon's orbital radius, start angle, and angle increment value

      //Speed
      var dTheta = 2 * Math.PI / 1000;

      //Increment theta, and update moon x and y
      //position based off new theta value        
      theta += dTheta / 10;
      // earthTheta += dTheta / 1000;
      if (solarObjects["moon"]) solarObjects["moon"].position.x = 30 * Math.cos(theta);
      if (solarObjects["moon"]) solarObjects["moon"].position.z = 30 * Math.sin(theta);

      //Earth orbit
      if (solarObjects["earth"]) solarObjects["earth"].position.x = 300 * Math.cos(theta) + 50;
      if (solarObjects["earth"]) solarObjects["earth"].position.z = 300 * Math.sin(theta) + 50;
      if (solarObjects["clouds"]) solarObjects["clouds"].position.x = 300 * Math.cos(theta) + 50;
      if (solarObjects["clouds"]) solarObjects["clouds"].position.z = 300 * Math.sin(theta) + 50;



      if (this.state.progress !== 90 || this.state.progress !== 100) this.setState({ progress: 100 })
      // this.frameId = requestAnimationFrame(this.animate)
      
      const animate = () => {
				requestAnimationFrame( animate );
        this.renderer.render(this.scene, this.camera);
			};

			animate();
    };

    render();
  }

  visuals = () => {
    const width = window.innerWidth;
    const height = window.innerHeight;
    // const width = this.mount.clientWidth;
    // const height = this.mount.clientHeight;
    //ADD SCENE
    this.scene = new THREE.Scene();
    //Camera
    var zNear = 1;
    var zFar = 3500000;
    this.camera = new THREE.PerspectiveCamera(45, width / height, zNear, zFar);
    this.camera.position.set(0, 0, 600);
    //ADD RENDERER
    this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false });
    this.renderer.setSize(width, height);
    this.mount.appendChild(this.renderer.domElement);
    this.setState({ progress: 10 })
  }

  orbitals = () => {
    var controls = new OrbitControls(this.camera, this.renderer.domElement);
    controls.update();
    this.setState({ progress: 20 })
  }

  lights = () => {
    //Ambient Light and Directional Light
    let alight = new THREE.AmbientLight(0x888888)
    let dlight = new THREE.DirectionalLight(0xfdfcf0, 1);
    dlight.position.set(20, 10, 20);
    this.scene.add(alight)
    this.scene.add(dlight)
    var light = new THREE.PointLight(0xff0000, 1, 100);
    light.position.set(150, 30, 150);
    this.scene.add(light);
    this.setState({ progress: 30 })

  }

  earth = (loaded) => {
    //Params: Radius, Radial Segments, Height Segments (max 100) 
    var earthGeometry = new THREE.SphereGeometry(10, 50, 50);
    var earthMaterial = new THREE.MeshPhongMaterial({
      map: loaded,
      color: 0xaaaaaa,
      specular: 0x333333,
      shininess: 25
    });
    let earth = new THREE.Mesh(earthGeometry, earthMaterial);
    solarObjects["earth"] = earth
    this.scene.add(solarObjects["earth"])
    this.setState({ progress: 40 })

  }

  clouds = (loaded) => {
    var cloudGeometry = new THREE.SphereGeometry(10.3, 50, 50);
    var cloudMaterial = new THREE.MeshPhongMaterial({
      map: loaded,
      transparent: true,
      opacity: 0.1
    });
    let clouds = new THREE.Mesh(cloudGeometry, cloudMaterial);
    solarObjects["clouds"] = clouds
    this.scene.add(solarObjects["clouds"])
    this.setState({ progress: 50 })

  }

  moon = (loaded) => {
    var moonGeometry = new THREE.SphereGeometry(3.5, 50, 50);
    var moonMaterial = new THREE.MeshPhongMaterial({
      map: loaded
    });
    var moon = new THREE.Mesh(moonGeometry, moonMaterial);
    moon.position.set(35, 0, 0);
    solarObjects["moon"] = moon
    this.scene.add(solarObjects["moon"])
    this.setState({ progress: 60 })

  }

  sun = (loaded) => {
    var sunGeometry = new THREE.SphereGeometry(50, 50, 50);
    var sunMaterial = new THREE.MeshPhongMaterial({
      map: loaded
    });
    var sun = new THREE.Mesh(sunGeometry, sunMaterial);
    sun.position.set(0, 0, 0);
    solarObjects["sun"] = sun
    this.scene.add(solarObjects["sun"])
    this.setState({ progress: 70 })

  }

  stars = (loaded) => {
    var starGeometry = new THREE.SphereGeometry(10000, 50, 50);
    var starMaterial = new THREE.MeshPhongMaterial({
      map: loaded,
      side: THREE.DoubleSide,
      shininess: 0
    });
    let stars = new THREE.Mesh(starGeometry, starMaterial);
    solarObjects["stars"] = stars
    this.scene.add(solarObjects["stars"])
    this.setState({ progress: 80 })

  }

  loading = () => {
    return <div className="loader">
      <CircularProgress
        type="circle"
        strokeColor={{
          '0%': '#108ee9',
          '100%': '#87d068',
        }}
        percent={this.state.progress}
      />
    </div>
  }


  // render() {
  //   return (
  //     <div className="Space" style={{ width: "auto", height: "100vh" }} ref={mount => { this.mount = mount; }} />
  //   )
  // }

  render() {
    return (
      <React.Fragment>
        {/* {(this.state.progress >= 100) ? (
          <div className="Space" ref={ref => (this.mount = ref)}/>
          
        ) : (
        // this.loading()
        <br />
      )} */}

      <div className="Space" ref={ref => (this.mount = ref)}/>

      </React.Fragment>
    );
  }
}
export default ThreeScene;
