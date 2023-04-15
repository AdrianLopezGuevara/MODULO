const date = new Date();
export var vdia = date.getDate().toString(); //Variable del dia
export var vmes = [
  "enero",
  "febrero",
  "marzo",
  "abril",
  "mayo",
  "junio",
  "julio",
  "agosto",
  "septiembre",
  "octubre",
  "noviembre",
  "diciembre",
]; //Arreglo con los meses
export var vanio = date.getFullYear().toString(); //Variable del año
export var nmes = date.getMonth(); //Variable del numero de mes
export function autoFecha() {
  var posX, width;
  switch (nmes) {
    case 0: //Enero
      posX = 310;
      width = 35;
      break;
    case 1: //Febrero
      posX = 300;
      width = 45;
      break;
    case 2: //Marzo
      posX = 310;
      width = 35;
      break;
    case 3: //Abril
      posX = 310;
      width = 35;
      break;
    case 4: //Mayo
      posX = 310;
      width = 35;
      break;
    case 5: //Junio
      posX = 310;
      width = 35;
      break;
    case 6: //Julio
      posX = 310;
      width = 35;
      break;
    case 7: //Agosto
      posX = 300;
      width = 45;
      break;
    case 8: //Septiembre
      posX = 280;
      width = 65;
      break;
    case 9: //Octubre
      posX = 300;
      width = 45;
      break;
    case 10: //Noviembre
      posX = 280;
      width = 65;
      break;
    case 11: //Diciembre
      posX = 280;
      width = 65;
      break;
    default:
      break;
  }
  return [posX, width];
}
