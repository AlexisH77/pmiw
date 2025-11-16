// Sergio Jimenez 95898754
// Alexis Hurtado 96309172
// Link de video: 


let objJuego;
let imgPersonaje;
let imgMariposa;
let imgPlataforma;
let fondo;
let framesCaminar = [];
let imgTrex, imgPortal;

let musicaFondo;
let sonidoGanar;
let sonidoPerder;
let sonidoMariposa;


function preload() {
  fondo = loadImage("data/fondo.jpg");
  imgMariposa = loadImage("data/mariposa.png");
  imgPlataforma = loadImage("data/plataforma1.png");
  imgTrex = loadImage("data/trex.png");
  imgPortal = loadImage("data/portal.png");
  
  musicaFondo = loadSound("sonido/musicaFondo.mp3");
  sonidoGanar = loadSound("sonido/ganar.mp3");
  sonidoPerder = loadSound("sonido/perder.mp3");
  sonidoMariposa = loadSound("sonido/mariposa.mp3");
  
  for (let i = 0; i < 9; i++) {
    framesCaminar[i] = loadImage("data/animacion/caminando"+i+".png");
  }
}

function setup() { 
  createCanvas(640, 480);
  objJuego = new Juego();
  
   musicaFondo.setVolume(0.5);
  musicaFondo.loop();
}

function draw() {
  image(fondo, 0, 0, width, height);
  objJuego.dibujar();
}

function keyPressed() {
  if ((objJuego.gano || objJuego.perdio) && (key === "r" || key === "R")) {
    objJuego = new Juego();
     musicaFondo.loop();
  }
}
