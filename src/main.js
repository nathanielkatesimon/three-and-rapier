import { BoxGeometry, Mesh, MeshNormalNodeMaterial } from 'three/webgpu';
import './style.css';
import World from './World';

async function main() {
    const { default: RAPIER } = await import("@dimforge/rapier3d");
    
    const WORLD = new World();
    
    // Physics engine
    WORLD.initRapier(RAPIER);

    // Example
    const boxGeometry = new BoxGeometry(1, 1, 1);
    const boxMaterial = new MeshNormalNodeMaterial();
    const boxMesh = new Mesh(boxGeometry, boxMaterial)
    WORLD.scene.add(boxMesh);

    WORLD.events.on("tick", (delta, _t) => {
        boxMesh.rotateY(1 * delta);
    })

    await WORLD.renderer.engine.init();
    WORLD.renderer.render();
}

main();