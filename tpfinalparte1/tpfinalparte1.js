// Sergio Jimenez 95898754
// Alexis Hurtado 96309172
// El ruido de un truno ( Ray Bradbury)
// Link de video: https://www.youtube.com/watch?v=X-BOF3Syizg

let pantalla = 0;

let textos = [];
let tipoPantalla = [];
let destinoSiguiente = [];
let opciones = [];
let destinos = [];

let imagenes = [];
let imgBoton;
let sonidoFondo;

let botonX, botonY, botonAncho, botonAlto;

function preload() {
  for (let i = 0; i < 17; i++) {
    imagenes[i] = loadImage("data/img" + i + ".jpg");
  }
  imgBoton = loadImage("data/boton.png");
  sonidoFondo = loadSound("data/sound/suspenso.mp3");
}

function setup() {
  createCanvas(640, 480);
  textSize(14);
  textAlign(CENTER, CENTER);
  
 //CREACIÓN DE PANTALLAS//

  crearPantalla(0,"Sergio Jimenez & Alexis Hurtado",1);
  crearPantalla(1, "En un futuro dominado por la tecnología, viajar al pasado se ha convertido en un lujo para unos pocos. Una empresa llamada “Safari en el Tiempo” ofrece la experiencia más peligrosa y codiciada: cazar dinosaurios reales.  Los viajeros firman contratos, pagan fortunas y reciben advertencias estrictas. Les dicen que cualquier error, por mínimo que sea, puede alterar la historia entera.", 2);
  crearPantalla(2, "Antes de partir, el guía explica la regla más importante: nada debe ser alterado.  No se permite tocar plantas, ni animales, ni siquiera el suelo prehistórico. Se ha construido un camino flotante para evitar cualquier contacto con el pasado. Un paso fuera de esa línea invisible entre presente y pasado puede destruir el futuro conocido.", 3);

  crearPantallaDecision(
    3,
    "La máquina del tiempo se enciende y el grupo es lanzado a través de una corriente invisible. El aire se vuelve denso, el rugido de la energía es ensordecedor.  En un instante, los rascacielos del futuro desaparecen y son reemplazados por selvas salvajes, calor húmedo y un silencio profundo, roto solo por el sonido de criaturas que aún no existen en la memoria humana.",
    "Exploración cuidadosa", 10,
    "Curiosidad peligrosa", 4);

  crearPantalla(4, "El pasado es un lugar vivo, brutal y perfecto. Árboles gigantescos cubren el cielo, insectos del tamaño de una mano zumban en el aire y criaturas desconocidas se mueven entre la maleza.  Los cazadores avanzan sobre el camino metálico, sabiendo que un solo error podría borrar civilizaciones enteras antes de que siquiera nazcan.", 5);
  crearPantalla(5, "Entonces aparece. Un Tiranosaurio Rex gigantesco, marcado previamente para morir en esa línea temporal, emerge de entre los árboles. Su rugido sacude la tierra y hace temblar el aire.  La escena es tan sobrecogedora que la idea de dominar a la naturaleza parece una broma. Los cazadores preparan sus armas mientras el monstruo avanza.", 6);

  crearPantallaDecision(
    6,
    "Lo inevitable se desata: el terror se vuelve insoportable. Uno de los viajeros, paralizado por la magnitud de lo que ocurre, retrocede sin pensar y sus botas se hunden fuera del camino. El dinosaurio, abatido según el plan, marca que el daño ya está hecho. Un solo paso ha roto la regla, y la línea del tiempo comienza a resquebrajarse.",
    "Ignoran el error", 13,
    "Reconocen el error", 7);

  crearPantalla(7, "Nadie habla en el viaje de regreso. El rugido de la máquina del tiempo suena diferente, como si cargara con el peso de algo irreparable.  El viajero mira sus botas manchadas de barro antiguo. Nadie sabe aún qué tan grande es la herida que acaba de abrir.", 8);
  crearPantalla(8, "Cuando la puerta de la máquina se abre, el mundo parece el mismo… pero no lo es.  El aire es distinto. Los carteles están escritos con letras deformadas. Los nombres que antes definían el presente han desaparecido. Un nuevo líder gobierna. Una mariposa aplastada, pegada a la suela de la bota, revela la magnitud de la tragedia: el tiempo ha sido cambiado por un gesto insignificante.", 9);

  crearPantallaDecision(
    9,
    "En ese instante, la historia se cierra sobre sí misma. El error no tiene solución. El destino cae con el peso de una bala. Un trueno seco resuena en el aire, como si el tiempo mismo respondiera.  Lo que fue… ya no volverá a ser.",
    "VOLVER AL INICIO", 0,
    "CREDITOS", 17);

  crearPantalla(10, "El grupo desciende con cautela de la plataforma temporal. A su alrededor, la selva primitiva respira como un animal dormido. Cada hoja parece observarlos. Saben que están en un tiempo que no les pertenece. Mantienen el paso sobre el camino metálico, temiendo alterar algo que podría cambiar el futuro entero.", 11);

  crearPantallaDecision(
    11,
    "Un leve temblor recorre el suelo bajo sus pies. No es un rugido, no es el viento. Es el tiempo que se resiente con su presencia. Un insecto minúsculo revolotea cerca de uno de ellos, apenas perceptible, pero suficiente para que la tensión crezca. Saben que cada detalle, por más insignificante que parezca, puede alterar siglos enteros. Cada respiración se vuelve una decisión que podría costarles el futuro.",
    "IGNORAR", 12,
    "INTERVENIR", 15);

  crearPantalla(12, "Deciden no prestar atención al temblor, asumiendo que solo fue una ilusión o un movimiento menor del terreno. El grupo continúa su camino con cautela, pero el aire se vuelve más pesado, y el silencio se torna antinatural. Los pasos resuenan en el fango, mientras la tensión crece entre los viajeros.", 6);
  crearPantalla(13, "El grupo avanza sin mirar atrás. La selva vibra con un silencio extraño, casi consciente. Travis ordena regresar al presente sin revisar el camino. La máquina del tiempo ruge y, en un instante, el bosque se disuelve. Ninguno nota la pequeña mancha de barro en la bota de Eckels, ni la diminuta mariposa aplastada que se adhiere a ella. El aire del futuro los recibe con un zumbido eléctrico, familiar pero levemente distorsionado.", 14);

  crearPantallaDecision(
    14,
    "Eckels regresa, pero el aire vibra con un zumbido extraño. Las calles se deforman, los edificios laten como si tuvieran vida. La gente repite los mismos movimientos en bucles imposibles. El tiempo se quiebra, mezclando siglos y recuerdos. Eckels comprende, horrorizado: no cambió el futuro… lo desató.",
    "VOLVER AL INICIO", 0,
    "CREDITOS", 17);

  crearPantalla(15, "El viajero decide apartar al insecto, temiendo que lo pisen por accidente. Un gesto torpe podría romper el delicado equilibrio del bosque prehistórico.", 16);

  crearPantallaDecision(
    16,
    "El disparo retumba en la espesura y el Tiranosaurio cae con estrépito, derrumbando. Eckels, tembloroso pero triunfante, contempla al gigantesco reptil mientras el guía asiente con respeto. El grupo regresa a la máquina del tiempo, cuidando cada paso.  De vuelta en el presente, Eckels abre los ojos con asombro: todo sigue igual. Las calles, las voces, las letras en los carteles. El futuro permanece intacto.  Sonríe con alivio — mientras el rugido del pasado se disuelve en la distancia.",
    "VOLVER AL INICIO", 0,
    "CREDITOS", 17);

  crearPantalla(17, "Esta es una adaptacion del libro "+"EL RUIDO DEL TRUENO"+" del escritor Ray Bradbury a una historia grafica realizada en p5.js por los alumnos de la comision 01, Sergio Jimenez y Alexis Hurtado, GRACIAS POR VER", 0);


  botonAncho = 60;
  botonAlto = 60;
  botonX = width - botonAncho - 40;
  botonY = height - botonAlto - 20;
}

