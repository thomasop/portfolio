/* export const vertex = `
varying vec2 vUv;
uniform float uTime;
uniform float uAmplitude;
uniform float uWaveLength;
void main() {
    vUv = uv;
    vec3 newPosition = position;

    float wave = uAmplitude * sin(position.x * uWaveLength + uTime);
    newPosition.z = position.z + wave; 

    gl_Position = projectionMatrix * modelViewMatrix * vec4(newPosition, 1.0);
  }
`;

export const fragment = `
uniform sampler2D uTexture;
uniform vec2 vUvScale;
varying vec2 vUv;
void main() {
    vec2 uv = (vUv - 0.5) * vUvScale + 0.5;
    vec4 color = texture2D(uTexture, uv);
    gl_FragColor = color;  
}
`;
 */

export const vertex = `
varying vec2 vUv;
uniform float uTime;
uniform float uAmplitude;
uniform float uWaveLength;
uniform vec2 vUvScale;
uniform vec2 vUvOffset;
void main() {
    vUv = uv * vUvScale + vUvOffset;
    vec3 newPosition = position;

    float wave = uAmplitude * sin(position.x * uWaveLength + uTime);
    newPosition.z = position.z + wave; 

    gl_Position = projectionMatrix * modelViewMatrix * vec4(newPosition, 1.0);
}
`;

export const fragment = `
uniform sampler2D uTexture;
uniform float uOpacity;
varying vec2 vUv;
void main() {
    vec4 backgroundColor = vec4(0.0, 0.0, 0.0, 1.0); // Couleur noire

    // Obtenez la couleur de la texture
    vec4 textureColor = texture2D(uTexture, vUv);
    
    // Appliquez l'opacité
    textureColor.a *= uOpacity;

    // Mélangez le fond noir et la texture
    gl_FragColor = mix(backgroundColor, textureColor, textureColor.a);
}
`;
