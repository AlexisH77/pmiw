class PantallaInicio {
  constructor() {
    this.enPantallaInicio = true;  
    this.botonJugar = createButton('Jugar');  
    this.botonJugar.position(width / 2 - 30, height / 2 + 100);  
    this.botonJugar.mousePressed(() => this.iniciarJuego());  
  }

  mostrar() {
    background(0, 100, 200); 

   
    textAlign(CENTER, CENTER);
    textSize(50);
    fill(255);
    text("Efecto Mariposa", width / 2, height / 4);

    // Instrucciones
    textSize(20);
    fill(255);
    text("Instrucciones del juego:", width / 2, height / 2 - 40);
    textSize(16);
    text("Usa las teclas 'A' y 'D' para mover al personaje", width / 2, height / 2);
    text("Presiona 'W' para saltar. ", width / 2, height / 2 + 20);
    text("Si agarras las mariposas se invierten los controles", width / 2, height / 2 + 40);

    // Créditos
    textSize(12);
    text("Créditos:", width - 330, height - 60);
    text("Sergio Jiménez - Alexis Hurtado", width - 330, height - 40);
  }

 
  iniciarJuego() {
    this.enPantallaInicio = false;  
    this.botonJugar.hide();  
  }
}

class Juego {
  constructor() {
    this.personaje = new Personaje();

    this.gano = false;
    this.perdio = false;

    this.tiempo = 8;
    this.ultimoTiempo = millis();

    this.escenario1 = new Escenario("Escenario 1");
    this.escenario2 = new Escenario("Escenario 2");
    this.escenario3 = new Escenario("Escenario 3");

   
    this.escenario1.agregar(0, 400, 100, 30);
    this.escenario1.agregar(210, 330, 50, 30);
    this.escenario1.agregar(350, 330, 180, 30);
    this.escenario1.agregar(500, 400, 50, 30);
    this.escenario1.agregar(530, 250, 50, 30);
    this.escenario1.agregar(600, 180, 40, 30);

    this.escenario1.agregarMariposa(150, 370, 30);
    this.escenario1.agregarMariposa(390, 300, 30);

    this.escenario2.agregar(540, 250, 100, 30);
    this.escenario2.agregar(150, 330, 120, 30);
    this.escenario2.agregar(400, 320, 180, 30);
    this.escenario2.agregar(300, 400, 100, 30);
    this.escenario2.agregar(90, 250, 50, 30);
    this.escenario2.agregar(0, 180, 40, 30);

    this.escenario2.agregarMariposa(230, 300, 30);
    this.escenario2.agregarMariposa(480, 290, 30);

    this.escenario3.agregar(0, 250, 100, 30);
    this.escenario3.agregar(150, 250, 50, 30);
    this.escenario3.agregar(150, 330, 120, 30);
    this.escenario3.agregar(280, 400, 120, 30);
    this.escenario3.agregar(420, 330, 180, 30);
    this.escenario3.agregar(320, 180, 40, 30);
    this.escenario3.agregar(590, 250, 50, 30);

    this.escenario3.agregarMariposa(125, 220, 30);
    this.escenario3.agregarMariposa(470, 300, 30);

    this.escenarioActual = this.escenario1;

    this.pantallaInicio = new PantallaInicio(); 
  }

  dibujar() {
    if (this.pantallaInicio.enPantallaInicio) {
      this.pantallaInicio.mostrar(); 
    } else {
      image(fondo, 0, 0, width, height);
      this.dibujarJuego();
    }
  }

  dibujarJuego() {
    if (this.gano) {
      background(20, 200, 100);
      image(imgPortal, 0, 0, 640, 480);

      textAlign(CENTER, CENTER);
      textSize(40);
      fill(255);
      text("¡GANASTE, VUELVE A TU ERA!", width / 2, height / 2 + 10);

      textSize(20);
      fill(255);
      text("Presiona R para reiniciar", width / 2, height / 2 + 60);

      return;
    }

    if (this.perdio) {
      background(0, 100);
      image(imgTrex, 70, 50, 400, 400);

      textAlign(CENTER, CENTER);
      textSize(40);
      fill(255);
      text("¡TE ALCANZÓ EL T-REX!", width / 2, height / 2 - 60);

      textSize(20);
      fill(255);
      text("Presiona R para reiniciar", width / 2, height / 2 + 10);

      return;
    }

    // -------- TIMER --------
    let ahora = millis();
    if (ahora - this.ultimoTiempo >= 1000) {
      this.tiempo--;
      this.ultimoTiempo = ahora;
    }

    if (this.tiempo <= 0) {
      this.perdio = true;
      sonidoPerder.play();
      musicaFondo.stop();
      return;
    }

    // -------- ESCENARIO --------
    this.escenarioActual.dibujar();

    fill(255);
    textSize(30);
    text("Tiempo: " + this.tiempo, 100, 50);

    // Movimiento
    if (keyIsDown(65)) this.personaje.mover("IZQUIERDA");
    if (keyIsDown(68)) this.personaje.mover("DERECHA");
    if (keyIsDown(87)) this.personaje.saltar();

    this.personaje.actualizar(this.escenarioActual);

    // -------- CAER --------
    if (this.personaje.posY + this.personaje.alto >= height) {
      this.perdio = true;
      sonidoPerder.play();
      musicaFondo.stop();
      return;
    }

    // -------- MARIPOSAS --------
    for (let m of this.escenarioActual.mariposas) {
      if (m.viva && m.colisionaCon(this.personaje)) {
        m.viva = false;
        sonidoMariposa.play();

        this.personaje.velocidadX *= -1;
        this.personaje.velocidadY *= -0.5;
      }
    }

    // -------- CAMBIAR ESCENARIO --------
    if (this.personaje.posX + this.personaje.ancho >= width) {
      this.cambiarAlSiguienteEscenario();
    }

    this.personaje.dibujar();
  }

  cambiarAlSiguienteEscenario() {
    if (this.escenarioActual === this.escenario1) {
      this.escenarioActual = this.escenario2;
    } 
    else if (this.escenarioActual === this.escenario2) {
      this.escenarioActual = this.escenario3;
    } 
    else if (this.escenarioActual === this.escenario3) {
      this.gano = true;
      sonidoGanar.play();
      musicaFondo.stop();
      return;
    }

    this.personaje.posX = 0;
    this.tiempo = 8;
    this.ultimoTiempo = millis();
  }
}
