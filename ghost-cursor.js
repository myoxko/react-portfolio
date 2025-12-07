/* ==== GHOST CURSOR FOR REACT (FIXED VERSION) ==== */

const canvasEl = document.getElementById("ghost");
const gl = canvasEl.getContext("webgl");

if (!gl) {
  console.error("WebGL not supported");
}

/* =========================
   BASIC ENV
========================= */

const devicePixelRatio = Math.min(window.devicePixelRatio || 1, 2);

const mouse = {
  x: window.innerWidth / 2,
  y: window.innerHeight / 2,
  tx: window.innerWidth / 2,
  ty: window.innerHeight / 2
};

window.addEventListener("mousemove", (e) => {
  mouse.tx = e.clientX;
  mouse.ty = e.clientY;
});

/* =========================
   SHADERS
========================= */

const vertShader = `
precision mediump float;
attribute vec2 a_position;
varying vec2 vUv;

void main() {
  vUv = 0.5 * (a_position + 1.0);
  gl_Position = vec4(a_position, 0.0, 1.0);
}
`;

const fragShader = `
precision mediump float;

varying vec2 vUv;
uniform vec2 u_pointer;
uniform float u_ratio;

float mouth(vec2 uv) {
  vec2 p = vec2(uv.y, -uv.x); // 90도 회전
  p.x += 0.3;
  float d = length(p);
  return smoothstep(0.4, 0.0, d);
}

void main() {
  vec2 uv = vUv;
  uv.x *= u_ratio;
  uv -= u_pointer;

  float f = mouth(uv);
  vec3 color = mix(vec3(0.08,0.9,1.0), vec3(1.0,0.4,0.7), f);

  gl_FragColor = vec4(color, f);
}
`;

/* =========================
   SHADER COMPILE
========================= */

function compileShader(type, src) {
  const s = gl.createShader(type);
  gl.shaderSource(s, src);
  gl.compileShader(s);
  if (!gl.getShaderParameter(s, gl.COMPILE_STATUS)) {
    console.error(gl.getShaderInfoLog(s));
  }
  return s;
}

const program = gl.createProgram();
gl.attachShader(program, compileShader(gl.VERTEX_SHADER, vertShader));
gl.attachShader(program, compileShader(gl.FRAGMENT_SHADER, fragShader));
gl.linkProgram(program);
gl.useProgram(program);

/* =========================
   BUFFER
========================= */

const buffer = gl.createBuffer();
gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
gl.bufferData(
  gl.ARRAY_BUFFER,
  new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]),
  gl.STATIC_DRAW
);

const position = gl.getAttribLocation(program, "a_position");
gl.enableVertexAttribArray(position);
gl.vertexAttribPointer(position, 2, gl.FLOAT, false, 0, 0);

/* =========================
   UNIFORMS
========================= */

const uPointer = gl.getUniformLocation(program, "u_pointer");
const uRatio = gl.getUniformLocation(program, "u_ratio");

/* =========================
   RESIZE
========================= */

function resize() {
  canvasEl.width = innerWidth * devicePixelRatio;
  canvasEl.height = innerHeight * devicePixelRatio;
  gl.viewport(0, 0, canvasEl.width, canvasEl.height);
  gl.uniform1f(uRatio, canvasEl.width / canvasEl.height);
}

resize();
window.addEventListener("resize", resize);

/* =========================
   RENDER LOOP
========================= */

function loop() {
  mouse.x += (mouse.tx - mouse.x) * 0.12;
  mouse.y += (mouse.ty - mouse.y) * 0.12;

  gl.uniform2f(
    uPointer,
    mouse.x / window.innerWidth,
    1.0 - mouse.y / window.innerHeight
  );

  gl.clear(gl.COLOR_BUFFER_BIT);
  gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
  requestAnimationFrame(loop);
}

loop();
