import * as THREE from '../../node_modules/three/build/three.module.js';

export default class Sun {
    constructor() {
        const geom = new THREE.SphereGeometry(1.5, 64, 64)
        const mat = new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load('../../map/sun-map.jpg')})
        this.sun = new THREE.Mesh(geom, mat)
    }

    getMesh() {
        return this.sun
    }
}