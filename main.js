import './style.css';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
//import { Neo } from './counter.js';

// Renderer
const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(80, window.innerWidth / window.innerHeight, 0.1, 10000);
const renderer = new THREE.WebGLRenderer({ canvas: document.querySelector('#bg') });
// Set the camera starting position
camera.position.set(800, 200, -200);  // Adjust the x, y, and z values to your desired starting point
// Make the camera look at the center of the scene (or another object, e.g., the sun)
camera.lookAt(0, 0, 0);  // Change the target coordinates as needed


renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.setZ(30);

renderer.render(scene, camera);

// SUN
const sunLoader = new THREE.TextureLoader();
const sunTexture = sunLoader.load('sun-texture.jpg'); // Correctly load the texture

const sunGeometry = new THREE.SphereGeometry(8, 32, 56);
const sunMaterial = new THREE.MeshBasicMaterial({
  map: sunTexture,  // Apply the loaded texture
  color: 0xffffff,  
});

const sun = new THREE.Mesh(sunGeometry, sunMaterial);
scene.add(sun);


// Light source inside the sun
const sunLight = new THREE.PointLight(0xffaa00, 3, 100);
sun.add(sunLight); 

// Mercury
const mercuryLoader = new THREE.TextureLoader();
const mercuryTexture = mercuryLoader.load('mercury-texture.jpg');
const mercuryGeometry = new THREE.SphereGeometry(0.6, 32, 32); 
const mercuryMaterial = new THREE.MeshBasicMaterial({ map: mercuryTexture });
const mercury = new THREE.Mesh(mercuryGeometry, mercuryMaterial);
scene.add(mercury);

const mercuryorbitGeometry = new THREE.TorusGeometry(80, 0.000001, 16, 100);
const mercuryorbitMaterial = new THREE.MeshBasicMaterial({ color: 0x564b3d, wireframe: true });
const mercuryorbit = new THREE.Mesh(mercuryorbitGeometry, mercuryorbitMaterial);
mercuryorbit.rotation.x = Math.PI / 2;
scene.add(mercuryorbit);

function animateMercury() {
  requestAnimationFrame(animateMercury);
  mercury.position.x = 80 * Math.cos(Date.now() * 0.0001);
  mercury.position.z = 80 * Math.sin(Date.now() * 0.0001);
  renderer.render(scene, camera);
}
animateMercury();

// Venus
const venusLoader = new THREE.TextureLoader();
const venusTexture = venusLoader.load('venus-texture.jpg');
const venusGeometry = new THREE.SphereGeometry(1.5, 32, 32);
const venusMaterial = new THREE.MeshBasicMaterial({ map: venusTexture });
const venus = new THREE.Mesh(venusGeometry, venusMaterial);
scene.add(venus);

const venusorbitGeometry = new THREE.TorusGeometry(220, 0.000001, 16, 100);
const venusorbitMaterial = new THREE.MeshBasicMaterial({ color: 0xecbe54, wireframe: true });
const venusorbit = new THREE.Mesh(venusorbitGeometry, venusorbitMaterial);
venusorbit.rotation.x = Math.PI / 2;
scene.add(venusorbit);

function animateVenus() {
  requestAnimationFrame(animateVenus);
  venus.position.x = 220 * Math.cos(Date.now() * 0.00008);
  venus.position.z = 220 * Math.sin(Date.now() * 0.00008);
  renderer.render(scene, camera);
}
animateVenus();

// Earth
const earthLoader = new THREE.TextureLoader();
const earthTexture = earthLoader.load('earth-texture2.jpg');
const earthGeometry = new THREE.SphereGeometry(2, 32, 32);
const earthMaterial = new THREE.MeshBasicMaterial({ map: earthTexture });
const earth = new THREE.Mesh(earthGeometry, earthMaterial);
scene.add(earth);

