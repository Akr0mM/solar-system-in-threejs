import * as THREE from '../../node_modules/three/build/three.module.js';

export default class Jupiter {
    constructor() {
        const geom = new THREE.SphereGeometry(15, 64, 64)
        const mat = new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load('../../map/jupiter-map.jpg')})
        this.jupiter = new THREE.Mesh(geom, mat)
    }

    getMesh() {
        return this.jupiter
    }
}