import { PerspectiveCamera, WebGPURenderer, Scene, Clock } from "three/webgpu";
import World from "../World";
import Viewport from "./Viewport";

const TARGET_DOM = document.body
const FOV = 75;
const NEAR_PLANE = 0.1;
const FAR_PLANE = 100;

class Renderer {
    constructor() {
        this.world = new World();
        this.world.scene = new Scene();
        this.viewport = new Viewport();
        this.clock = new Clock();

        this.setupCamera();
        this.setupEngine();

        this.world.events.on("viewport_resize", () => { this.updateProjections() });
    }

    setupCamera() {
        this.camera = new PerspectiveCamera(FOV, this.viewport.aspect, NEAR_PLANE, FAR_PLANE);
        this.camera.position.z = 3;
        this.camera.position.y = 3;
        this.camera.lookAt(0, 0, 0);
    }

    setupEngine() {
        this.engine = new WebGPURenderer({ antialias: true });
        this.engine.setSize(this.viewport.width, this.viewport.height);
        this.engine.setClearColor(0xFFFFFF);
        TARGET_DOM.appendChild(this.engine.domElement);
    }

    updateProjections() {
        this.engine.setSize(this.viewport.width, this.viewport.height);
        this.camera.aspect = this.viewport.aspect;
        this.camera.updateProjectionMatrix();
    }

    render() {
        this.engine.render(this.world.scene, this.camera);
        this.world.events.trigger("tick", [this.clock.getDelta(), this.clock.getElapsedTime()]);
        requestAnimationFrame(() => { this.render() });
    }
}

export default Renderer;