const earthorbitGeometry = new THREE.TorusGeometry(290, 0.000001, 16, 100);
const earthorbitMaterial = new THREE.MeshBasicMaterial({ color: 0x7ec2ee, wireframe: true });
const earthorbit = new THREE.Mesh(earthorbitGeometry, earthorbitMaterial);
earthorbit.rotation.x = Math.PI / 2;
scene.add(earthorbit);

function animateEarth() {
  requestAnimationFrame(animateEarth);
  earth.position.x = 290 * Math.cos(Date.now() * 0.00007);
  earth.position.z = 290 * Math.sin(Date.now() * 0.00007);
  renderer.render(scene, camera);
}
animateEarth();

// Mars
const marsLoader = new THREE.TextureLoader();
const marsTexture = marsLoader.load('mars-texture.jpg');
const marsGeometry = new THREE.SphereGeometry(1.1, 32, 32);
const marsMaterial = new THREE.MeshBasicMaterial({ map: marsTexture });
const mars = new THREE.Mesh(marsGeometry, marsMaterial);
scene.add(mars);

const marsorbitGeometry = new THREE.TorusGeometry(420, 0.000001, 16, 100);
const marsorbitMaterial = new THREE.MeshBasicMaterial({ color: 0xe88383, wireframe: true });
const marsorbit = new THREE.Mesh(marsorbitGeometry, marsorbitMaterial);
marsorbit.rotation.x = Math.PI / 2;
scene.add(marsorbit);

function animateMars() {
  requestAnimationFrame(animateMars);
  mars.position.x = 420 * Math.cos(Date.now() * 0.00006);
  mars.position.z = 420 * Math.sin(Date.now() * 0.00006);
  renderer.render(scene, camera);
}
animateMars();

// Jupiter
const jupiterLoader = new THREE.TextureLoader();
const jupiterTexture = jupiterLoader.load('jupiter-texture.jpg');
const jupiterGeometry = new THREE.SphereGeometry(4, 32, 32);
const jupiterMaterial = new THREE.MeshBasicMaterial({ map: jupiterTexture });
const jupiter = new THREE.Mesh(jupiterGeometry, jupiterMaterial);
scene.add(jupiter);

const jupiterorbitGeometry = new THREE.TorusGeometry(810, 0.000001, 16, 100);
const jupiterorbitMaterial = new THREE.MeshBasicMaterial({ color: 0xeea87e, wireframe: true });
const jupiterorbit = new THREE.Mesh(jupiterorbitGeometry, jupiterorbitMaterial);
jupiterorbit.rotation.x = Math.PI / 2;
scene.add(jupiterorbit);

function animateJupiter() {
  requestAnimationFrame(animateJupiter);
  jupiter.position.x = 810 * Math.cos(Date.now() * 0.00004);
  jupiter.position.z = 810 * Math.sin(Date.now() * 0.00004);
  renderer.render(scene, camera);
}
animateJupiter();

// Saturn
const saturnLoader = new THREE.TextureLoader();
const saturnTexture = saturnLoader.load('saturn-texture.jpg');
const saturnGeometry = new THREE.SphereGeometry(3.68, 32, 32);
const saturnMaterial = new THREE.MeshBasicMaterial({ map: saturnTexture });
const saturn = new THREE.Mesh(saturnGeometry, saturnMaterial);
scene.add(saturn);

// Saturn's Rings (placeholder for ring texture)
const saturnRingGeometry = new THREE.TorusGeometry(5.9, 0.5, 2, 100); // Ring larger than planet
const saturnRingMaterial = new THREE.MeshBasicMaterial({
    color: 0xffffff, // Placeholder color, replace this when you have the texture
    map: saturnLoader.load('saturns-ring-texture.png') // Replace this with your texture for the rings
});
const saturnRings = new THREE.Mesh(saturnRingGeometry, saturnRingMaterial);
saturnRings.rotation.x = Math.PI / 2.4; // Tilt rings to be horizontal around Saturn
saturn.add(saturnRings); // Attach rings to Saturn

