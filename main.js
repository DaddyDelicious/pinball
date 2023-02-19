// simulation properties
const n = 0.0001;
const tf = 0.5;
const k_spring = 75;
const displacement = 0.07; // Contraction in meters
const mass = 0.08; // kilogram
const gravity = 9.81; // m/s^2
const fc = 0.2; //   Coefficient of friction. metal on wood (0.2-0.6)

var Ax = []; // declaring array for acceleration along x-axis.
Ax[0]=0; // initial condition for acceleration along x-axis.

var Vx = []; // declaring array for velocity along x-axis.
Vx[0] = 0; // initial condition for velocity along x-axis.

var x = []; // declaring array for x-component of objects position.
x[0] = 0; // initial condition for x-component of objects position.

// threejs setup
const scene = new THREE.Scene(); 
// variable explanation:  PerspectiveCamera(fov, aspect ratio, near clipping plane, far clipping plane)
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );



// Simulation
for(let k = 0; k < tf/n; k+=1){

}

//Eulers method function
function euler(old, der, h){
    //let output = old+(h*der);
    return old+(h*der);
}



///////////////////////////////////////  Links and schizophrenic rambling  ///////////////////////////////////////
// Euler & Mouse input in threeJS
//https://mofu-dev.com/en/blog/stable-fluids/


/////////////////  Useful  /////////////////
//https://github.com/victoriastraberg/TNM085/tree/main/Project_BalloonHouse
//https://github.com/victoriastraberg/TNM085/blob/main/Project_BalloonHouse/THREE_JS.js/index.js
////////////////////////////////////////////

// can rotate ball with:
// object.rotation.x += someFactor1*Vx(k);
// object.rotation.y += someFactor2*Vy(k);
