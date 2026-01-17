import { BufferGeometry, Float32BufferAttribute, LineSegments } from "three/webgpu";
import World from "../World";
import { LineBasicNodeMaterial } from "three/webgpu";

class Debug {
    constructor() {
        this.world = new World();
    }
    
    initRapierDebug() {
        if (!this.world.physicsWorld) return;

        const bufferGeometry = new BufferGeometry();
        bufferGeometry.setAttribute("position", new Float32BufferAttribute([], 3));
        bufferGeometry.setAttribute("color", new Float32BufferAttribute([], 4));

        const lineSegments = new LineSegments(bufferGeometry, new LineBasicNodeMaterial({ vertexColors: true }));
        this.world.events.on("tick", () => {
            const { vertices, colors } = this.world.physicsWorld.debugRender();

            bufferGeometry.attributes.position.array = vertices;
            bufferGeometry.attributes.position.count = vertices.length / 3;
            bufferGeometry.attributes.position.needsUpdate = true;
            
            bufferGeometry.attributes.color.array = colors;
            bufferGeometry.attributes.color.count = colors.length / 3;
            bufferGeometry.attributes.color.needsUpdate = true;            
        })

        this.world.scene.add(lineSegments);
    }
}

export default Debug;