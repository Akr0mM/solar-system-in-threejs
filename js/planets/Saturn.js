import * as THREE from '../../node_modules/three/build/three.module.js';

export default class Saturn {
    constructor() {
        const geomSphere = new THREE.SphereGeometry(15, 64, 64);
        const matSphere = new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load('../../map/saturn-map.jpg') });
        const sphere = new THREE.Mesh(geomSphere, matSphere);

        const geomRing = new THREE.RingGeometry(20, 29, 64);
        const ringTexture = new THREE.TextureLoader().load('../../map/saturn-ring-map.png');
        const matRing = new THREE.MeshBasicMaterial({ color: 0xffffff, map: ringTexture, side: THREE.DoubleSide, transparent: true });
        const ring = new THREE.Mesh(geomRing, matRing);
        ring.rotation.x = Math.PI / 2;
        
        this.saturn = new THREE.Group();
        this.saturn.add(sphere);
        this.saturn.add(ring);
    }

    getMesh() {
        return this.saturn;
    }
}


