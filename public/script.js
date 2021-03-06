// const scene = new THREE.Scene();
// const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

// const renderer = new THREE.WebGLRenderer();
// renderer.setSize( window.innerWidth, window.innerHeight );
// document.body.appendChild( renderer.domElement );

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

// add cube
const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
const cube = new THREE.Mesh( geometry, material );
scene.add( cube );

/*
* Usage:
 *  var loader = new THREE.STLLoader();
 *  loader.load( './models/stl/slotted_disk.stl', function ( geometry ) {
 *    scene.add( new THREE.Mesh( geometry ) );
 *  });*/

// load stl
var loader = new THREE.STLLoader();
loader.load( 'https://cdn.glitch.com/ab70b33b-5f4b-4679-acb2-183248883cad%2FStanford_Bunny_sample.stl?v=1615065486212', function ( geometry ) {
  scene.add( new THREE.Mesh( geometry ) );
});

camera.position.z = 5;

var guiControls = new function() {
    this.Thickness = 0.01;
    this.Min_Height = 0.01;
    this.Angle_Range = 0;
}

// GUI vars set by user interface
// access vars via guiControls.{var name}
var datGUI = new dat.GUI();
datGUI.add(guiControls, 'Thickness', 0, 10);
datGUI.add(guiControls, 'Min_Height', 0, 100);
datGUI.add(guiControls, 'Angle_Range', 0, 90);

render();
function render() {
    requestAnimationFrame(render);
    renderer.render(scene,camera);
}