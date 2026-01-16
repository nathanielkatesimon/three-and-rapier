import { BoxGeometry, Mesh, MeshNormalNodeMaterial } from 'three/webgpu';
import './style.css';
import World from './World';
import("@dimforge/rapier3d").then(async (RAPIER) => {
    window.RAPIER = RAPIER;
    window.WORLD = new World();
    
    // Example
    const boxGeometry = new BoxGeometry(1, 1, 1);
    const boxMaterial = new MeshNormalNodeMaterial();
    const boxMesh = new Mesh(boxGeometry, boxMaterial)
    WORLD.scene.add(boxMesh);
    
    WORLD.events.on("tick", (_d, time) => {
        boxMesh.rotateY(0.01);
    })
    
    await WORLD.renderer.engine.init();
    WORLD.renderer.render();
});