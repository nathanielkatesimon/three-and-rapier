import World from "../World";

class Viewport {
    constructor() {
        this.world = new World();
        this.width = window.innerWidth;
        this.height = window.innerHeight;
        this.aspect = this.width / this.height;

        addEventListener("resize", () => { this.updateViewport() })
    }
    
    updateViewport() {
        this.width = window.innerWidth;
        this.height = window.innerHeight;
        this.aspect = this.width / this.height;
        this.world.events.trigger("viewport_resize")
    }
}

export default Viewport;