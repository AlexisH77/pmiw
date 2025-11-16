class Mariposa {
  constructor(x, y, tam) {
    this.x = x;
    this.y = y;
    this.tam = tam;

    this.baseY = y;
    this.t = random(1000);
    this.viva = true;
  }

  actualizar() {
    if (!this.viva) return;

    this.t += 0.03;
    this.y = this.baseY + sin(this.t) * 10;
  }

  dibujar() {
    if (!this.viva) return;

    image(
      imgMariposa,
      this.x - this.tam / 2,
      this.y - this.tam / 2,
      this.tam,
      this.tam
    );
  }


  colisionaCon(p) {
    return (
      p.posX < this.x + this.tam &&
      p.posX + p.ancho > this.x &&
      p.posY < this.y + this.tam &&
      p.posY + p.alto > this.y
    );
  }
}