// Saturn Orbit
const saturnorbitGeometry = new THREE.TorusGeometry(980, 0.000001, 16, 100);
const saturnorbitMaterial = new THREE.MeshBasicMaterial({ color: 0xffd88e, wireframe: true });
const saturnorbit = new THREE.Mesh(saturnorbitGeometry, saturnorbitMaterial);
saturnorbit.rotation.x = Math.PI / 2;
scene.add(saturnorbit);

function animateSaturn() {
  requestAnimationFrame(animateSaturn);
  saturn.position.x = 980 * Math.cos(Date.now() * 0.00002); // Adjust orbit speed
  saturn.position.z = 980 * Math.sin(Date.now() * 0.00002);
  renderer.render(scene, camera);
}
animateSaturn();

// Uranus
const uranusLoader = new THREE.TextureLoader();
const uranusTexture = uranusLoader.load('uranus-texture.jpg');
const uranusGeometry = new THREE.SphereGeometry(3.5, 32, 32);
const uranusMaterial = new THREE.MeshBasicMaterial({ map: uranusTexture });
const uranus = new THREE.Mesh(uranusGeometry, uranusMaterial);
scene.add(uranus);

const uranusorbitGeometry = new THREE.TorusGeometry(1350, 0.000001, 16, 100);
const uranusorbitMaterial = new THREE.MeshBasicMaterial({ color: 0x6afede, wireframe: true });
const uranusorbit = new THREE.Mesh(uranusorbitGeometry, uranusorbitMaterial);
uranusorbit.rotation.x = Math.PI / 2;
scene.add(uranusorbit);

function animateUranus() {
  requestAnimationFrame(animateUranus);
  uranus.position.x = 1350 * Math.cos(Date.now() * 0.000025);
  uranus.position.z = 1350 * Math.sin(Date.now() * 0.000025);
  renderer.render(scene, camera);
}
animateUranus();

// Neptune
const neptuneLoader = new THREE.TextureLoader();
const neptuneTexture = neptuneLoader.load('neptune-texture.jpg');
const neptuneGeometry = new THREE.SphereGeometry(3.4, 32, 32);
const neptuneMaterial = new THREE.MeshBasicMaterial({ map: neptuneTexture });
const neptune = new THREE.Mesh(neptuneGeometry, neptuneMaterial);
scene.add(neptune);

const neptuneorbitGeometry = new THREE.TorusGeometry(1750, 0.000001, 16, 100);
const neptuneorbitMaterial = new THREE.MeshBasicMaterial({ color: 0x6283ff, wireframe: true });
const neptuneorbit = new THREE.Mesh(neptuneorbitGeometry, neptuneorbitMaterial);
neptuneorbit.rotation.x = Math.PI / 2;
scene.add(neptuneorbit);

function animateNeptune() {
  requestAnimationFrame(animateNeptune);
  neptune.position.x = 1750 * Math.cos(Date.now() * 0.00002);
  neptune.position.z = 1750 * Math.sin(Date.now() * 0.00002);
  renderer.render(scene, camera);
}
animateNeptune();

const controls = new OrbitControls(camera, renderer.domElement);

// Enable damping (smooth transitions)
controls.enableDamping = true;
controls.dampingFactor = 0.3;  // Controls how much damping there is (lower is smoother)

// Control the zoom speed (adjust to your preference)
controls.zoomSpeed = 0.4;  // Lower value for slower zoom, higher for faster

// Set zoom limits (to prevent zooming too close or too far)
controls.minDistance = 10;  // Minimum distance for zooming in
controls.maxDistance = 4500;  // Maximum distance for zooming out

controls.maxPolarAngle = Math.PI / 1.5;  // Prevent camera from flipping upside down
controls.minPolarAngle = 0;            // Prevents looking too far upwards/downwards

function animate() {
  requestAnimationFrame(animate);
  // Ensure smooth transitions for zoom and other controls
  controls.update();
  renderer.render(scene, camera);
}

