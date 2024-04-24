class Papel {   // CLASE NOMBRADA
  constructor(alto,ancho){
    this.alto = alto;
    this.ancho = ancho;
  }

}

let mipapel= new Papel (4,5)
 
let PapelA = class {   // CLASE ANONIMA
  constructor(alto,ancho){
    this.alto = alto;
    this.ancho = ancho;
  }

}
let PapelB = class PapelX {   //CLASE NOMBRADA
  constructor(alto,ancho){
    this.alto = alto;
    this.ancho = ancho;
  }
}


class Deportista{
  constructor(nombre,apellido){
    this.nombre = nombre; 
    this.apellido = apellido;
  }
}

class Futbolista  extends Deportista{
  constructor(nombre,apellido,goles){
    super(nombre,apellido);
    this._goles = goles;    
  }
  get goles(){
    return this._goles;

  }
  set goles(nuevoGoles){
    this._goles = nuevoGoles ;
  }

}


