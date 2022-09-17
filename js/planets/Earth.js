import * as THREE from '../../node_modules/three/build/three.module.js';

export default class Earth {
    constructor() {
        const geom = new THREE.SphereGeometry(1, 64, 64);
        const mat = new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load('../../map/earth-map.jpg') });
        this.earth = new THREE.Mesh(geom, mat);
    }

    getMesh() {
        return this.earth;
    }

    createLine() {
        const geom = new THREE.RingGeometry(this.earth.position.x + 0.03, this.earth.position.x, 64);
        const material = new THREE.MeshBasicMaterial({ color: 0xffffff, side: THREE.DoubleSide });
        const mesh = new THREE.Mesh(geom, material);
        mesh.rotation.x += Math.PI / 2
        return mesh;
    }
}