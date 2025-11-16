class Escenario {
  constructor(nombre) {
    this.nombre = nombre;
    this.obstaculos = [];
    this.mariposas = [];
  }

  agregar(x, y, ancho, alto) {
    let o = new Obstaculo(x, y, ancho, alto);
    this.obstaculos.push(o);
  }
  
  agregarMariposa(x, y, tam) {
    this.mariposas.push(new Mariposa(x, y, tam));
  }

  dibujar() {
    for (let o of this.obstaculos) {
      o.dibujar();
    }
    for (let m of this.mariposas) {
      m.actualizar();
      m.dibujar();
    }
  }
}
