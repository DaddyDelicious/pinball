const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera();

// simulation properties
const n = 0.0001;
const tf = 0.5;

const k_spring = 75;
const displacement = 0.07; // Contraction in meters
const mass = 0.08; // kilogram
const gravity = 9.81; // m/s^2
const fc = 0.2; //   Coefficient of friction. metal on wood (0.2-0.6)

// Begynnelsevilkor
var Ax = []; // declaring array for acceleration along x-axis.
Ax[0]=0; // initial condition for acceleration along x-axis.

var Vx = []; // declaring array for velocity along x-axis.
Vx[0] = 0; // initial condition for velocity along x-axis.

var x = []; // declaring array for x-component of objects position.
x[0] = 0; // initial condition for x-component of objects position.


//Eulers method function
function euler(old, der, h){
    let output = old+(h*der);
    return output;
}