import './style.css'

import * as Three from 'three';

import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

//the scene is like the container in an HTML document
const scene = new Three.Scene();

const camera = new Three.PerspectiveCamera(75, window.innerHeight / window.innerHeight, 0.1, 1000);

const renderer = new Three.WebGLRenderer({
  canvas: document.querySelector('#background'),
});

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.setZ(30);
camera.position.setX(-3);

renderer.render(scene, camera);

//circle

const geometry = new Three.TorusGeometry(10, 3, 16,100);
const material = new Three.MeshStandardMaterial({ color: 0xFF6347 });
const torus = new Three.Mesh(geometry, material);

scene.add(torus);

//this creates a light source
const pointLight = new Three.PointLight(0xffffff);
pointLight.position.set(5, 5, 5)

const ambientLight = new Three.AmbientLight(0xffffff);

//to see on the browser those things you need to add them to the scene
scene.add(pointLight, ambientLight);

// this creates a diamond shape that allows you to see where the light is coming from
const lightHelper = new Three.PointLightHelper(pointLight)
const gridHelper = new Three.GridHelper(200, 50);
scene.add(lightHelper, gridHelper)

//after being imported this updates the movements on the mouse and moves the elements on the browser
const controls = new OrbitControls(camera, renderer.domElement);

//this creates stars and scatters them
function addStar() {
  const geometry = new Three.SphereGeometry(0.25, 24, 24);
  const material = new Three.MeshStandardMaterial({ color: 0xffffff })
  const star = new Three.Mesh(geometry, material);

  const [x, y, z] = Array(3)
  .fill()
  .map(() => Three.MathUtils.randFloatSpread(100));

  star.position.set(x, y, z);
  scene.add(star)
}
//calls that function
Array(200).fill().forEach(addStar)

//adding background texture but now it looks kinda wonky
const spaceTexture = new Three.TextureLoader().load('space.jpg');
scene.background = spaceTexture;

function animate() {
  requestAnimationFrame(animate);
  torus.rotation.x += 0.01;
  torus.rotation.y += 0.005;
  torus.rotation.z += 0.01;
  //mouse controls
  controls.update();
  //calls the scene and camera
  renderer.render(scene, camera);
}

animate();

//avatar

const guTexture = new Three.TextureLoader().load('gu.png');

const gu = new Three.Mesh(
  new Three.BoxGeometry(3, 3, 3),
  new Three.MeshBasicMaterial({ map: guTexture })
);

scene.add(gu);

//uranus

const anusTexture = new Three.TextureLoader().load('anus.jpeg')

const uranus = new Three.Mesh(
  new Three.SphereGeometry(3, 32, 32),
  new Three.MeshStandardMaterial({ map: anusTexture })
);
scene.add(uranus);

uranus.position.z = 30;
uranus.position.setX(-10);

gu.position.z = -5;
gu.position.x =2;

//scroll animation

// function moveCamera() {
//   const t = document.body.getBoundingClientRect().top;
//   uranus.rotation.x += 0.05;
//   uranus.rotation.y += 0.075;
//   uranus.rotation.z += 0.05;

//   gu.rotation.y += 0.01;
//   gu.rotation.z += 0.01;

//   camera.position.z = t * -0.01;
//   camera.position.x = t * -0.0002;
//   camera.rotation.y = t * -0.0002;
// }

// document.body.onscroll = moveCamera;
// moveCamera();

// Animation Loop

// function animate() {
//   requestAnimationFrame(animate);

//   torus.rotation.x += 0.01;
//   torus.rotation.y += 0.005;
//   torus.rotation.z += 0.01;

//   uranus.rotation.x += 0.005;

//   // controls.update();

//   renderer.render(scene, camera);
// }

// animate();
