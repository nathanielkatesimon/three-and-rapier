import Stats from 'stats-gl';
import { TARGET_DOM } from '../renderer/Renderer';
import World from '../World';

class StatsGL extends Stats {
    constructor(parameters) {
        super(parameters);     
        this.world = new World;
        TARGET_DOM.appendChild(this.dom);
    }
    
    initMonitor() {
        this.init(this.world.renderer.engine);
        this.world.renderer.render = () => {
            this.world.events.trigger("tick", [this.world.renderer.clock.getDelta(), this.world.renderer.clock.getElapsedTime()]);
            this.world.renderer.engine.render(this.world.scene, this.world.renderer.camera);
            this.update();
            requestAnimationFrame(() => { this.world.renderer.render() });
        }
    }
}

export default StatsGL;