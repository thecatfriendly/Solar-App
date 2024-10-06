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
halleyLabelDiv.style.fontSize = '10px';
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
