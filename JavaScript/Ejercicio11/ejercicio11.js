class Estudiante {
  _nombre;
  _asignaturas = ['Javascript', 'HTML', 'CSS'];

  constructor(_nombre) {
    this.nombre = _nombre;
    this.asignaturas = this._asignaturas;
  }
  
  obtenDatos() {
    const _nombre = this.nombre;
    const _asignaturas = this.asignaturas;
    return {
      _nombre,
      _asignaturas
    }
  }
}

const estudiante = new Estudiante('Luis');

console.log(estudiante.obtenDatos());