//FUNCIONES PROPIAS//


function crearPantalla(num, texto, siguiente) {
  textos[num] = texto;
  tipoPantalla[num] = "normal";
  destinoSiguiente[num] = siguiente;
}

function crearPantallaDecision(num, texto, opcion1, destino1, opcion2, destino2) {
  textos[num] = texto;
  tipoPantalla[num] = "decision";
  opciones[num] = [opcion1, opcion2];
  destinos[num] = [destino1, destino2];
}

//DIBUJO PRINCIPAL//

function draw() {
  background(0);

  //FONDO DE PANTALLA//
  if (imagenes[pantalla]) {
    image(imagenes[pantalla], 0, 0);
  }

 // FONDO TEXTO//
  fill(0, 150);
  rect(60, 300, 520, 140, 10);

  // TEXTO//
  fill(255);
  text(textos[pantalla], 100, 280, 440, 200);


  if (tipoPantalla[pantalla] === "decision") {
    // BOTON1//
    fill(0, 180, 120);
    rect(100, 20, 180, 40, 10);
    fill(255);
    text(opciones[pantalla][0], 190, 40);

    // BOTON2//
    fill(0, 150, 140);
    rect(360, 20, 180, 40, 10);
    fill(255);
    text(opciones[pantalla][1], 450, 40);
  } else {
    image(imgBoton, botonX, botonY, botonAncho, botonAlto);
  }
}

//INTERACCIÓN//

function mousePressed() {
  
  if (sonidoFondo && !sonidoFondo.isPlaying()) {
  sonidoFondo.setVolume(0.07);
  sonidoFondo.loop();
  }
    
  if (tipoPantalla[pantalla] === "decision") {
    if (mouseX > 100 && mouseX < 280 && mouseY > 20 && mouseY < 60) {
      pantalla = destinos[pantalla][0];
    } else if (mouseX > 360 && mouseX < 540 && mouseY > 20 && mouseY < 60) {
      pantalla = destinos[pantalla][1];
    }
  } else if (tipoPantalla[pantalla] === "normal") {
    if (
      mouseX > botonX &&
      mouseX < botonX + botonAncho &&
      mouseY > botonY &&
      mouseY < botonY + botonAlto
    ) {
      pantalla = destinoSiguiente[pantalla];
    }
  }
}