animate();

function addStars() {
  const starGeometry = new THREE.SphereGeometry(0.10, 24, 20);
  const starMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff });

  for (let i = 0; i < 2000; i++) {
    const star = new THREE.Mesh(starGeometry, starMaterial);
    const [x, y, z] = Array(3).fill().map(() => THREE.MathUtils.randFloatSpread(5000));
    star.position.set(x, y, z);
    scene.add(star);
  }
}
addStars();

function addPlanetLabels() {
  const planetLabels = [
    { object: mercury, name: 'Mercury', color: 'gray' },
    { object: venus, name: 'Venus', color: 'lemonchiffon' },
    { object: earth, name: 'Earth', color: 'cornflowerblue' },
    { object: mars, name: 'Mars', color: 'indianred' },
    { object: jupiter, name: 'Jupiter', color: 'sandybrown' },
    { object: saturn, name: 'Saturn', color: 'bisque' },
    { object: uranus, name: 'Uranus', color: 'aquamarine' },
    { object: neptune, name: 'Neptune', color: 'blueviolet' }
  ];

  const labels = [];

  // Create label elements and attach them to the document
  planetLabels.forEach((planet) => {
    const labelDiv = document.createElement('div');
    labelDiv.textContent = planet.name;
    labelDiv.style.position = 'absolute';
    labelDiv.style.color = planet.color;
    labelDiv.style.pointerEvents = 'none'; // Make sure labels don't interfere with mouse events
    labelDiv.style.fontFamily = 'Arial';
    labelDiv.style.fontSize = '15px';

    document.body.appendChild(labelDiv);
    labels.push({ object: planet.object, element: labelDiv });
  });

  // Update the labels position on each animation frame
  function updatePlanetLabels() {
    labels.forEach((label) => {
      const vector = new THREE.Vector3();
      label.object.updateWorldMatrix(true, false);
      vector.setFromMatrixPosition(label.object.matrixWorld);
      vector.project(camera);

      const x = (vector.x * 0.4 + 0.5) * window.innerWidth;
      const y = (-(vector.y * 0.4) + 0.5) * window.innerHeight;

      label.element.style.left = `${x}px`;
      label.element.style.top = `${y}px`;
    });

    requestAnimationFrame(updatePlanetLabels);
  }

  updatePlanetLabels(); // Start updating label positions
}
addPlanetLabels();  // Add labels for each planet

// Halley's Comet Orbit parameters
const semiMajorAxis = 1300; // Length of the semi-major axis (longest radius)
const semiMinorAxis = 300;  // Length of the semi-minor axis (shortest radius)
const focusDistance = Math.sqrt(semiMajorAxis**2 - semiMinorAxis**2); // Distance between center and one focus

// Geometry for Halley's Comet path (parametric curve for the elliptical orbit)
const halleyOrbitPoints = new THREE.Curve();
halleyOrbitPoints.getPoint = function(t) {
  const angle = t * 2 * Math.PI;
  const x = semiMajorAxis * Math.cos(angle) - focusDistance; // Shift ellipse so that one focus is close to the Sun
  const z = semiMinorAxis * Math.sin(angle);
  return new THREE.Vector3(x, 0, z);
};

// Create the comet's elliptical orbit
const halleyOrbitGeometry = new THREE.TubeGeometry(halleyOrbitPoints, 100, 0.001, 8, true);
const halleyOrbitMaterial = new THREE.MeshBasicMaterial({ color: 0x898989, wireframe: true });
const halleyOrbit = new THREE.Mesh(halleyOrbitGeometry, halleyOrbitMaterial);
scene.add(halleyOrbit);

// Create Halley's Comet object
const halleyLoader = new THREE.TextureLoader();
const halleyTexture = halleyLoader.load('halleys-texture.jpg');  // Replace with your comet texture
const halleyGeometry = new THREE.SphereGeometry(0.5, 32, 32);
const halleyMaterial = new THREE.MeshBasicMaterial({ map: halleyTexture });
const halley = new THREE.Mesh(halleyGeometry, halleyMaterial);
scene.add(halley);

