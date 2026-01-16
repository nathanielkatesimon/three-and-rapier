import './style.css';
import World from './World';
import("@dimforge/rapier3d").then((RAPIER) => {
    window.RAPIER = RAPIER;
    window.World = new World();
});

// import { BoxGeometry, Mesh, MeshNormalNodeMaterial, PerspectiveCamera, Scene, WebGPURenderer, Vector2, Vector3, Vector4, Quaternion, Matrix4, Spherical, Box3, Sphere, Raycaster } from 'three/webgpu';
// import CameraControls from 'camera-controls';
// CameraControls.install({
//     THREE: {
//         Vector2, Vector3, Vector4,
//         Quaternion, Matrix4, Spherical,
//         Box3, Sphere, Raycaster
//     }
// })
// const width = window.innerWidth, height = window.innerHeight;
// const camera = new PerspectiveCamera(75, width / height, 0.1, 100);
// camera.position.z = 2;

// const scene = new Scene();

// const renderer = new WebGPURenderer({ antialias: true });
// renderer.setSize(width, height);
// renderer.setClearColor(0xEEEEEE);
// document.body.appendChild(renderer.domElement);
// window.addEventListener("resize", () => {
//     const newWidth = window.innerWidth, newHeight = window.innerHeight;
//     camera.aspect = newWidth / newHeight;
//     camera.updateProjectionMatrix();
//     renderer.setSize(newWidth, newHeight);
// })

// const controls = new CameraControls(camera, renderer.domElement);

// import("@dimforge/rapier3d").then((_RAPIER) => {
//     renderer.setAnimationLoop(animate);
    
//     const cubeGeometry = new BoxGeometry(1, 1, 1);
//     const cubeMaterial = new MeshNormalNodeMaterial();
//     const cubeMesh = new Mesh(cubeGeometry, cubeMaterial);
//     scene.add(cubeMesh);
    
//     function animate(time) {
//         controls.update(time);
//         renderer.render(scene, camera)
//     }
// })
// 
//