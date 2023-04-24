import { PDFDocument, rgb, TextAlignment } from "pdf-lib";
import fontkit from "@pdf-lib/fontkit";
import fs from "fs";
import { autoFecha, vanio, vdia, vmes, nmes } from "./Fecha.js";
import { Montserrat, MontserratBold } from "./Fonts.js";

/* Variables */
var form; //Inicializa el formulario que se ocupa para el llenado de campos
var template; //Da la ruta de la plantilla del formato
var pdfDoc; //Inicializa el documento pdf que se crea
var dia; //Variable dia del formulario
var mes; //Variables mes del formulario
var anio; //Variable año del formulario

export async function formato_Requisitos_Empresa() {
  template = fs.readFileSync("./pdf/Formato.pdf");

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
  const yForm = yfecha - 6.2;
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
  page.drawLine({
    start: { x: 71, y: 607.8 },
    end: { x: 555.5, y: 607.8 },
    thickness: 0.5,
  });
  page.drawLine({
    start: { x: 71.1, y: 608 },
    end: { x: 71.1, y: 577 },
    thickness: 0.5,
  });
  page.drawLine({
    start: { x: 163, y: 608 },
    end: { x: 163, y: 577 },
    thickness: 0.5,
  });
  page.drawLine({
    start: { x: 419, y: 608 },
    end: { x: 419, y: 577 },
    thickness: 0.5,
  });
  page.drawLine({
    start: { x: 555, y: 608 },
    end: { x: 555, y: 577 },
    thickness: 0.5,
  });

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
  const noControlW = 91.7;
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
  X = 163.2;
  var nombre_1 = form.createTextField("nombre_1");
  nombre_1.setText("ADRIAN LÓPEZ GUEVARA");
  nombre_1.setAlignment(TextAlignment.Center);
  nombre_1.addToPage(page, {
    x: X,
    y: 560.5,
    width: nombreW,
    height: nombreH,
    borderWidth: 0.5,
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
  page.drawLine({
    start: { x: 71, y: 466.5 },
    end: { x: 71, y: 407.2 },
    thickness: 0.5,
  });
  page.drawLine({
    start: { x: 71, y: 466.5 },
    end: { x: 220, y: 466.5 },
    thickness: 0.5,
  });
  page.drawLine({
    start: { x: 71, y: 436.8 },
    end: { x: 220, y: 436.8 },
    thickness: 0.5,
  });
  page.drawLine({
    start: { x: 71, y: 407.2 },
    end: { x: 220, y: 407.2 },
    thickness: 0.5,
  });
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
  const empresaH = 29.5;
  var empresa = form.createTextField("empresa");
  empresa.setText("General Electric");
  empresa.setAlignment(TextAlignment.Center);
  empresa.addToPage(page, {
    x: 220,
    y: 437,
    width: empresaW,
    height: empresaH,
    borderWidth: 0.5,
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

  var persona_Dirigida = form.createTextField("persona_Dirigida");
  persona_Dirigida.setText("Adrian López Guevara");
  persona_Dirigida.setAlignment(TextAlignment.Center);
  persona_Dirigida.addToPage(page, {
    x: 220,
    y: 407.3,
    width: empresaW,
    height: empresaH,
    borderWidth: 0.5,
  });
  persona_Dirigida.enableReadOnly();

  Font = await pdfDoc.embedFont(MontserratBold);
  page.drawText("Datos de la materia: ", {
    x: 71,
    y: 387,
    size: 12,
    font: Font,
  });

  /* Tabla */
  page.drawLine({
    start: { x: 71, y: 383.5 },
    end: { x: 71, y: 328 },
    thickness: 0.5,
  });
  page.drawLine({
    start: { x: 71, y: 383.5 },
    end: { x: 220, y: 383.5 },
    thickness: 0.5,
  });
  page.drawLine({
    start: { x: 71, y: 357.5 },
    end: { x: 220, y: 357.5 },
    thickness: 0.5,
  });
  page.drawLine({
    start: { x: 71, y: 328 },
    end: { x: 220, y: 328 },
    thickness: 0.5,
  });
  /* Nombre de la materia */
  Font = await pdfDoc.embedFont(Montserrat);
  page.drawText("Nombre de la Materia", {
    x: 80,
    y: 366.5,
    size: 12,
    font: Font,
  });
  var materia = form.createTextField("materia");
  materia.setText("Taller de sistemas operativos");
  materia.setAlignment(TextAlignment.Center);
  materia.addToPage(page, {
    x: 220,
    y: 357.6,
    width: 335,
    height: 26,
    borderWidth: 0.5,
  });
  materia.enableReadOnly();

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
  var profesor = form.createTextField("profesor");
  profesor.setText("Consuelo Frias Farias");
  profesor.setAlignment(TextAlignment.Center);
  profesor.addToPage(page, {
    x: 220,
    y: 328,
    width: 335,
    height: 29.5,
    borderWidth: 0.5,
  });
  profesor.enableReadOnly();
  Font = await pdfDoc.embedFont(MontserratBold);
  page.drawText("Datos del proyecto: ", {
    x: 71,
    y: 307.6,
    size: 12,
    font: Font,
  });

  /* Tabla */
  page.drawLine({
    start: { x: 71, y: 304 },
    end: { x: 71, y: 158 },
    thickness: 0.5,
  });
  page.drawLine({
    start: { x: 71, y: 304 },
    end: { x: 155, y: 304 },
    thickness: 0.5,
  });
  page.drawLine({
    start: { x: 71, y: 274.5 },
    end: { x: 155, y: 274.5 },
    thickness: 0.5,
  });
  page.drawLine({
    start: { x: 71, y: 248.5 },
    end: { x: 155, y: 248.5 },
    thickness: 0.5,
  });
  page.drawLine({
    start: { x: 71, y: 222.5 },
    end: { x: 155, y: 222.5 },
    thickness: 0.5,
  });
  page.drawLine({
    start: { x: 71, y: 158 },
    end: { x: 155, y: 158 },
    thickness: 0.5,
  });
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
  var proyectoW = 400.5;
  var proyectoH = 29.5;
  var proyecto = form.createTextField("proyecto");
  proyecto.setText("CorgiBooks");
  proyecto.setAlignment(TextAlignment.Center);
  proyecto.addToPage(page, {
    x: 154.4,
    y: 274.5,
    width: proyectoW,
    height: proyectoH,
    borderWidth: 0.5,
  });
  proyecto.enableReadOnly();
  /* Objetivo */
  page.drawText("Objetivo:", {
    x: 85.9,
    y: 257.4,
    size: 12,
    font: Font,
  });
  var objetivo = form.createTextField("objetivo");
  objetivo.setText(
    "El proyecto consiste en una aplicación web que permite gestionar archivos enfocados en un ámbito de las farmacias y medicamentos"
  );
  proyectoH = 25.8;
  objetivo.setAlignment(TextAlignment.Center);
  objetivo.addToPage(page, {
    x: 154.4,
    y: 248.5,
    width: proyectoW,
    height: proyectoH,
    borderWidth: 0.5,
  });
  objetivo.enableReadOnly();
  /* Alcance */
  page.drawText("Alcance:", {
    x: 87.5,
    y: 231.4,
    size: 12,
    font: Font,
  });
  var alcance = form.createTextField("alcance");
  alcance.setText("Mucho XD");
  alcance.setAlignment(TextAlignment.Center);
  alcance.addToPage(page, {
    x: 154.4,
    y: 222.5,
    width: proyectoW,
    height: proyectoH,
    borderWidth: 0.5,
  });
  alcance.enableReadOnly();
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
  proyectoH = 64.5;
  var actividades = form.createTextField("actividades");
  actividades.setText(
    "No se que poner aqui aprte ya tengo sueño así que le dejo eso al Adrian del mañana XD"
  );
  actividades.setAlignment(TextAlignment.Center);
  actividades.addToPage(page, {
    x: 154.4,
    y: 158,
    width: proyectoW,
    height: proyectoH,
    borderWidth: 0.5,
  });
  actividades.enableReadOnly();

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
