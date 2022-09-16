import * as THREE from '../node_modules/three/build/three.module.js';
import WebGL from './WebGLError.js'
import Earth from './planets/Earth.js'
import Sun from './planets/Sun.js'
import Mars from './planets/Mars.js'
import Venus from './planets/Venus.js'
import Mercury from './planets/Mercury.js'
import Jupiter from './planets/Jupiter.js';
import Uranus from './planets/Uranus.js';
import Neptune from './planets/Neptune.js';
import Saturn from './planets/Saturn.js';
import Moon from './planets/Moon.js';




const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(window.devicePixelRatio)
document.body.appendChild(renderer.domElement);

camera.position.z = 12;
camera.position.y = 12
camera.rotation.x = -0.7

let earth,
    sun,
    mars,
    venus,
    mercury,
    jupiter,
    uranus,
    neptune,
    saturn,
    moon,
    earthMesh,
    sunMesh,
    marsMesh,
    venusMesh,
    mercuryMesh,
    jupiterMesh,
    uranusMesh,
    neptuneMesh,
    saturnMesh,
    moonMesh,
    earthOrbit = new THREE.Group(),
    marsOrbit = new THREE.Group(),
    moonOrbit = new THREE.Group()


window.onload = function main() {
    if (!WebGL.isWebGLAvailable()) {
        const warning = WebGL.getWebGLErrorMessage();
        document.querySelector('.container-WebGL-error').appendChild(warning);
    } else 
    {
        // main 
        initPlanets()        
        
        animate()
    }
};

function animate() {
    requestAnimationFrame(animate);

    movePlanets()

    renderer.render(scene, camera);
};

function movePlanets() {
    // earth
    earthMesh.rotation.y += 0.006
    earthOrbit.rotation.y += 0.005

    // moon
    moonMesh.rotation.y -= 0.01
    moonOrbit.rotation.y += 0.05

    // mars
    mars.getMesh().rotation.y += 0.006

    // venus
    venus.getMesh().rotation.y += 0.006

    // mercury
    mercury.getMesh().rotation.y += 0.006

    // jupiter
    jupiter.getMesh().rotation.y += 0.006
    
    // uranus
    uranus.getMesh().rotation.y += 0.006

    // neptune 
    neptune.getMesh().rotation.y += 0.006 

    // saturn 
    saturn.getMesh().rotation.y += 0.005
    // saturn.getMesh().rotation.x += 0.005
}

function initPlanets() {
        earth = new Earth()
        sun = new Sun()
        mars = new Mars()
        venus = new Venus()
        mercury = new Mercury()
        jupiter = new Jupiter()
        uranus = new Uranus()
        neptune = new Neptune()
        saturn = new Saturn()
        moon = new Moon()
        
        earthMesh = earth.getMesh()
        sunMesh = sun.getMesh()
        marsMesh = mars.getMesh()
        venusMesh = venus.getMesh()
        mercuryMesh = mercury.getMesh()
        jupiterMesh = jupiter.getMesh()
        uranusMesh = uranus.getMesh()
        neptuneMesh = neptune.getMesh()
        saturnMesh = saturn.getMesh()
        moonMesh = moon.getMesh()

        earthMesh.position.x = 10
        moonOrbit.position.x = 10
        moonMesh.position.x = 2

        moonOrbit.add(moonMesh)
        earthOrbit.add(earthMesh, moonOrbit)

        scene.add(sunMesh, earthOrbit)
}