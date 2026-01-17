import Events from "./Events";
import Inputs from "./inputs/Inputs";
import Renderer from "./renderer/Renderer";

const GRAVITY = { x: 0.0, y: -9.81, z: 0.0 };

class World {
    constructor() {
        if (World._instance) return World._instance;
        World._instance = this;

        this.events = new Events();
        this.renderer = new Renderer();
        this.inputs = new Inputs();
    }

    initRapier(RAPIER) {
        this.rapier = RAPIER;
        this.physicsWorld = new RAPIER.World(GRAVITY);
        this.events.on("tick", () => {
            this.physicsWorld.step();
        })
    }
}

export default World;