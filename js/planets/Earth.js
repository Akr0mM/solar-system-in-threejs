import * as THREE from '../../node_modules/three/build/three.module.js';

export default class Earth {
    constructor() {
        const geom = new THREE.SphereGeometry(1, 64, 64)
        const mat = new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load('../../map/earth-map.jpg')})
        this.earth = new THREE.Mesh(geom, mat)
    }

    getMesh() {
        return this.earth
    }
}