// Animate Halley's Comet along the elliptical path
function animateHalleyComet() {
  requestAnimationFrame(animateHalleyComet);
  // Time-based position calculation for Halley's Comet
  const t = (Date.now() * 0.0000001) % 1; // The multiplier controls speed, adjust for your preferred speed
  // Get the current position on the elliptical orbit
  const point = halleyOrbitPoints.getPoint(t); 
  // Update comet's position based on the point along the elliptical orbit
  halley.position.set(point.x, point.y, point.z);
  // Render the scene with the updated comet position
  renderer.render(scene, camera);
}
animateHalleyComet();


// Add "Halley's Comet" to planet labels
const halleyLabelDiv = document.createElement('div');
halleyLabelDiv.textContent = "Halley's Comet ❄";
halleyLabelDiv.style.position = 'absolute';
halleyLabelDiv.style.color = 'white';
halleyLabelDiv.style.pointerEvents = 'none';
halleyLabelDiv.style.fontFamily = 'Arial';
halleyLabelDiv.style.fontSize = '14px';
document.body.appendChild(halleyLabelDiv);

function updateHalleyLabel() {
  const vector = new THREE.Vector3();
  halley.updateWorldMatrix(true, false);
  vector.setFromMatrixPosition(halley.matrixWorld);
  vector.project(camera);

  const x = (vector.x * 0.4 + 0.5) * window.innerWidth;
  const y = (-(vector.y * 0.4) + 0.5) * window.innerHeight;

  halleyLabelDiv.style.left = `${x}px`;
  halleyLabelDiv.style.top = `${y}px`;

  requestAnimationFrame(updateHalleyLabel);
}
updateHalleyLabel();


// Function to create horizontal ellipses (orbital paths) in the X-Z plane
function createHorizontalEllipseOrbit(a, b, xOffset, zOffset, color) {
  const curve = new THREE.EllipseCurve(
    0, 0,              // Center offset for orbit (will adjust in position)
    a, b,              // Semi-major and semi-minor axes
    0, 2 * Math.PI,    // Start and end angle
    false,             // Clockwise
    0                  // Rotation (set to zero for horizontal)
  );

  const points = curve.getPoints(100);
  const orbitPath = new THREE.BufferGeometry().setFromPoints(points);
  const orbitMaterial = new THREE.LineBasicMaterial({ color: color });
  const ellipse = new THREE.Line(orbitPath, orbitMaterial);

  // Adjusting the position of the orbit to the X-Z plane
  ellipse.position.set(xOffset, 0, zOffset);

  // Rotate the orbit to lie in the X-Z plane instead of X-Y
  ellipse.rotation.x = Math.PI / 2; // Rotate by 90 degrees to align with X-Z

  return ellipse;
}


// Amors asteroid with elliptical orbit
const amor = new THREE.Mesh(new THREE.SphereGeometry(1, 32, 2), new THREE.MeshBasicMaterial({ color: 0x898989}));
scene.add(amor);

// Amors orbit (horizontal elliptical orbit)
const amorOrbit = createHorizontalEllipseOrbit(320, 290, -30, 0, 0x737373); // Adjusted for horizontal
scene.add(amorOrbit);

// Apollos asteroid
const apollo = new THREE.Mesh(new THREE.SphereGeometry(1.1, 32, 32), new THREE.MeshBasicMaterial({ color: 0x898989a }));
scene.add(apollo);

// Apollos orbit (horizontal elliptical orbit)
const apolloOrbit = createHorizontalEllipseOrbit(360, 290, 40, 0, 0x737373); // Horizontal orientation
scene.add(apolloOrbit);

// Atens asteroid
const aten = new THREE.Mesh(new THREE.SphereGeometry(1, 32, 32), new THREE.MeshBasicMaterial({ color: 0x898989 }));
scene.add(aten);

