//ALEXIS HURTADO LEGAJO 212733/0
//SE REINICIA CON LA TECLA "ENTER"




let foto;

let columnas = 4;
let filas = 4;
let espacio = 2;
let tamaño;

let pox = 800;
let poy = 400;

let invertido = false;

function preload() {
 foto = loadImage('data/18.jpg');
}

function setup() {
  createCanvas(800, 400);
  calcularTamano();
}

function draw() {
  background(60);
  image(foto, 0, 0, poy, poy);

  calcularTamano();
  dibujarGrilla(columnas, filas, espacio, tamaño, poy);
}

function calcularTamano() {
  
  let disponible = poy - (filas - 1) * espacio;
  tamaño = int(disponible / filas);
}

function dibujarGrilla(cols, fils, esp, tam, inicioX) {
  for (let fila = 0; fila < fils; fila++) {
    for (let col = 0; col < cols; col++) {
      let x = inicioX + col * (tam + esp);
      let y = fila * (tam + esp);
      let tipo = (fila + col) % 2;

      dibujarBloque(x, y, tam, tipo, invertido);
    }
  }
}

function dibujarBloque(x, y, tam, tipo, inv) {
  let anchoRaya = int(tam / 5); 

  for (let i = 0; i < 5; i++) {
    
    if (inv) { 
      if (i % 2 == 0) { 
        fill(255); 
       } else { 
        fill(0); 
  } 
       } else { 
         if (i % 2 == 0) { 
           fill(0); 
        } else { 
          fill(255); 
     } 
   }

    if (tipo === 0) {
      rect(x + i * anchoRaya, y, anchoRaya, tam);
    } else {
      rect(x, y + i * anchoRaya, tam, anchoRaya);
    }
  }
}

function mousePressed() {
  invertido = !invertido;
  columnas++;
  filas++;
}

function keyPressed() {
  if (keyCode === ENTER || keyCode === RETURN) {
    columnas = 4;
    filas = 4;
    invertido = false;
  }
}
