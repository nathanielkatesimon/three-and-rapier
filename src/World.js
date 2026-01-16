import Events from "./Events";

class World {
    constructor() {
        if (World._instance) return World._instance;
        World._instance = this;
    
        this.events = new Events();
    }
}

export default World;