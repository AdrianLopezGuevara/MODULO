import { PDFDocument, rgb, TextAlignment, StandardFonts } from "pdf-lib";
import fontkit from "@pdf-lib/fontkit";
import fs from "fs";
import { autoFecha, vanio, vdia, vmes, nmes } from "./Fecha.js";
import { Soberana } from "./Fonts.js";

/* Variables */
var form; //Inicializa el formulario que se ocupa para el llenado de campos
var template; //Da la ruta de la plantilla del formato
var pdfDoc; //Inicializa el documento pdf que se crea
var dia; //Variable dia del formulario
var mes; //Variables mes del formulario
var anio; //Variable año del formulario

export async function sol_Acreditacion_RP() {
    template = fs.readFileSync("./pdf/Formato.pdf");

    pdfDoc = await PDFDocument.load(template);
    pdfDoc.registerFontkit(fontkit);

    const pages = pdfDoc.getPages();
    const page = pages[0];

    form = pdfDoc.getForm();

    var Font = await pdfDoc.embedFont(Soberana);

    page.drawText(
        "Solicitud del estudiante para la Acreditación de Residencia Profesional",
        {
            x: 136.5,
            y: 667.5,
            font: Font,
            size: 11,
        }
    );

    const yfecha = 642;
    const yForm = yfecha - 6.2;
    var [X, Wmes] = autoFecha();
    page.drawText("Querétaro, Qro.,    a", {
        x: 298,
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

    page.drawText("C.", {
        x: 53.1,
        y: 615,
        font: Font,
        size: 10,
    });
    page.drawText("Jefe de la División de Estudios Profesionales\nPresente.", {
        x: 74.3,
        y: 602.2,
        font: Font,
        size: 10,
        lineHeight: 11.3,
    });
    page.drawText("El (La) que suscribe C.", {
        x: 49.6,
        y: 559,
        font: Font,
        size: 10,
    });
    /* Nombre */
    const nombre = form.createTextField("nombre");
    nombre.setText("Adrian López Guevara");
    nombre.setAlignment(TextAlignment.Center);
    nombre.addToPage(page, {
        x: 153,
        y: 559,
        width: 417,
        height: 13.5,
        borderWidth: 0,
    });
    nombre.setFontSize(10);
    nombre.enableReadOnly();
    page.drawLine({
        start: {
            x: 153,
            y: 557.2,
        },
        end: {
            x: 571,
            y: 557.2,
        },
    });
    page.drawText("Estudiante  del", {
        x: 49.6,
        y: 534,
        font: Font,
        size: 10,
    });
    /* Semestre */
    const semestre = form.createTextField("semestre");
    semestre.setText("8");
    semestre.setAlignment(TextAlignment.Center);
    semestre.addToPage(page, {
        x: 123,
        y: 534,
        width: 47,
        height: 13.5,
        borderWidth: 0,
    });
    semestre.setFontSize(10);
    semestre.enableReadOnly();
    page.drawLine({
        start: {
            x: 123,
            y: 532.2,
        },
        end: {
            x: 170,
            y: 532.2,
        },
    });
    page.drawText("semestre,", {
        x: 175.5,
        y: 534,
        font: Font,
        size: 10,
    });
    page.drawText("de", {
        x: 227.5,
        y: 534,
        font: Font,
        size: 10,
    });
    page.drawText("la", {
        x: 244.5,
        y: 534,
        font: Font,
        size: 10,
    });
    page.drawText("carrera", {
        x: 258.5,
        y: 534,
        font: Font,
        size: 10,
    });
    /* Carrera */
    const carrera = form.createTextField("carrera");
    carrera.setText("Ingenieria en Sistemas Computacionales");
    carrera.setAlignment(TextAlignment.Center);
    carrera.addToPage(page, {
        x: 297,
        y: 534,
        width: 163.5,
        height: 13.5,
        borderWidth: 0,
    });
    carrera.enableReadOnly();
    page.drawLine({
        start: {
            x: 297,
            y: 532.2,
        },
        end: {
            x: 460.5,
            y: 532.2,
        },
    });
    page.drawText("con", {
        x: 466,
        y: 534,
        font: Font,
        size: 10,
    });
    page.drawText("número", {
        x: 488.5,
        y: 534,
        font: Font,
        size: 10,
    });
    page.drawText("de", {
        x: 530.5,
        y: 534,
        font: Font,
        size: 10,
    });
    page.drawText("control", {
        x: 547.5,
        y: 534,
        font: Font,
        size: 10,
    });
    /* Numero de control */
    const noControl = form.createTextField("noControl");
    noControl.setText("19141166");
    noControl.setAlignment(TextAlignment.Center);
    noControl.addToPage(page, {
        x: 49.6,
        y: 515,
        width: 71.4,
        height: 13.5,
        borderWidth: 0,
    });
    noControl.setFontSize(10);
    noControl.enableReadOnly();
    page.drawLine({
        start: {
            x: 49.6,
            y: 513.2,
        },
        end: {
            x: 121,
            y: 513.2,
        },
    });
    page.drawText(". Informo que participé en el Programa:", {
        x: 121,
        y: 515,
        font: Font,
        size: 10,
    });
    /* Programa */
    const programa = form.createTextField("programa");
    programa.setText("Programa de integración de sistemas en turbinas de avion");
    programa.setAlignment(TextAlignment.Center);
    programa.addToPage(page, {
        x: 304.5,
        y: 515,
        width: 273.5,
        height: 13.5,
        borderWidth: 0,
    });
    programa.enableReadOnly();
    page.drawLine({
        start: {
            x: 304.5,
            y: 513.2,
        },
        end: {
            x: 578,
            y: 513.2,
        },
    });
    page.drawText("Ejecutándolo", {
        x: 49.6,
        y: 490,
        font: Font,
        size: 10,
    });
    page.drawText("en:", {
        x: 116.5,
        y: 490,
        font: Font,
        size: 10,
    });
    /* Empresa */
    const empresa = form.createTextField("empresa");
    empresa.setText("General Electric");
    empresa.setAlignment(TextAlignment.Center);
    empresa.addToPage(page, {
        x: 135,
        y: 490,
        width: 443,
        height: 13.5,
        borderWidth: 0,
    });
    empresa.setFontSize(10);
    empresa.enableReadOnly();
    page.drawLine({
        start: {
            x: 135,
            y: 488.2,
        },
        end: {
            x: 578,
            y: 488.2,
        },
    });
    page.drawText(",", {
        x: 579,
        y: 490,
        font: Font,
        size: 10,
    });
    page.drawText("en la ciudad de:", {
        x: 49.6,
        y: 471,
        font: Font,
        size: 10,
    });
    /* Ciudad */
    const ciudad = form.createTextField("ciudad");
    ciudad.setText("Querétaro");
    ciudad.setAlignment(TextAlignment.Center);
    ciudad.addToPage(page, {
        x: 123.5,
        y: 471,
        width: 182.5,
        height: 13.5,
        borderWidth: 0,
    });
    ciudad.setFontSize(10);
    ciudad.enableReadOnly();
    page.drawLine({
        start: {
            x: 123.5,
            y: 469.2,
        },
        end: {
            x: 306,
            y: 469.2,
        },
    });
    page.drawText(", durante el periodo:", {
        x: 306,
        y: 471,
        font: Font,
        size: 10,
    });
    /* Periodo */
    const periodo = form.createTextField("periodo");
    periodo.setText("Agosto-Diciembre");
    periodo.setAlignment(TextAlignment.Center);
    periodo.addToPage(page, {
        x: 401,
        y: 471,
        width: 177,
        height: 13.5,
        borderWidth: 0,
    });
    periodo.setFontSize(10);
    periodo.enableReadOnly();
    page.drawLine({
        start: {
            x: 401,
            y: 469.2,
        },
        end: {
            x: 578,
            y: 469.2,
        },
    });
    page.drawText("Mi", {
        x: 49.6,
        y: 446,
        font: Font,
        size: 10,
    });
    page.drawText("participación", {
        x: 96.5,
        y: 446,
        font: Font,
        size: 10,
    });
    page.drawText("se", {
        x: 192,
        y: 446,
        font: Font,
        size: 10,
    });
    page.drawText("concretó", {
        x: 238,
        y: 446,
        font: Font,
        size: 10,
    });
    page.drawText("en", {
        x: 315,
        y: 446,
        font: Font,
        size: 10,
    });
    page.drawText("el", {
        x: 361.5,
        y: 446,
        font: Font,
        size: 10,
    });
    page.drawText("desarrollo", {
        x: 405,
        y: 446,
        font: Font,
        size: 10,
    });
    page.drawText("del", {
        x: 487,
        y: 446,
        font: Font,
        size: 10,
    });
    page.drawText("proyecto:", {
        x: 536,
        y: 446,
        font: Font,
        size: 10,
    });
    /* Proyecto */
    const proyecto = form.createTextField("proyecto");
    proyecto.setText("Proyecto de inovación de lo que sea XD");
    proyecto.setAlignment(TextAlignment.Center);
    proyecto.addToPage(page, {
        x: 49.6,
        y: 426.4,
        width: 526.4,
        height: 13.5,
        borderWidth: 0,
    });
    proyecto.setFontSize(10);
    proyecto.enableReadOnly();
    page.drawLine({
        start: {
            x: 49.6,
            y: 425.5,
        },
        end: {
            x: 576,
            y: 425.5,
        },
    });
    page.drawText(",", {
        x: 576,
        y: 427,
        font: Font,
        size: 10,
    });
    page.drawText("en el", {
        x: 49.6,
        y: 408,
        font: Font,
        size: 10,
    });
    page.drawText("cual se", {
        x: 75,
        y: 408,
        font: Font,
        size: 10,
    });
    page.drawText("pusieron en", {
        x: 110.5,
        y: 408,
        font: Font,
        size: 10,
    });
    page.drawText("práctica los", {
        x: 168,
        y: 408,
        font: Font,
        size: 10,
    });
    page.drawText("conocimientos", {
        x: 225,
        y: 408,
        font: Font,
        size: 10,
    });
    page.drawText("adquiridos", {
        x: 296.5,
        y: 408,
        font: Font,
        size: 10,
    });
    page.drawText("durante la", {
        x: 348,
        y: 408,
        font: Font,
        size: 10,
    });
    page.drawText("carrera, así", {
        x: 399,
        y: 408,
        font: Font,
        size: 10,
    });
    page.drawText("como el", {
        x: 454,
        y: 408,
        font: Font,
        size: 10,
    });
    page.drawText("fortalecimiento de", {
        x: 494.5,
        y: 408,
        font: Font,
        size: 10,
    });
    page.drawText("los mismos e intercambio de experiencias con el personal.", {
        x: 49.6,
        y: 389,
        font: Font,
        size: 10,
    });
    page.drawText(
        "Por lo cual, solicito de la manera más atenta, se me considere este proyecto como Acreditación de la Residencia",
        {
            x: 49.6,
            y: 364,
            font: Font,
            size: 10,
        }
    );
    page.drawText("Profesional", {
        x: 49.6,
        y: 339,
        font: Font,
        size: 10,
    });
    page.drawText("del", {
        x: 106,
        y: 339,
        font: Font,
        size: 10,
    });
    page.drawText("periodo:", {
        x: 124,
        y: 339,
        font: Font,
        size: 10,
    });
    /* Periodo */
    const periodoResidencia = form.createTextField("periodoResidencia");
    periodoResidencia.setText("Enero-Junio");
    periodoResidencia.setAlignment(TextAlignment.Center);
    periodoResidencia.addToPage(page, {
        x: 166,
        y: 339,
        width: 208,
        height: 13.5,
        borderWidth: 0,
    });
    periodoResidencia.setFontSize(10);
    periodoResidencia.enableReadOnly();
    page.drawLine({
        start: {
            x: 166,
            y: 337.2,
        },
        end: {
            x: 374,
            y: 337.2,
        },
    });
    page.drawText(", de", {
        x: 376,
        y: 339,
        font: Font,
        size: 10,
    });
    page.drawText("acuerdo", {
        x: 397,
        y: 339,
        font: Font,
        size: 10,
    });
    page.drawText("al", {
        x: 439.3,
        y: 339,
        font: Font,
        size: 10,
    });
    page.drawText("lineamiento", {
        x: 451.7,
        y: 339,
        font: Font,
        size: 10,
    });
    page.drawText("de", {
        x: 511,
        y: 339,
        font: Font,
        size: 10,
    });
    page.drawText("Residencias", {
        x: 527,
        y: 339,
        font: Font,
        size: 10,
    });
    page.drawText("Profesionales.", {
        x: 49.6,
        y: 320,
        font: Font,
        size: 10,
    });
    page.drawText("Agradezco de antemano las atenciones facilitadas a", {
        x: 49.6,
        y: 295,
        font: Font,
        size: 10,
    });
    page.drawText(
        "la presente y en espera de una pronta resolución, me despido",
        {
            x: 295.5,
            y: 295,
            font: Font,
            size: 10,
        }
    );
    page.drawText("de usted.", {
        x: 49.6,
        y: 276,
        font: Font,
        size: 10,
    });
    page.drawText("Anexo a la presente solicitud:", {
        x: 49.6,
        y: 251,
        font: Font,
        size: 10,
    });
    const box1 = form.createCheckBox("checkbox1");
    box1.addToPage(page, {
        x: 92.5,
        y: 213.5,
        width: 28.2,
        height: 12,
    });
    const box2 = form.createCheckBox("checkbox2");
    box2.addToPage(page, {
        x: 92.5,
        y: 201.5,
        width: 28.2,
        height: 12,
    });
    const box3 = form.createCheckBox("checkbox3");
    box3.addToPage(page, {
        x: 92.5,
        y: 189.5,
        width: 28.2,
        height: 12,
    });
    page.drawText("Carta de Aceptación", {
        x: 126,
        y: 215.3,
        font: Font,
        size: 10,
    });
    page.drawText("Carta o constancia de terminación", {
        x: 126,
        y: 202,
        font: Font,
        size: 10,
    });
    page.drawText("Informe del proyecto en disco (anexo I)", {
        x: 126,
        y: 189,
        font: Font,
        size: 10,
    });
    const box4 = form.createCheckBox("checkbox4");
    box4.addToPage(page, {
        x: 326.3,
        y: 213.5,
        width: 28.2,
        height: 12,
    });
    const box5 = form.createCheckBox("checkbox5");
    box5.addToPage(page, {
        x: 326.3,
        y: 201.5,
        width: 28.2,
        height: 12,
    });
    const box6 = form.createCheckBox("checkbox6");
    box6.addToPage(page, {
        x: 326.3,
        y: 189.5,
        width: 28.2,
        height: 12,
    });
    page.drawText("Diplomas", {
        x: 359.8,
        y: 215.3,
        font: Font,
        size: 10,
    });
    page.drawText("Kárdex", {
        x: 359.8,
        y: 202,
        font: Font,
        size: 10,
    });
    page.drawText("Otros", {
        x: 359.8,
        y: 189,
        font: Font,
        size: 10,
    });
    page.drawText("Atentamente", {
        x: 286.7,
        y: 165.5,
        font: Font,
        size: 9,
    });

    page.drawLine({
        start: {
            x: 237,
            y: 129,
        },
        end: {
            x: 400,
            y: 129,
        },
    });
    page.drawText("Nombre y fima del estudiante", {
        x: 243.8,
        y: 118.2,
        font: Font,
        size: 10,
    });
    page.drawText("r", {
        x: 299,
        y: 118.2,
        font: Font,
        size: 10,
    });
    page.drawText("Correo electrónico:", {
        x: 49.6,
        y: 93.5,
        font: Font,
        size: 11,
    });
    /* Correo */
    const correo = form.createTextField("correo");
    correo.setText("l19141166@queretaro.tecnm.mx");
    correo.setAlignment(TextAlignment.Center);
    correo.addToPage(page, {
        x: 150,
        y: 93.5,
        width: 180,
        height: 13.5,
        borderWidth: 0,
    });
    correo.setFontSize(10);
    correo.enableReadOnly();
    page.drawLine({
        start: {
            x: 150,
            y: 91.3,
        },
        end: {
            x: 330,
            y: 91.3,
        },
    });
    page.drawText("Teléfono celular:", {
        x: 49.6,
        y: 72.5,
        font: Font,
        size: 11,
    });
    /* Telefono */
    const telefono = form.createTextField("telefono");
    telefono.setText("4421571994");
    telefono.setAlignment(TextAlignment.Center);
    telefono.addToPage(page, {
        x: 144,
        y: 72.5,
        width: 180,
        height: 13.5,
        borderWidth: 0,
    });
    telefono.setFontSize(10);
    telefono.enableReadOnly();
    page.drawLine({
        start: {
            x: 144,
            y: 70.3,
        },
        end: {
            x: 324,
            y: 70.3,
        },
    });

    const pdfBytes = await pdfDoc.save();
    fs.writeFileSync(
        "./output/Solicitud_ACREDITACION_RESIDENCIAS_PROFESIONALES.pdf",
        pdfBytes
    );
}
sol_Acreditacion_RP();
