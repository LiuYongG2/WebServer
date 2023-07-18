// 创建一个 Three.js 场景
const scene = new THREE.Scene();

// 创建相机并设置位置
const camera = new THREE.PerspectiveCamera(1000, window.innerWidth / window.innerHeight, 0.9, 100);
camera.position.set(0, 0, 18);

// 添加相机到场景中
scene.add(camera);

// 创建一个 Three.js 渲染器，并设置维度
const renderer = new THREE.WebGLRenderer({
  antialias: true,
  alpha: true
});
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

// 用 requestAnimationFrame 更新场景
function animate() {
  requestAnimationFrame(animate);
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;
  renderer.render(scene, camera);
}
animate();