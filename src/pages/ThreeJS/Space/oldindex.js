import React, { Component } from "react";
import * as THREE from "three";
import earthTexture from "./Images/earth_texture.jpg";
import cloudTexture from "./Images/clouds_2.jpg";
import starTexture from "./Images/galaxy_starfield.png";
import moonTexture from "./Images/moon_texture.jpg";
import sunTexture from "./Images/sun2.jpg";
import "./index.css"
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

//Animation global update object
const solarObjects = { earth: undefined, clouds: undefined, moon: undefined, sun: undefined, stars: undefined }
var theta = 0; //Constant += for moon


class ThreeScene extends Component {

	componentDidMount() {
		let importTexture = (loadTexture) => {
			return new Promise((resolve, reject) => {
				resolve(new THREE.TextureLoader().load(loadTexture))
			})
		}

		this.visuals();
		this.lights();
		this.orbitals();

		importTexture(earthTexture).then(loaded => this.earth(loaded))
		importTexture(cloudTexture).then(loaded => this.clouds(loaded))
		importTexture(starTexture).then(loaded => this.stars(loaded))
		importTexture(moonTexture).then(loaded => this.moon(loaded))
		importTexture(sunTexture).then(loaded => this.sun(loaded))

		var render = () => {
			if (solarObjects["earth"]) solarObjects["earth"].rotation.y += .00125;
			if (solarObjects["clouds"]) solarObjects["clouds"].rotation.y -= .00080;
			if (solarObjects["stars"]) solarObjects["stars"].rotation.y -= .00010;
			if (solarObjects["sun"]) solarObjects["sun"].rotation.y -= .00050;
			if (solarObjects["sun"]) solarObjects["sun"].rotation.x -= .00050;
			if (solarObjects["sun"]) solarObjects["sun"].rotation.z -= .00050;

			//Set the moon's orbital radius, start angle, and angle increment value
			var r = 35;
			var dTheta = 2 * Math.PI / 1000;

			//Increment theta, and update moon x and y
			//position based off new theta value        
			theta += dTheta;
			if (solarObjects["moon"]) solarObjects["moon"].position.x = r * Math.cos(theta);
			if (solarObjects["moon"]) solarObjects["moon"].position.z = r * Math.sin(theta);

			this.renderer.render(this.scene, this.camera);
			requestAnimationFrame(render);
		};
		render();
	}

	componentWillUnmount() {
		cancelAnimationFrame(this.frameId);
		this.mount.removeChild(this.renderer.domElement);
	}

	visuals = () => {
		const width = this.mount.clientWidth;
		const height = this.mount.clientHeight;
		//ADD SCENE
		this.scene = new THREE.Scene();
		//Camera
		var zNear = 1;
		var zFar = 3500000;
		this.camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, zNear, zFar);
		this.camera.position.set(0, 0, 50);
		//ADD RENDERER
		this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false });
		this.renderer.setSize(width, height);
		this.mount.appendChild(this.renderer.domElement);
	}

	orbitals = () => {
		var controls = new OrbitControls(this.camera, this.renderer.domElement);
		controls.update();
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
	}

	sun = (loaded) => {
		var sunGeometry = new THREE.SphereGeometry(50, 50, 50);
		var sunMaterial = new THREE.MeshPhongMaterial({
			map: loaded
		});
		var sun = new THREE.Mesh(sunGeometry, sunMaterial);
		sun.position.set(150, 30, 150);
		solarObjects["sun"] = sun
		this.scene.add(solarObjects["sun"])
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
	}

	render() {
		return (
			<div className="Space"
				style={{ width: "auto", height: "100vh" }}
				ref={mount => {
					this.mount = mount;
				}}
			/>
		);
	}
}
export default ThreeScene;
