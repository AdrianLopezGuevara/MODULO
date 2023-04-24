import { PDFDocument, rgb, TextAlignment } from "pdf-lib";
import fontkit from "@pdf-lib/fontkit";
import fs from "fs";

/* Variables */
var form; //Inicializa el formulario que se ocupa para el llenado de campos
var template; //Da la ruta de la plantilla del formato
var pdfDoc; //Inicializa el documento pdf que se crea
var dia; //Variable dia del formulario
var mes; //Variables mes del formulario
var anio; //Variable año del formulario
var noControl; //Variable numero de control del formulario
var nombre; //Variable nombre del formulario
var semestre; //Variable semestre del formulario
var carrera; //Variable carrera del formulario
const date = new Date();
var vdia = date.getDate().toString(); //Variable del dia
var nmes = date.getMonth(); //Variable del numero de mes
var vmes = [
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
var vanio = date.getFullYear().toString(); //Variable del año

/* Fuentes de letra */
const Montserrat = fs.readFileSync(
  "./fonts/Montserrat/static/Montserrat-Regular.ttf"
);
const MontserratBold = fs.readFileSync(
  "./fonts/Montserrat/static/Montserrat-BoldItalic.ttf"
);

function autoFecha() {
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

async function formato_NO_ADEUDO() {
  /* Import template */
  template = fs.readFileSync("./pdf/Formato.pdf");

  pdfDoc = await PDFDocument.load(template);
  pdfDoc.registerFontkit(fontkit);

  const pages = pdfDoc.getPages();
  const page = pages[0];

  form = pdfDoc.getForm();

  var Font = await pdfDoc.embedFont(Montserrat);

  page.drawText("División de Estudios Profesionales", {
    x: 177,
    y: 663.5,
    size: 16,
    font: Font,
  });
  page.drawText("Constancia de NO Adeudo", {
    x: 204,
    y: 644,
    size: 16,
    font: Font,
  });

  /* Lugar y fecha */
  const yfecha = 614.7;
  const yForm = 610;
  var [X, Wmes] = autoFecha();
  page.drawText("Querétaro, Qro.,    a", {
    x: X,
    y: yfecha,
    size: 10,
    font: Font,
  });
  dia = form.createTextField("dia");
  dia.setText(vdia);
  dia.setAlignment(TextAlignment.Center);
  dia.addToPage(page, {
    x: X + 100.7,
    y: yForm,
    width: 20,
    height: 20,
    borderWidth: 0,
  });
  dia.setFontSize(10);
  dia.enableReadOnly();
  page.drawText("de", {
    x: X + 127.7,
    y: yfecha,
    size: 10,
    font: Font,
  });
  mes = form.createTextField("mes");
  //mes.setText("septiembre");
  mes.setText(vmes[nmes]);
  mes.setAlignment(TextAlignment.Center);
  mes.addToPage(page, {
    x: X + 148,
    y: yForm,
    width: Wmes,
    height: 20,
    borderWidth: 0,
  });
  mes.setFontSize(10);
  mes.enableReadOnly();
  page.drawText("de", {
    x: 499.5,
    y: yfecha,
    size: 10,
    font: Font,
  });
  anio = form.createTextField("anio");
  anio.setText(vanio);
  anio.setAlignment(TextAlignment.Center);
  anio.addToPage(page, {
    x: 518,
    y: yForm,
    width: 37,
    height: 20,
    borderWidth: 0,
  });
  anio.setFontSize(10);
  anio.enableReadOnly();

  page.drawText("Por medio de la presente, hacemos constar que el alumno:", {
    x: 163.5,
    y: 587.1,
    size: 10,
    font: Font,
  });

  /* Tabla */
  page.drawRectangle({
    x: 61,
    y: 520,
    width: 530,
    height: 50,
    borderWidth: 1,
    opacity: 0,
  });
  /* No. control */
  page.drawRectangle({
    x: 64,
    y: 547.5,
    width: 67,
    height: 19.7,
    borderWidth: 1,
    opacity: 0,
  });
  page.drawText("No. Control", {
    x: 66.6,
    y: 553.4,
    size: 10,
    font: Font,
  });
  noControl = form.createTextField("noControl");
  noControl.setText("19141166");
  noControl.setAlignment(TextAlignment.Center);
  noControl.addToPage(page, {
    x: 133.9,
    y: 547.5,
    width: 67,
    height: 19.7,
  });
  noControl.setFontSize(10);
  noControl.enableReadOnly();

  /* Nombre */
  page.drawRectangle({
    x: 205,
    y: 547.5,
    width: 60,
    height: 19.7,
    borderWidth: 1,
    opacity: 0,
  });
  page.drawText("Nombre", {
    x: 211.5,
    y: 553.4,
    size: 10,
    font: Font,
  });
  nombre = form.createTextField("nombre");
  nombre.setText("Adrian López Guevara");
  nombre.setAlignment(TextAlignment.Center);
  nombre.addToPage(page, {
    x: 268.5,
    y: 547.5,
    width: 320,
    height: 19.7,
  });
  nombre.setFontSize(10);
  nombre.enableReadOnly();

  /* Semestre */
  page.drawRectangle({
    x: 64,
    y: 523.5,
    width: 67,
    height: 21,
    borderWidth: 1,
    opacity: 0,
  });
  page.drawText("Semestre", {
    x: 70.6,
    y: 530,
    size: 10,
    font: Font,
  });
  semestre = form.createTextField("semestre");
  semestre.setText("8");
  semestre.setAlignment(TextAlignment.Center);
  semestre.addToPage(page, {
    x: 133.9,
    y: 523.5,
    width: 39,
    height: 21,
  });
  semestre.setFontSize(10);
  semestre.enableReadOnly();

  /* Carrera */
  page.drawRectangle({
    x: 176,
    y: 523.5,
    width: 89,
    height: 21,
    borderWidth: 1,
    opacity: 0,
  });
  page.drawText("Carrera", {
    x: 200,
    y: 530,
    size: 10,
    font: Font,
  });
  carrera = form.createTextField("carrera");
  carrera.setText("Ingenieria en Sistemas Computacionales");
  carrera.setAlignment(TextAlignment.Center);
  carrera.addToPage(page, {
    x: 268.5,
    y: 523.5,
    width: 320,
    height: 21,
  });
  carrera.setFontSize(10);
  carrera.enableReadOnly();

  form.updateFieldAppearances(Font);

  page.drawText(
    "No tiene adeudos de material, equipo, herramientas y/o documentos en las áreas indicadas",
    {
      x: 82.2,
      y: 495.3,
      font: Font,
      size: 10,
    }
  );

  /* Tabla */
  page.drawRectangle({
    x: 54,
    y: 329,
    width: 519,
    height: 150,
    borderWidth: 1,
    opacity: 0,
  });
  /* Cuadros dptos */
  Font = await pdfDoc.embedFont(MontserratBold);
  var txtY = 465.2;
  var recY = 463;
  var recW = 169;
  var recH = 12;
  page.drawRectangle({
    x: 56,
    y: recY,
    width: recW,
    height: recH,
    borderWidth: 1,
    opacity: 0,
  });
  page.drawText("Centro de Información", {
    x: 78.5,
    y: txtY,
    font: Font,
    size: 10,
  });
  page.drawRectangle({
    x: 228,
    y: recY,
    width: recW,
    height: recH,
    borderWidth: 1,
    opacity: 0,
  });
  page.drawText("Laboratorio de Cómputo", {
    x: 245.5,
    y: txtY,
    font: Font,
    size: 10,
  });
  page.drawRectangle({
    x: 401,
    y: recY,
    width: recW,
    height: recH,
    borderWidth: 1,
    opacity: 0,
  });
  page.drawText("Servicios Escolares", {
    x: 433.5,
    y: txtY,
    font: Font,
    size: 10,
  });

  recY = 348;
  recH = 111.5;
  /* Cuadros firmas */
  page.drawRectangle({
    x: 56,
    y: recY,
    width: recW,
    height: recH,
    borderWidth: 1,
    opacity: 0,
  });
  page.drawRectangle({
    x: 228,
    y: recY,
    width: recW,
    height: recH,
    borderWidth: 1,
    opacity: 0,
  });
  page.drawRectangle({
    x: 401,
    y: recY,
    width: recW,
    height: recH,
    borderWidth: 1,
    opacity: 0,
  });

  /* Firma Sello */
  Font = await pdfDoc.embedFont(Montserrat);
  recY = 332;
  recH = 12;
  txtY = 334.5;
  page.drawRectangle({
    x: 56,
    y: recY,
    width: recW,
    height: recH,
    borderWidth: 1,
    opacity: 0,
  });
  page.drawText("Nombre Firma y sello", {
    x: 84.5,
    y: txtY,
    font: Font,
    size: 10,
  });
  page.drawRectangle({
    x: 228,
    y: recY,
    width: recW,
    height: recH,
    borderWidth: 1,
    opacity: 0,
  });
  page.drawText("Nombre Firma y sello", {
    x: 257,
    y: txtY,
    font: Font,
    size: 10,
  });
  page.drawRectangle({
    x: 401,
    y: recY,
    width: recW,
    height: recH,
    borderWidth: 1,
    opacity: 0,
  });
  page.drawText("Nombre Firma y sello", {
    x: 429.7,
    y: txtY,
    font: Font,
    size: 10,
  });

  /* Tabla */
  page.drawRectangle({
    x: 134,
    y: 148,
    width: 358.5,
    height: 155,
    borderWidth: 1,
    opacity: 0,
  });

  /* Cuadros dptos */
  Font = await pdfDoc.embedFont(MontserratBold);
  recY = 282;
  recH = 18;
  txtY = 287.1;
  recW = 182;
  const lab = form.createTextField("lab");
  lab.setText("Laboratorio de Computo");
  lab.setAlignment(TextAlignment.Center);
  lab.addToPage(page, {
    x: 136,
    y: recY,
    width: recW,
    height: recH,
  });
  lab.setFontSize(10);
  lab.enableReadOnly();
  form.updateFieldAppearances(await pdfDoc.embedFont(MontserratBold));
  recW = 169;
  page.drawRectangle({
    x: 321,
    y: recY,
    width: recW,
    height: recH,
    borderWidth: 1,
    opacity: 0,
  });
  page.drawText("Recursos Financieros", {
    x: 347,
    y: txtY,
    font: Font,
    size: 10,
  });

  /* Cuadros firmas */
  recY = 167;
  recW = 182;
  recH = 111.5;
  page.drawRectangle({
    x: 136,
    y: recY,
    width: recW,
    height: recH,
    borderWidth: 1,
    opacity: 0,
  });
  recW = 169;
  page.drawRectangle({
    x: 321,
    y: recY,
    width: recW,
    height: recH,
    borderWidth: 1,
    opacity: 0,
  });

  /* Firma y sello */
  Font = await pdfDoc.embedFont(Montserrat);
  recY = 151;
  recW = 182;
  recH = 12;
  txtY = 153.5;
  page.drawRectangle({
    x: 136,
    y: recY,
    width: recW,
    height: recH,
    borderWidth: 1,
    opacity: 0,
  });
  page.drawText("Nombre Firma y sello", {
    x: 171,
    y: txtY,
    font: Font,
    size: 10,
  });
  recW = 169;
  page.drawRectangle({
    x: 321,
    y: recY,
    width: recW,
    height: recH,
    borderWidth: 1,
    opacity: 0,
  });
  page.drawText("Nombre Firma y sello", {
    x: 349.4,
    y: txtY,
    font: Font,
    size: 10,
  });

  const pdfBytes = await pdfDoc.save();
  fs.writeFileSync("./output/Formato_NO_ADEUDO.pdf", pdfBytes);
}
//formato_NO_ADEUDO();

async function formato_Requisitos_Empresa() {
  template = fs.readFileSync(
    "./pdf/PDF TECNM/Formato-de-Requisitos-para-Carta-de-Presentacion-a-Empresa.pdf"
  );

  pdfDoc = await PDFDocument.load(template);
  pdfDoc.registerFontkit(fontkit);

  const pages = pdfDoc.getPages();
  const page = pages[0];

  form = pdfDoc.getForm();

  var Font = await pdfDoc.embedFont(Montserrat);

  page.drawText(
    "Solicitud de Carta de presentación, para realizar Proyecto Académico",
    {
      x: 71,
      y: 665,
      size: 14,
      font: Font,
    }
  );
  page.drawText("de una materia en una Empresa", {
    x: 200,
    y: 648,
    size: 14,
    font: Font,
  });

  const yfecha = 627.7;
  const yForm = 621.5;
  var [X, Wmes] = autoFecha();
  page.drawText("Querétaro, Qro.,    a", {
    x: X,
    y: yfecha,
    size: 10,
    font: Font,
  });
  dia = form.createTextField("dia");
  dia.setText(vdia);
  dia.setAlignment(TextAlignment.Center);
  dia.addToPage(page, {
    x: X + 100.7,
    y: yForm,
    width: 20,
    height: 20,
    borderWidth: 0,
  });
  dia.setFontSize(10);
  dia.enableReadOnly();
  page.drawText("de", {
    x: X + 127.7,
    y: yfecha,
    size: 10,
    font: Font,
  });
  mes = form.createTextField("mes");
  mes.setText(vmes[nmes]);
  mes.setAlignment(TextAlignment.Center);
  mes.addToPage(page, {
    x: X + 148,
    y: yForm,
    width: Wmes,
    height: 20,
    borderWidth: 0,
  });
  mes.setFontSize(10);
  mes.enableReadOnly();
  page.drawText("de", {
    x: 499.5,
    y: yfecha,
    size: 10,
    font: Font,
  });
  anio = form.createTextField("anio");
  anio.setText(vanio);
  anio.setAlignment(TextAlignment.Center);
  anio.addToPage(page, {
    x: 518,
    y: yForm,
    width: 37,
    height: 20,
    borderWidth: 0,
  });
  anio.setFontSize(10);
  anio.enableReadOnly();

  Font = await pdfDoc.embedFont(MontserratBold);
  page.drawText("Datos de los solicitantes:", {
    x: 71,
    y: 611,
    size: 12,
    font: Font,
  });

  /* Tabla */

  /* No. Control */
  Font = await pdfDoc.embedFont(Montserrat);
  page.drawText("No. de", {
    x: 98,
    y: 596,
    size: 12,
    font: Font,
  });
  page.drawText("Control", {
    x: 94.8,
    y: 581,
    size: 12,
    font: Font,
  });
  const noControlW = 91.6;
  const noControlH = 17.5;
  var X = 71.3;
  var noControl_1 = form.createTextField("noControl_1");
  noControl_1.setText("19141166");
  noControl_1.setAlignment(TextAlignment.Center);
  noControl_1.addToPage(page, {
    x: X,
    y: 560.5,
    width: noControlW,
    height: noControlH,
    borderWidth: 0.5,
    borderColor: rgb(1, 0, 0),
  });
  noControl_1.setFontSize(10);
  noControl_1.enableReadOnly();

  var noControl_2 = form.createTextField("noControl_2");
  noControl_2.setText("19141163");
  noControl_2.setAlignment(TextAlignment.Center);
  noControl_2.addToPage(page, {
    x: X,
    y: 543,
    width: noControlW,
    height: noControlH,
    borderWidth: 0.5,
    borderColor: rgb(1, 0, 0),
  });
  noControl_2.setFontSize(10);
  noControl_2.enableReadOnly();

  var noControl_3 = form.createTextField("noControl_3");
  noControl_3.setText("19141119");
  noControl_3.setAlignment(TextAlignment.Center);
  noControl_3.addToPage(page, {
    x: X,
    y: 525.5,
    width: noControlW,
    height: noControlH,
    borderWidth: 0.5,
    borderColor: rgb(1, 0, 0),
  });
  noControl_3.setFontSize(10);
  noControl_3.enableReadOnly();

  var noControl_4 = form.createTextField("noControl_4");
  noControl_4.setText("19141151");
  noControl_4.setAlignment(TextAlignment.Center);
  noControl_4.addToPage(page, {
    x: X,
    y: 508,
    width: noControlW,
    height: noControlH,
    borderWidth: 0.5,
    borderColor: rgb(1, 0, 0),
  });
  noControl_4.setFontSize(10);
  noControl_4.enableReadOnly();

  var noControl_5 = form.createTextField("noControl_5");
  noControl_5.setText("19141124");
  noControl_5.setAlignment(TextAlignment.Center);
  noControl_5.addToPage(page, {
    x: X,
    y: 490.5,
    width: noControlW,
    height: noControlH,
    borderWidth: 0.5,
    borderColor: rgb(1, 0, 0),
  });
  noControl_5.setFontSize(10);
  noControl_5.enableReadOnly();

  /* Nombres */
  page.drawText("Nombre de los Integrantes:", {
    x: 209,
    y: 588.5,
    size: 12,
    font: Font,
  });
  const nombreW = 256.1;
  const nombreH = 17.5;
  X = 163.1;
  var nombre_1 = form.createTextField("nombre_1");
  nombre_1.setText("ADRIAN LÓPEZ GUEVARA");
  nombre_1.setAlignment(TextAlignment.Center);
  nombre_1.addToPage(page, {
    x: X,
    y: 560.5,
    width: nombreW,
    height: nombreH,
    borderWidth: 0.5,
    borderColor: rgb(1, 0, 0),
  });
  nombre_1.setFontSize(10);
  nombre_1.enableReadOnly();

  var nombre_2 = form.createTextField("nombre_2");
  nombre_2.setText("ANGEL ADRIAN LEON VALENCIA");
  nombre_2.setAlignment(TextAlignment.Center);
  nombre_2.addToPage(page, {
    x: X,
    y: 543,
    width: nombreW,
    height: nombreH,
    borderWidth: 0.5,
    borderColor: rgb(1, 0, 0),
  });
  nombre_2.setFontSize(10);
  nombre_2.enableReadOnly();

  var nombre_3 = form.createTextField("nombre_3");
  nombre_3.setText("EMMANUEL ARIAS AGUILAR");
  nombre_3.setAlignment(TextAlignment.Center);
  nombre_3.addToPage(page, {
    x: X,
    y: 525.5,
    width: nombreW,
    height: nombreH,
    borderWidth: 0.5,
    borderColor: rgb(1, 0, 0),
  });
  nombre_3.setFontSize(10);
  nombre_3.enableReadOnly();

  var nombre_4 = form.createTextField("nombre_4");
  nombre_4.setText("JOSE DE JESUS HERNANDEZ");
  nombre_4.setAlignment(TextAlignment.Center);
  nombre_4.addToPage(page, {
    x: X,
    y: 508,
    width: nombreW,
    height: nombreH,
    borderWidth: 0.5,
    borderColor: rgb(1, 0, 0),
  });
  nombre_4.setFontSize(10);
  nombre_4.enableReadOnly();

  var nombre_5 = form.createTextField("nombre_5");
  nombre_5.setText("PIKI");
  nombre_5.setAlignment(TextAlignment.Center);
  nombre_5.addToPage(page, {
    x: X,
    y: 490.5,
    width: nombreW,
    height: nombreH,
    borderWidth: 0.5,
    borderColor: rgb(1, 0, 0),
  });
  nombre_5.setFontSize(10);
  nombre_5.enableReadOnly();

  /* Carrera */
  page.drawText("Carrera", {
    x: 465,
    y: 588.5,
    size: 12,
    font: Font,
  });

  const carreraW = 136;
  const carreraH = 17.5;
  X = 419;
  var carrera_1 = form.createTextField("carrera_1");
  carrera_1.setText("INGENIERIA EN SISTEMAS COMPUTACIONALES");
  carrera_1.setAlignment(TextAlignment.Center);
  carrera_1.addToPage(page, {
    x: X,
    y: 560.5,
    width: carreraW,
    height: carreraH,
    borderWidth: 0.5,
    borderColor: rgb(1, 0, 0),
  });
  carrera_1.enableReadOnly();

  var carrera_2 = form.createTextField("carrera_2");
  carrera_2.setText("INGENIERIA EN SISTEMAS COMPUTACIONALES");
  carrera_2.setAlignment(TextAlignment.Center);
  carrera_2.addToPage(page, {
    x: X,
    y: 543,
    width: carreraW,
    height: carreraH,
    borderWidth: 0.5,
    borderColor: rgb(1, 0, 0),
  });
  carrera_2.enableReadOnly();

  var carrera_3 = form.createTextField("carrera_3");
  carrera_3.setText("INGENIERIA EN SISTEMAS COMPUTACIONALES");
  carrera_3.setAlignment(TextAlignment.Center);
  carrera_3.addToPage(page, {
    x: X,
    y: 525.5,
    width: carreraW,
    height: carreraH,
    borderWidth: 0.5,
    borderColor: rgb(1, 0, 0),
  });
  carrera_3.enableReadOnly();

  var carrera_4 = form.createTextField("carrera_4");
  carrera_4.setText("INGENIERIA EN SISTEMAS COMPUTACIONALES");
  carrera_4.setAlignment(TextAlignment.Center);
  carrera_4.addToPage(page, {
    x: X,
    y: 508,
    width: carreraW,
    height: carreraH,
    borderWidth: 0.5,
    borderColor: rgb(1, 0, 0),
  });
  carrera_4.enableReadOnly();

  var carrera_5 = form.createTextField("carrera_5");
  carrera_5.setText("INGENIERIA EN SISTEMAS COMPUTACIONALES");
  carrera_5.setAlignment(TextAlignment.Center);
  carrera_5.addToPage(page, {
    x: X,
    y: 490.5,
    width: carreraW,
    height: carreraH,
    borderWidth: 0.5,
    borderColor: rgb(1, 0, 0),
  });
  carrera_5.enableReadOnly();

  Font = await pdfDoc.embedFont(MontserratBold);
  page.drawText("Datos de la empresa:", {
    x: 71,
    y: 470,
    size: 12,
    font: Font,
  });

  /* Tabla */

  /* Nombre de la empresa */
  Font = await pdfDoc.embedFont(Montserrat);
  page.drawText("Nombre de la", {
    x: 104.5,
    y: 455,
    size: 12,
    font: Font,
  });
  page.drawText("Empresa", {
    x: 118.5,
    y: 440,
    size: 12,
    font: Font,
  });

  const empresaW = 335;
  const empresaH = 30;
  var empresa = form.createTextField("empresa");
  empresa.setText("General Electric");
  empresa.setAlignment(TextAlignment.Center);
  empresa.addToPage(page, {
    x: 220,
    y: 437,
    width: empresaW,
    height: empresaH,
    borderWidth: 0.5,
    borderColor: rgb(1, 0, 0),
  });
  empresa.enableReadOnly();

  /* Nombre de la persona*/
  page.drawText("Nombre de la Persona", {
    x: 78.2,
    y: 425,
    size: 12,
    font: Font,
  });
  page.drawText("a quien va dirigida", {
    x: 90,
    y: 410.5,
    size: 12,
    font: Font,
  });

  Font = await pdfDoc.embedFont(MontserratBold);
  page.drawText("Datos de la materia: ", {
    x: 71,
    y: 387,
    size: 12,
    font: Font,
  });

  /* Tabla */
  /* Nombre de la materia */
  Font = await pdfDoc.embedFont(Montserrat);
  page.drawText("Nombre de la Materia", {
    x: 80,
    y: 366.5,
    size: 12,
    font: Font,
  });
  /* Nonbre del profesor */
  page.drawText("Nombre del Profesor", {
    x: 82.6,
    y: 345.6,
    size: 12,
    font: Font,
  });
  page.drawText("que imparte la Materia", {
    x: 77,
    y: 331,
    size: 12,
    font: Font,
  });

  Font = await pdfDoc.embedFont(MontserratBold);
  page.drawText("Datos del proyecto: ", {
    x: 71,
    y: 307.6,
    size: 12,
    font: Font,
  });

  /* Tabla */
  /* Nombre del proyecto */
  Font = await pdfDoc.embedFont(Montserrat);
  page.drawText("Nombre del", {
    x: 76.6,
    y: 292.2,
    size: 12,
    font: Font,
  });
  page.drawText("Proyecto", {
    x: 85.6,
    y: 277.9,
    size: 12,
    font: Font,
  });
  /* Objetivo */
  page.drawText("Objetivo:", {
    x: 85.9,
    y: 257.4,
    size: 12,
    font: Font,
  });
  /* Alcance */
  page.drawText("Alcance:", {
    x: 87.5,
    y: 231.4,
    size: 12,
    font: Font,
  });
  /* Actividades */
  page.drawText("Actividades", {
    x: 77.8,
    y: 205.2,
    size: 12,
    font: Font,
  });
  page.drawText("a Realizar:", {
    x: 82.5,
    y: 191,
    size: 12,
    font: Font,
  });

  Font = await pdfDoc.embedFont(Montserrat);
  page.drawText("Atentamente", {
    x: 279.5,
    y: 138,
    size: 10,
    font: Font,
  });

  page.drawText("Nombre y firma del responsable del", {
    x: 223.6,
    y: 96.3,
    size: 10,
    font: Font,
  });
  page.drawText("equipo", {
    x: 295.5,
    y: 84,
    size: 10,
    font: Font,
  });

  const pdfBytes = await pdfDoc.save();
  fs.writeFileSync("./output/Formato_REQUISITOS_EMPRESA.pdf", pdfBytes);
}
formato_Requisitos_Empresa();
