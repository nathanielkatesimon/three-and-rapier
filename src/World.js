import Events from "./Events";
import Renderer from "./renderer/Renderer";

class World {
    constructor() {
        if (World._instance) return World._instance;
        World._instance = this;

        this.events = new Events();
        this.renderer = new Renderer();
    }
    
    initRapier(RAPIER) {
        this.rapier = RAPIER;
    }
}

export default World;