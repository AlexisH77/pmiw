class Personaje {
  constructor() {
    this.posX = 50;
    this.posY = 370;
    
    this.alto = 80;
    this.ancho = 60;
    
    this.velocidadX = 7;
    this.velocidadY = 0;
    
    this.gravedad = 0.9;
    
    this.enElPiso = true;
    
    this.sprite = imgPersonaje;

    this.frameActual = 0;
    this.contadorFrames = 0;
    this.caminando = false;

    this.controlesInvertidos = false;
    this.tiempoInvertido = 0;
  }
  
  actualizar(escenario) {
    if (this.controlesInvertidos) {
      this.tiempoInvertido -= deltaTime;
      if (this.tiempoInvertido <= 0) {
        this.controlesInvertidos = false;
      }
    }

    this.velocidadY += this.gravedad;
    this.posY += this.velocidadY;

    // Colisiones
    for (let o of escenario.obstaculos) {
      if (this.colision(o)) {
        if (this.velocidadY >= 0 && this.posY + this.alto > o.y) {
          this.posY = o.y - this.alto;
          this.velocidadY = 0;
          this.enElPiso = true;
        }
      }
    }

    // Colisión con mariposas
    for (let i = escenario.mariposas.length - 1; i >= 0; i--) {
      let m = escenario.mariposas[i];
      if (this.colisionMariposa(m)) {
        this.controlesInvertidos = true;
        this.tiempoInvertido = 5000;
        escenario.mariposas.splice(i, 1);
      }
    }

    if (this.posY + this.alto >= height) {
      this.posY = height - this.alto;
      this.velocidadY = 0;
      this.enElPiso = true;
    }

    if (this.posX < 0) {
      this.posX = 0;
    }
  }

  dibujar() {
    let sprite;

    if (this.caminando) {
      sprite = framesCaminar[this.frameActual];
      this.contadorFrames++;
      if (this.contadorFrames % 5 === 0) {
        this.frameActual = (this.frameActual + 1) % framesCaminar.length;
      }
    } else {
      sprite = framesCaminar[0];
      this.frameActual = 0;
    }
    
    image(sprite, this.posX, this.posY, this.ancho, this.alto);
    
    this.caminando = false;
  }

  mover(direccion) {
    let mov = this.controlesInvertidos ? -1 : 1;

    if (direccion === "IZQUIERDA") this.posX -= mov * this.velocidadX;
    if (direccion === "DERECHA") this.posX += mov * this.velocidadX;

    this.caminando = true;
  }

  saltar() {
    if (this.enElPiso) {
      this.velocidadY = -15;
      this.enElPiso = false;
    }
  }

  colision(o) {
    return (
      this.posX < o.x + o.ancho &&
      this.posX + this.ancho > o.x &&
      this.posY < o.y + o.alto &&
      this.posY + this.alto > o.y
    );
  }

  colisionMariposa(m) {
    let cx = this.posX + this.ancho / 2;
    let cy = this.posY + this.alto / 2;
    return dist(cx, cy, m.x, m.y) < m.tam;
  }
}
