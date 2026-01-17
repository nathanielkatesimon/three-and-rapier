import CameraControls from 'camera-controls';
import { Box3, Matrix4, Quaternion, Raycaster, Sphere, Spherical, Vector2, Vector3, Vector4 } from 'three/webgpu';
import World from '../World';

CameraControls.install({
    THREE: { Vector2, Vector3, Vector4, Quaternion, Matrix4, Spherical, Box3, Sphere, Raycaster }
});

class CameraControl {
    constructor() {
        this.world = new World();
        this.cameraControl = new CameraControls(this.world.renderer.camera, this.world.renderer.engine.domElement);
        
        this.world.events.on("tick", (delta, _t) => {
            this.cameraControl.update(delta);
        })
    }
}

export default CameraControl;