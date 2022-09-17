import * as THREE from '../../node_modules/three/build/three.module.js';

export default class Moon {
    constructor() {
        const geom = new THREE.SphereGeometry(0.272, 64, 64)
        const mat = new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load('../../map/moon-map.jpg')})
        this.moon = new THREE.Mesh(geom, mat)
    }

    getMesh() {
        return this.moon
    }
}