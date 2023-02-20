//import * as THREE from 'three';

// simulation properties
const n = 0.0001;
const tf = 0.5;
const k_spring = 75;
var displacement = 0.07; // Contraction in meters
const mass = 0.08; // kilogram
const gravity = 9.81; // m/s^2
const fc = 0.2; //   Coefficient of friction. metal on wood (0.2-0.6)

//////////////////////    Ball variables init    //////////////////////////
var Ax = []; // declaring array for acceleration along x-axis.
var Vx = []; // declaring array for velocity along x-axis.
var x = []; // declaring array for x-component of objects position.

var Ay = []; // declaring array for acceleration along y-axis.
var Vy = []; // declaring array for velocity along y-axis.
var y = []; // declaring array for y-component of objects position.

Ax[0] = 0; // initial condition for acceleration along x-axis.
Vx[0] = 0; // initial condition for velocity along x-axis.
x[0] = 0; // initial condition for x-component of objects position.

Ay[0] = 0; // initial condition for acceleration along y-axis.
Vy[0] = 0; // initial condition for velocity along y-axis.
y[0] = 0; // initial condition for y-component of objects position.


////////////////////    scene setup    ////////////////////
const scene = new THREE.Scene(); 
// variable explanation:  PerspectiveCamera(fov, aspect ratio, near clipping plane, far clipping plane)
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );


const ball = new THREE.Object3D(); // the ball
scene.add( ball ); // places object in the scene (maybe do this somewhere else)
ball.matrixAutoUpdate = false; // allows only manual update of position


// Simulation
// Might not be able to run the threejs scene update inside this loop
for(let k = 1; k < tf/n; k+=1){ // starts at k=1 <=> k=2 in MATLAB
    let Fk = k_spring*displacement;
    let Ftot = Fk; // expand later
    Ax[k] = (Ftot/mass); // works, adding element outside of array bounds creates a new array slot.

    if(displacement > 0){
        Vx[k] = euler(Vx[k-1], Ax[k-1], n);
        x[k] = euler(x[k-1], Vx[k-1], n);
        ball.position.x = x[k]; // set new x-coordinate for ball position
        // needs scene-update call here
        displacement = euler(displacement, -(Vx[k-1]), n);

        if(displacement < 0){ 
            displacement = 0;
        }
    }else{
        Vx[k] = euler(Vx[k-1], Ax[k], n);
        x[k] = euler(x[k-1], Vx[k-1], n);
        ball.position.x = x[k]; // set new x-coordinate for ball position
        // needs scene-update call here
    }
}

//Eulers method function
function euler(old, der, h){
    //let output = old+(h*der);
    return old+(h*der);
}





//                Links and shit
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
// 
//
//
//
//
////////////////////  Useful  /////////////////////
// https://github.com/victoriastraberg/TNM085/tree/main/Project_BalloonHouse
// https://github.com/victoriastraberg/TNM085/blob/main/Project_BalloonHouse/THREE_JS.js/index.js
//
//
//
//
/////////////////  Maybe Useful  /////////////////
// https://github.com/patrick-s-young/pinball-xr/blob/main/src/app.js
// https://mofu-dev.com/en/blog/stable-fluids/    <-- uses Euler & Mouse input in threeJS
// https://discourse.threejs.org/t/implementation-of-a-object-position-x-in-an-animationloop/19737
//
//
//
///////////////////  For Later  //////////////////
// can rotate ball with:
// object.rotation.x += someFactor1*Vx(k);
// object.rotation.y += someFactor2*Vy(k);
//
//
// 
//
//
//
//
//
// 
//
//
//
//
//
// 
//
//
//
//
//
// 
//
//
//
//





