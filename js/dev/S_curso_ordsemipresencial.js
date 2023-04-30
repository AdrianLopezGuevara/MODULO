import { PDFDocument, rgb, TextAlignment } from "pdf-lib";
import fontkit from "@pdf-lib/fontkit";
import fs from "fs";
import { autoFecha, vanio, vdia, vmes, nmes } from "./Fecha.js";
import { Montserrat, MontserratBoldN, MontserratBold } from "./Fonts.js";

/* Variables */
var form; //Inicializa el formulario que se ocupa para el llenado de campos
var template; //Da la ruta de la plantilla del formato
var pdfDoc; //Inicializa el documento pdf que se crea
var dia; //Variable dia del formulario
var mes; //Variables mes del formulario
var anio; //Variable año del formulario

export async function sol_Curso_Ordsemipresencial() {
    template = fs.readFileSync("./pdf/PDF TECNM/solcursoordsemipresencial.pdf");

    pdfDoc = await PDFDocument.load(template);
    pdfDoc.registerFontkit(fontkit);

    const pages = pdfDoc.getPages();
    const page = pages[0];

    form = pdfDoc.getForm();

    var Font = await pdfDoc.embedFont(Montserrat);

    const yfecha = 644.7;
    const yForm = yfecha - 6.2;
    var [X, Wmes] = autoFecha();
    page.drawText("Querétaro, Qro.,    a", {
        x: X,
        y: yfecha,
        size: 12,
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
    dia.setFontSize(12);
    dia.enableReadOnly();
    page.drawText("de", {
        x: X + 127.7,
        y: yfecha,
        size: 12,
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
    mes.setFontSize(12);
    mes.enableReadOnly();
    page.drawText("de", {
        x: 499.5,
        y: yfecha,
        size: 12,
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
    anio.setFontSize(12);
    anio.enableReadOnly();

    var Font = await pdfDoc.embedFont(MontserratBoldN);

    page.drawText("Jefe de la División de Estudios Profesionales", {
        x: 71,
        y: 596.2,
        size: 12,
        font: Font,
    });

    var Font = await pdfDoc.embedFont(Montserrat);
    page.drawText("Presente:", {
        x: 71,
        y: 579.2,
        size: 12,
        font: Font,
    });
    page.drawText("Por medio", {
        x: 71,
        y: 548.2,
        size: 12,
        font: Font,
    });
    page.drawText("del presente me", {
        x: 138,
        y: 548.2,
        size: 12,
        font: Font,
    });
    page.drawText("dirijo a", {
        x: 240,
        y: 548.2,
        size: 12,
        font: Font,
    });
    page.drawText("usted, para", {
        x: 284.2,
        y: 548.2,
        size: 12,
        font: Font,
    });
    page.drawText("solicitar que", {
        x: 355,
        y: 548.2,
        size: 12,
        font: Font,
    });
    page.drawText("realice las", {
        x: 432,
        y: 548.2,
        size: 12,
        font: Font,
    });
    page.drawText("gestiones", {
        x: 495,
        y: 548.2,
        size: 12,
        font: Font,
    });
    page.drawText("pertinentes", {
        x: 71,
        y: 526,
        size: 12,
        font: Font,
    });
    page.drawText("ante", {
        x: 146.5,
        y: 526,
        size: 12,
        font: Font,
    });
    page.drawText("el", {
        x: 179.5,
        y: 526,
        size: 12,
        font: Font,
    });
    page.drawText("departamento", {
        x: 195.5,
        y: 526,
        size: 12,
        font: Font,
    });
    page.drawText("correspondiente,", {
        x: 289,
        y: 526,
        size: 12,
        font: Font,
    });
    page.drawText("para", {
        x: 397,
        y: 526,
        size: 12,
        font: Font,
    });
    page.drawText("que", {
        x: 430,
        y: 526,
        size: 12,
        font: Font,
    });
    page.drawText("se", {
        x: 459,
        y: 526,
        size: 12,
        font: Font,
    });
    page.drawText("me", {
        x: 477.5,
        y: 526,
        size: 12,
        font: Font,
    });
    page.drawText("autorice", {
        x: 503,
        y: 526,
        size: 12,
        font: Font,
    });
    page.drawText("llevar", {
        x: 71,
        y: 504.2,
        size: 12,
        font: Font,
    });
    var Font = await pdfDoc.embedFont(MontserratBoldN);
    page.drawText("curso", {
        x: 125,
        y: 504.2,
        size: 12,
        font: Font,
    });
    page.drawText("ordinario", {
        x: 182,
        y: 504.2,
        size: 12,
        font: Font,
    });
    page.drawText("semipresencial", {
        x: 261.5,
        y: 504.2,
        size: 12,
        font: Font,
    });
    var Font = await pdfDoc.embedFont(Montserrat);
    page.drawText("de", {
        x: 378.5,
        y: 504.2,
        size: 12,
        font: Font,
    });
    page.drawText("la", {
        x: 416.4,
        y: 504.2,
        size: 12,
        font: Font,
    });
    page.drawText("asignatura", {
        x: 448.5,
        y: 504.2,
        size: 12,
        font: Font,
    });
    page.drawText("de:", {
        x: 535,
        y: 504.2,
        size: 12,
        font: Font,
    });
    /* Asignatura */
    const asignatura = form.createTextField("asignatura");
    asignatura.setText("Calculo g Diferencial");
    asignatura.setAlignment(TextAlignment.Center);
    asignatura.addToPage(page, {
        x: 71,
        y: 482.7,
        width: 482,
        height: 17,
        borderWidth: 0,
    });
    asignatura.setFontSize(12);
    asignatura.enableReadOnly();
    page.drawText("con clave:", {
        x: 71,
        y: 460.5,
        size: 12,
        font: Font,
    });
    page.drawLine({
        start: {
            x: 71,
            y: 482.5,
        },
        end: {
            x: 553,
            y: 482.5,
        },
    });
    /* Clave */
    const clave = form.createTextField("clave");
    clave.setText("123456");
    clave.setAlignment(TextAlignment.Center);
    clave.addToPage(page, {
        x: 134,
        y: 460.7,
        width: 59,
        height: 12,
        borderWidth: 0,
    });
    clave.setFontSize(12);
    clave.enableReadOnly();
    page.drawLine({
        start: {
            x: 134,
            y: 460.5,
        },
        end: {
            x: 192,
            y: 460.5,
        },
    });
    page.drawText(", en", {
        x: 193.5,
        y: 460.5,
        size: 12,
        font: Font,
    });
    page.drawText("el grupo:", {
        x: 218.5,
        y: 460.5,
        size: 12,
        font: Font,
    });
    /* Grupo */
    const grupo = form.createTextField("grupo");
    grupo.setText("6A");
    grupo.setAlignment(TextAlignment.Center);
    grupo.addToPage(page, {
        x: 275.5,
        y: 460.7,
        width: 59,
        height: 12,
        borderWidth: 0,
    });
    grupo.setFontSize(12);
    grupo.enableReadOnly();
    page.drawLine({
        start: {
            x: 275.5,
            y: 460.5,
        },
        end: {
            x: 334.5,
            y: 460.5,
        },
    });
    page.drawText(", durante", {
        x: 335,
        y: 460.5,
        size: 12,
        font: Font,
    });
    page.drawText("el periodo", {
        x: 393,
        y: 460.5,
        size: 12,
        font: Font,
    });
    /* Periodo */
    const periodo = form.createTextField("periodo");
    periodo.setText("Agosto-Diciembre");
    periodo.setAlignment(TextAlignment.Center);
    periodo.addToPage(page, {
        x: 457.5,
        y: 460.7,
        width: 95,
        height: 17,
        borderWidth: 0,
    });
    periodo.setFontSize(11);
    periodo.enableReadOnly();
    page.drawLine({
        start: {
            x: 457.5,
            y: 460.5,
        },
        end: {
            x: 552.5,
            y: 460.5,
        }
    });
    page.drawText("del año", {
        x: 71,
        y: 438.2,
        size: 12,
        font: Font,
    });
    /* Año */
    anio = form.createTextField("anio_Curso");
    anio.setText("2024");
    anio.setAlignment(TextAlignment.Center);
    anio.addToPage(page, {
        x: 118,
        y: 438.7,
        width: 42,
        height: 12,
        borderWidth: 0,
    });
    anio.setFontSize(12);
    anio.enableReadOnly();
    page.drawLine({
        start: {
            x: 118,
            y: 438.2,
        },
        end: {
            x: 160,
            y: 438.2,
        }
    });
    page.drawText(".", {
        x: 160.5,
        y: 438.2,
        size: 12,
        font: Font,
    });

    page.drawText("Esta asignatura la imparte el (la) profesor(a):", {
        x: 71,
        y: 394.5,
        size: 12,
        font: Font,
    });
    /* Profesor */
    const profesor = form.createTextField("profesor");
    profesor.setText("Carlos Gerardo Hernandez Solis");
    profesor.setAlignment(TextAlignment.Center);
    profesor.addToPage(page, {
        x: 338.5,
        y: 395,
        width: 203,
        height: 12,
        borderWidth: 0,
    });
    profesor.enableReadOnly();
    page.drawLine({
        start: {
            x: 338.5,
            y: 394.5,
        },
        end: {
            x: 538.5,
            y: 394.5,
        }
    });
    page.drawText("En", {
        x: 71,
        y: 363,
        size: 12,
        font: Font,
    });
    page.drawText("espera", {
        x: 94.5,
        y: 363,
        size: 12,
        font: Font,
    });
    page.drawText("que", {
        x: 142,
        y: 363,
        size: 12,
        font: Font,
    });
    page.drawText("dicha", {
        x: 173,
        y: 363,
        size: 12,
        font: Font,
    });
    page.drawText("solicitud", {
        x: 213.7,
        y: 363,
        size: 12,
        font: Font,
    });
    page.drawText("sea", {
        x: 272,
        y: 363,
        size: 12,
        font: Font,
    });
    page.drawText("aceptada", {
        x: 299.5,
        y: 363,
        size: 12,
        font: Font,
    });
    page.drawText("me", {
        x: 363.5,
        y: 363,
        size: 12,
        font: Font,
    });
    page.drawText("despido", {
        x: 390.5,
        y: 363,
        size: 12,
        font: Font,
    });
    page.drawText("quedando", {
        x: 446.5,
        y: 363,
        size: 12,
        font: Font,
    });
    page.drawText("a", {
        x: 516,
        y: 363,
        size: 12,
        font: Font,
    });
    page.drawText("sus", {
        x: 530.5,
        y: 363,
        size: 12,
        font: Font,
    });
    page.drawText("órdenes.", {
        x: 71,
        y: 348,
        size: 12,
        font: Font,
    });
    page.drawText("Atentamente", {
        x: 270.2,
        y: 333.5,
        size: 12,
        font: Font,
    });
    page.drawLine({
        start: {
            x: 220.8,
            y: 300,
        },
        end: {
            x: 400.8,
            y: 300,
        }
    });
    page.drawText("Nombre y Firma", {
        x: 261.5,
        y: 286,
        size: 12,
        font: Font,
    });
    page.drawText("Estudiante", {
        x: 71,
        y: 249.5,
        size: 12,
        font: Font,
    });
    page.drawText("del", {
        x: 141.5,
        y: 249.5,
        size: 12,
        font: Font,
    });
    /* Semestre */
    const semestre = form.createTextField("Semestre");
    semestre.setText("8");
    semestre.setAlignment(TextAlignment.Center);
    semestre.addToPage(page, {
        x: 165.5,
        y: 250,
        width: 29,
        height: 12,
        borderWidth: 0,
    });
    semestre.setFontSize(12);
    semestre.enableReadOnly();
    page.drawLine({
        start: {
            x: 165.5,
            y: 249.5,
        },
        end: {
            x: 194.5,
            y: 249.5,
        }
    });
    page.drawText("semestre", {
        x: 200,
        y: 249.5,
        size: 12,
        font: Font,
    });
    page.drawText("de", {
        x: 261,
        y: 249.5,
        size: 12,
        font: Font,
    });
    page.drawText("la", {
        x: 281.5,
        y: 249.5,
        size: 12,
        font: Font,
    });
    page.drawText("carrera", {
        x: 296.5,
        y: 249.5,
        size: 12,
        font: Font,
    });
    page.drawText("de", {
        x: 344,
        y: 249.5,
        size: 12,
        font: Font,
    });
    /* Carrera */
    const carrera = form.createTextField("Carrera");
    carrera.setText("Ingenieria en sistemas computacionales");
    carrera.setAlignment(TextAlignment.Center);
    carrera.addToPage(page, {
        x: 365,
        y: 250,
        width: 185,
        height: 12,
        borderWidth: 0,
    });
    carrera.enableReadOnly();
    page.drawLine({
        start: {
            x: 365,
            y: 249.5,
        },
        end: {
            x: 550,
            y: 249.5,
        }
    });
    page.drawText("con numero de control", {
        x: 71,
        y: 227.5,
        size: 12,
        font: Font,
    });
    /* Numero de control */
    const noControl = form.createTextField("noControl");
    noControl.setText("19141166");
    noControl.setAlignment(TextAlignment.Center);
    noControl.addToPage(page, {
        x: 213,
        y: 228,
        width: 89,
        height: 12,
        borderWidth: 0,
    });
    noControl.setFontSize(12);
    noControl.enableReadOnly();
    page.drawLine({
        start: {
            x: 213,
            y: 227.5,
        },
        end: {
            x: 302,
            y: 227.5,
        }
    });
    page.drawText(".", {
        x: 302.5,
        y: 227.5,
        size: 12,
        font: Font,
    });
    page.drawText("Correo Electrónico:", {
        x: 71,
        y: 205.5,
        size: 12,
        font: Font,
    });
    /* Correo */
    const correo = form.createTextField("Correo");
    correo.setText("l19141166@queretaro.tecnm.mx");
    correo.setAlignment(TextAlignment.Center);
    correo.addToPage(page, {
        x: 189,
        y: 206,
        width: 178,
        height: 12,
        borderWidth: 0,
    });
    correo.enableReadOnly();
    page.drawLine({
        start: {
            x: 189,
            y: 205.5,
        },
        end: {
            x: 367,
            y: 205.5,
        }
    });
    page.drawText(".", {
        x: 368.5,
        y: 205.5,
        size: 12,
        font: Font,
    });
    page.drawText("Teléfono:", {
        x: 71,
        y: 183.5,
        size: 12,
        font: Font,
    });
    /* Telefono */
    const telefono = form.createTextField("Telefono");
    telefono.setText("4421571994");
    telefono.setAlignment(TextAlignment.Center);
    telefono.addToPage(page, {
        x: 130,
        y: 184,
        width: 219,
        height: 12,
        borderWidth: 0,
    });
    telefono.setFontSize(12);
    telefono.enableReadOnly();
    page.drawLine({
        start: {
            x: 130,
            y: 183.5,
        },
        end: {
            x: 349,
            y: 183.5,
        }
    });
    page.drawText(".", {
        x: 350.5,
        y: 183.5,
        size: 12,
        font: Font,
    });

    var Font = await pdfDoc.embedFont(MontserratBold);
    page.drawText("Nota:", {
        x: 71,
        y: 151.5,
        size: 10,
        font: Font,
    });
    var Font = await pdfDoc.embedFont(Montserrat);
    page.drawText(
        "Quedo al pendiente que se me entregue la autorización por parte de mi coordinación de ",
        {
            x: 101.5,
            y: 151.5,
            size: 10,
            font: Font,
        }
    );
    page.drawText(
        "si fue aceptada mi solicitud. Al encontrarme inscrito(a) en el grupo estoy informado(a) que este documento autorizado es el que ampara que la puedo cursar en esta modalidad.",
        {
            x: 71,
            y: 139.2,
            size: 10,
            maxWidth: 500,
            lineHeight: 12.1,
            font: Font,
        }
    );

    const pdfBytes = await pdfDoc.save();
    fs.writeFileSync(
        "./output/Solicitud_CURSO_ORDINARIO_SEMIPRESENCIAL.pdf",
        pdfBytes
    );
}
sol_Curso_Ordsemipresencial();
