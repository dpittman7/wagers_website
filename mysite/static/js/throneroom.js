import * as THREE from 'three';
import { GLTFLoader } from '../three/examples/jsm/loaders/GLTFLoader.js'
import { OrbitControls } from '../three/examples/jsm/controls/OrbitControls.js';
import { RoomEnvironment } from '../three/examples/jsm/environments/RoomEnvironment.js';
import { Object3D } from 'three';


class Experience { }

let camera, scene, renderer,raycaster,pointer;
init();
animate();

window.addEventListener('pointermove', onPointerMove);
window.addEventListener('dblclick', onPointerClick);
window.addEventListener('touchstart', onPointerClick);
console.log(pointer);

function init() {
	scene = new THREE.Scene();
	camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
	renderer = new THREE.WebGLRenderer();
	const loader = new GLTFLoader();
	const light = new THREE.AmbientLight({ color: 0x404040, intensity: 5.0 });
	const clock = new THREE.Clock(false);
	renderer.setPixelRatio(window.devicePixelRatio);
	renderer.setSize(window.innerWidth, window.innerHeight);
	renderer.outputEncoding = THREE.sRGBEncoding;
	renderer.physicallyCorrectLights = true;
	document.body.appendChild(renderer.domElement);

	const pmremGenerator = new THREE.PMREMGenerator(renderer);
	//scene.environment = pmremGenerator.fromScene(new RoomEnvironment(), 0.04).texture;

	camera.position.x = 10.68;
	camera.position.y = 20.55;
	camera.position.z = 0.80;

	camera.rotateX(13.9);
	camera.rotateY(.08);
	camera.rotateZ(2.57);

	loader.load("/static/objects/rulerThronev4.glb", function (gltf) {
		scene.add(gltf.scene);
		renderTVTexture();
		console.log(scene);
		console.log('scene loaded');
	}, undefined, function (error) {
		console.error(error);
	});

	const controls = new OrbitControls(camera, renderer.domElement);

	

	//console.log(scene);
	//console.log(camera);


	//const geometry = new THREE.BoxGeometry(1, 1, 1);
	//const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
	//const cube = new THREE.Mesh(geometry, material);
	//scene.add(cube);
	//scene.add(light);

	
}

function renderTVTexture() {
	const video = document.getElementById('video');
	const videoTexture = new THREE.VideoTexture(video);
	const _material = new THREE.MeshBasicMaterial({
		map: videoTexture
	});
	
	var videoscreen = scene.getObjectByName('videoscreen');
	//console.log(scene);
	//console.log(videoscreen);
	videoscreen.material = _material;
	//videoscreen.rotation.x =  Math.PI * 0.5;

	//const mesh = new THREE.Mesh(new THREE.BoxGeometry(1, 1, 1), material);
	//scene.add(mesh);
	video.style.display = "none";
	video.play();
}


var bezier = new THREE.CubicBezierCurve3();
var beziertransition = false;
var pathprogress = 0;
var offset = .005;
var bannerview = new THREE.Vector3(10.68, 20.55, 0.80);
function animate() {


	requestAnimationFrame(animate);
	if (beziertransition == true) {
		pathprogress += offset;
		updateCameraPos(pathprogress);
	} else { pathprogress = 0; }

	//console.log("camera position: " + camera.position.x + " " + camera.position.y + " " + camera.position.z);
	renderer.render(scene, camera);

	//console.log("Time to compute frame:" + clock.getElapsedTime());
};

var clock = new THREE.Clock(false);
clock.start();

function updateCameraPos(pathprogress) {
	var pos = bezier.getPoint(pathprogress);
	//console.log("Bezier path point: " + pos.x + pos.y + pos.z);
	camera.position.set(pos.x, pos.y, pos.z);
	camera.lookAt(bannerview);
	//console.log("iteration " + pathprogress + "camera active location" + "x: " + pos.x + "y: " + pos.y + "z: " + pos.z)  

	if ((pos.x == bannerview.x && pos.y == bannerview.y && pos.z == bannerview.z) || pathprogress > .99) {

		beziertransition = false;
		console.log("BezierTransition: toggle false");
	}

}

raycaster = new THREE.Raycaster();
pointer = new THREE.Vector2();

function onPointerMove(event) {


	// calculate pointer position in normalized device coordinates
	// (-1 to +1) for both components

	pointer.x = (event.clientX / window.innerWidth) * 2 - 1;
	pointer.y = - (event.clientY / window.innerHeight) * 2 + 1;

	raycaster.setFromCamera(pointer, camera);
	const intersects = raycaster.intersectObjects(scene.children);
	//console.log(intersects);

	for (let i = 0; i < intersects.length; i++) {

		var objID = intersects[i].object.id;
		//console.log('Selected Object ID: %i', objID);
	}
	// banner object ID = 74
	//console.log(pointer);

};

const objArray = ["leaderboard", "videoscreen"];

//applies only to banner object (id=74), need to abstactify to allow other objs
function onPointerClick(event) {
	console.log('double click/touchend event initated!');
	var interactiveObj = new THREE.Object3D();
	for (let i = 0; i < objArray.length; i++) {
		interactiveObj = scene.getObjectByName(objArray[i]);
		raycaster.setFromCamera(pointer, camera);
		var isIntersected = raycaster.intersectObject(interactiveObj);
		console.log(isIntersected);

		if (isIntersected.length != 0) {
			if (objArray[i] == "videoscreen") {
				//inject bezier curve
				console.log("videoscreen clicked!");
				bezier = bezierZoomIn(interactiveObj);
			}
			if (objArray[i] == "leaderboard") {
				//inject bezier curve
				console.log("leaderboard clicked!");
				leaderboardRedirect(interactiveObj);
			}

			
		}


	}

};

function bezierZoomIn() {

	// SET UP TARGET - hardcoded, a determined point to view the banner.
	var controlPoint2 = camera.position.clone();
	var controlPoint3 = bannerview.clone();

	//console.log("bezier control point relative to camera. : " + controlPoint2);
	//console.log("bezier control point relative to bannerview. : " + controlPoint3);

	//var normal = new THREE.Vector3(0, 1, 0);

	//controlPoint2.reflect(normal);
	//controlPoint2.reflect(normal);
	var magnitude = Math.sqrt(bannerview.distanceTo(camera.position));

	controlPoint2.multiplyScalar(magnitude);
	controlPoint3.multiplyScalar(magnitude);

	//SET UP CURVE FOR CAMERA TO FOLLOW
	bezier = new THREE.CubicBezierCurve3(camera.position, controlPoint2,
		controlPoint3, bannerview);
	//console.log("bezier pointes: " + bezier.getPoints());
	beziertransition = true;
	console.log("Besiertransition toggle: true");

	return bezier;
	
}

function leaderboardRedirect() {

	var url = "http://ultimagaming.co/leaderboard/"
	window.location.href = url;

}
