class Obstaculo {
  constructor(x, y, ancho, alto) {
    this.x = x;
    this.y = y;
    this.ancho = ancho;
    this.alto = alto;
  }

  dibujar() {
    image(imgPlataforma, this.x, this.y, this.ancho, this.alto);
  }
}