// sus
// ⠄⠄⠄⠄⠄⠄⠄⠄⠄⢀⣤⣶⣿⣿⣿⣿⣿⣿⣿⣶⣄⠄⠄⠄⠄⠄⠄⠄⠄⠄
// ⠄⠄⠄⠄⠄⠄⠄⢀⣴⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣧⠄⠄⠄⠄⠄⠄⠄⠄
// ⠄⠄⠄⠄⠄⠄⢀⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣧⠄⠄⠄⠄⠄⠄⠄
// ⠄⠄⠄⠄⠄⣴⡿⠛⠉⠁⠄⠄⠄⠄⠈⢻⣿⣿⣿⣿⣿⣿⣿⠄⠄⠄⠄⠄⠄⠄
// ⠄⠄⠄⠄⢸⣿⡅⠄⠄⠄⠄⠄⠄⠄⣠⣾⣿⣿⣿⣿⣿⣿⣿⣷⣶⣶⣦⠄⠄⠄
// ⠄⠄⠄⠄⠸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣇⠄⠄
// ⠄⠄⠄⠄⠄⢸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠄⠄
// ⠄⠄⠄⠄⠄⢸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠄⠄
// ⠄⠄⠄⠄⠄⢸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠄⠄
// ⠄⠄⠄⠄⠄⢸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠄⠄
// ⠄⠄⠄⠄⠄⠘⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠄⠄
// ⠄⠄⠄⠄⠄⠄⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡟⠛⠛⠛⠃⠄⠄
// ⠄⠄⠄⠄⠄⣼⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠄⠄⠄⠄⠄⠄
// ⠄⠄⠄⠄⢰⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡇⠄⠄⠄⠄⠄
// ⠄⠄⠄⢀⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠄⠄⠄⠄⠄
// ⠄⠄⠄⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⢻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡆⠄⠄⠄⠄
// ⠄⠄⢠⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠃⠄⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠇⠄⠄⠄⠄
// ⠄⠄⢸⣿⣿⣿⣿⣿⣿⣿⡿⠟⠁⠄⠄⠄⠻⣿⣿⣿⣿⣿⣿⣿⡿⠄⠄⠄⠄⠄
// ⠄⠄⢸⣿⣿⣿⣿⣿⡿⠋⠄⠄⠄⠄⠄⠄⠄⠙⣿⣿⣿⣿⣿⣿⡇⠄⠄⠄⠄⠄
// ⠄⠄⢸⣿⣿⣿⣿⣿⣧⡀⠄⠄⠄⠄⠄⠄⠄⢀⣾⣿⣿⣿⣿⣿⡇⠄⠄⠄⠄⠄
// ⠄⠄⢸⣿⣿⣿⣿⣿⣿⣿⡄⠄⠄⠄⠄⠄⠄⣿⣿⣿⣿⣿⣿⣿⣷⠄⠄⠄⠄⠄
// ⠄⠄⠸⣿⣿⣿⣿⣿⣿⣿⣷⠄⠄⠄⠄⠄⢰⣿⣿⣿⣿⣿⣿⣿⣿⠄⠄⠄⠄⠄
// ⠄⠄⠄⢿⣿⣿⣿⣿⣿⣿⡟⠄⠄⠄⠄⠄⠸⣿⣿⣿⣿⣿⣿⣿⠏⠄⠄⠄⠄⠄
// ⠄⠄⠄⠈⢿⣿⣿⣿⣿⠏⠄⠄⠄⠄⠄⠄⠄⠙⣿⣿⣿⣿⣿⠏⠄⠄⠄⠄⠄⠄
// ⠄⠄⠄⠄⠘⣿⣿⣿⣿⡇⠄⠄⠄⠄⠄⠄⠄⠄⣿⣿⣿⣿⡏⠄⠄⠄⠄⠄⠄⠄
// ⠄⠄⠄⠄⠄⢸⣿⣿⣿⣧⠄⠄⠄⠄⠄⠄⠄⢀⣿⣿⣿⣿⡇⠄⠄⠄⠄⠄⠄⠄
// ⠄⠄⠄⠄⠄⣸⣿⣿⣿⣿⣆⠄⠄⠄⠄⠄⢀⣾⣿⣿⣿⣿⣿⣄⠄⠄⠄⠄⠄⠄
// ⠄⣀⣀⣤⣾⣿⣿⣿⣿⡿⠟⠄⠄⠄⠄⠄⠸⣿⣿⣿⣿⣿⣿⣿⣷⣄⣀⠄⠄⠄
// ⠸⠿⠿⠿⠿⠿⠿⠟⠁⠄⠄⠄⠄⠄⠄⠄⠄⠄⠉⠉⠛⠿⢿⡿⠿⠿⠿⠃⠄⠄