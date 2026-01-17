import Events from "./Events";
import Inputs from "./inputs/Inputs";
import Renderer from "./renderer/Renderer";

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
    }
}

export default World;