// Atens orbit (horizontal elliptical orbit)
const atenOrbit = createHorizontalEllipseOrbit(270, 290, 20, 0, 0x737373);
scene.add(atenOrbit);

// Atiras asteroid
const atira = new THREE.Mesh(new THREE.SphereGeometry(0.8, 32, 32), new THREE.MeshBasicMaterial({ color: 0x737373}));
scene.add(atira);

// Atiras orbit (horizontal elliptical orbit)
const atiraOrbit = createHorizontalEllipseOrbit(230, 200, -50, 0, 0x737373);
scene.add(atiraOrbit);

function addAsteroidLabels() {
  const asteroidLabels = [
    { object: amor, name: 'Amor', color: 'white' },
    { object: apollo, name: 'Apollo', color: 'white' },
    { object: aten, name: 'Aten', color: 'white' },
    { object: atira, name: 'Atira', color: 'white' }
  ];

  const asteroid_labels = [];

  asteroidLabels.forEach((asteroid) => {
    const labelDiv = document.createElement('div');
    labelDiv.textContent = "🔴 " + asteroid.name;  
    labelDiv.style.position = 'absolute';
    labelDiv.style.color = asteroid.color;
    labelDiv.style.pointerEvents = 'none'; 
    labelDiv.style.fontFamily = 'Arial';
    labelDiv.style.fontSize = '10px';  
    labelDiv.style.backgroundColor = 'rgba(0, 0, 0, 0.6)'; 
    labelDiv.style.padding = '4px'; 
    labelDiv.style.borderRadius = '4px'; 
    labelDiv.style.textAlign = 'center';

    document.body.appendChild(labelDiv);
    asteroid_labels.push({ object: asteroid.object, element: labelDiv });
  });

  function updateAsteroidLabels() {
    asteroid_labels.forEach((label) => {
      const vector = new THREE.Vector3();
      label.object.updateWorldMatrix(true, false);
      vector.setFromMatrixPosition(label.object.matrixWorld);
      vector.project(camera);

      const x = (vector.x * 0.4 + 0.5) * window.innerWidth;
      const y = (-(vector.y * 0.4) + 0.5) * window.innerHeight;

      label.element.style.left = `${x}px`;
      label.element.style.top = `${y}px`;
    });

    requestAnimationFrame(updateAsteroidLabels);
  }
  updateAsteroidLabels(); 
}
addAsteroidLabels();


// Animation to move asteroids along horizontal elliptical orbits (in the X-Z plane)
function animateAsteroids() {
  requestAnimationFrame(animateAsteroids);

  // Update Amors asteroid position (moving in X-Z plane)
  amor.position.x = -30 + 320 * Math.cos(Date.now() * 0.0005);  // Adjusted for elliptical shape
  amor.position.z = 290 * Math.sin(Date.now() * 0.0005);        // Z axis for movement

  // Update Apollos asteroid position (moving in X-Z plane)
  apollo.position.x = 40 + 360 * Math.cos(Date.now() * 0.00045); // Different orbital speed
  apollo.position.z = 290 * Math.sin(Date.now() * 0.00045);      // Z axis for movement

  // Update Atens asteroid position (moving in X-Z plane)
  aten.position.x = 20 + 270 * Math.cos(Date.now() * 0.0006);
  aten.position.z = 290 * Math.sin(Date.now() * 0.0006);         // Z axis for movement

  // Update Atiras asteroid position (moving in X-Z plane)
  atira.position.x = -50 + 250 * Math.cos(Date.now() * 0.0007);
  atira.position.z = 200 * Math.sin(Date.now() * 0.0007);        // Z axis for movement

  // Ensure labels follow the asteroids
  amorLabel.position.copy(amor.position);
  apolloLabel.position.copy(apollo.position);
  atenLabel.position.copy(aten.position);
  atiraLabel.position.copy(atira.position);

  renderer.render(scene, camera);
}

animateAsteroids();


