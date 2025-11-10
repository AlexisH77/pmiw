

let jugador;
let piso;

// teclas
let izquierda = false;
let derecha = false;
let agachar = false;
let saltar = false;

function setup() {
  createCanvas(640, 480);
  piso = height - 50;
  jugador = new Jugador();
}

function draw() {
  background(70, 140, 90);

  // Piso
  fill(60, 40, 20);
  rect(0, piso, width, height - piso);

  jugador.mover();
  jugador.mostrar();
}


class Jugador {
  constructor() {
    this.x = 100;
    this.y = piso;
    this.tamano = 40;

    this.velX = 0;
    this.velY = 0;
    this.gravedad = 0.8;
  }

  mover() {

    // Movimiento horizontal A / D
    if (izquierda) {
      this.velX = -3;
    } else if (derecha) {
      this.velX = 3;
    } else {
      this.velX *= 0.8;
    }

    // Agacharse S
    if (agachar) {
      this.tamano = 25;
    } else {
      this.tamano = 40;
    }

    
    if (saltar && this.enElPiso()) {
      this.velY = -12;
    }

   
    this.velY += this.gravedad;

    this.x += this.velX;
    this.y += this.velY;

    // Evitar caer bajo el piso
    if (this.y > piso) {
      this.y = piso;
      this.velY = 0;
    }
  }

  enElPiso() {
    return this.y >= piso;
  }

  mostrar() {
    fill(200, 50, 50);
    ellipse(this.x, this.y - this.tamano / 2, this.tamano, this.tamano);
  }
}


function keyPressed() {
  if (key === 'a' || key === 'A') izquierda = true;
  if (key === 'd' || key === 'D') derecha = true;
  if (key === 's' || key === 'S') agachar = true;
  if (key === 'w' || key === 'W') saltar = true;
}

function keyReleased() {
  if (key === 'a' || key === 'A') izquierda = false;
  if (key === 'd' || key === 'D') derecha = false;
  if (key === 's' || key === 'S') agachar = false;
  if (key === 'w' || key === 'W') saltar = false;
}
