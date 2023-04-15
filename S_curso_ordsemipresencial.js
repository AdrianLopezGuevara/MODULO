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
        color: rgb(1, 0, 0),
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
        color: rgb(1, 0, 0),
    });

    var Font = await pdfDoc.embedFont(Montserrat);
    page.drawText("Presente:", {
        x: 71,
        y: 579.2,
        size: 12,
        font: Font,
        color: rgb(1, 0, 0),
    });
    page.drawText("Por medio", {
        x: 71,
        y: 548.2,
        size: 12,
        font: Font,
        color: rgb(1, 0, 0),
    });
    page.drawText("del presente me", {
        x: 138,
        y: 548.2,
        size: 12,
        font: Font,
        color: rgb(1, 0, 0),
    });
    page.drawText("dirijo a", {
        x: 240,
        y: 548.2,
        size: 12,
        font: Font,
        color: rgb(1, 0, 0),
    });
    page.drawText("usted, para", {
        x: 284.2,
        y: 548.2,
        size: 12,
        font: Font,
        color: rgb(1, 0, 0),
    });
    page.drawText("solicitar que", {
        x: 355,
        y: 548.2,
        size: 12,
        font: Font,
        color: rgb(1, 0, 0),
    });
    page.drawText("realice las", {
        x: 432,
        y: 548.2,
        size: 12,
        font: Font,
        color: rgb(1, 0, 0),
    });
    page.drawText("gestiones", {
        x: 495,
        y: 548.2,
        size: 12,
        font: Font,
        color: rgb(1, 0, 0),
    });
    page.drawText("pertinentes", {
        x: 71,
        y: 526,
        size: 12,
        font: Font,
        color: rgb(1, 0, 0),
    });
    page.drawText("ante", {
        x: 146.5,
        y: 526,
        size: 12,
        font: Font,
        color: rgb(1, 0, 0),
    });
    page.drawText("el", {
        x: 179.5,
        y: 526,
        size: 12,
        font: Font,
        color: rgb(1, 0, 0),
    });
    page.drawText("departamento", {
        x: 195.5,
        y: 526,
        size: 12,
        font: Font,
        color: rgb(1, 0, 0),
    });
    page.drawText("correspondiente,", {
        x: 289,
        y: 526,
        size: 12,
        font: Font,
        color: rgb(1, 0, 0),
    });
    page.drawText("para", {
        x: 397,
        y: 526,
        size: 12,
        font: Font,
        color: rgb(1, 0, 0),
    });
    page.drawText("que", {
        x: 430,
        y: 526,
        size: 12,
        font: Font,
        color: rgb(1, 0, 0),
    });
    page.drawText("se", {
        x: 459,
        y: 526,
        size: 12,
        font: Font,
        color: rgb(1, 0, 0),
    });
    page.drawText("me", {
        x: 477.5,
        y: 526,
        size: 12,
        font: Font,
        color: rgb(1, 0, 0),
    });
    page.drawText("autorice", {
        x: 503,
        y: 526,
        size: 12,
        font: Font,
        color: rgb(1, 0, 0),
    });
    page.drawText("llevar", {
        x: 71,
        y: 504.2,
        size: 12,
        font: Font,
        color: rgb(1, 0, 0),
    });
    var Font = await pdfDoc.embedFont(MontserratBoldN);
    page.drawText("curso", {
        x: 125,
        y: 504.2,
        size: 12,
        font: Font,
        color: rgb(1, 0, 0),
    });
    page.drawText("ordinario", {
        x: 182,
        y: 504.2,
        size: 12,
        font: Font,
        color: rgb(1, 0, 0),
    });
    page.drawText("semipresencial", {
        x: 261.5,
        y: 504.2,
        size: 12,
        font: Font,
        color: rgb(1, 0, 0),
    });
    var Font = await pdfDoc.embedFont(Montserrat);
    page.drawText("de", {
        x: 378.5,
        y: 504.2,
        size: 12,
        font: Font,
        color: rgb(1, 0, 0),
    });
    page.drawText("la", {
        x: 416.4,
        y: 504.2,
        size: 12,
        font: Font,
        color: rgb(1, 0, 0),
    });
    page.drawText("asignatura", {
        x: 448.5,
        y: 504.2,
        size: 12,
        font: Font,
        color: rgb(1, 0, 0),
    });
    page.drawText("de:", {
        x: 535,
        y: 504.2,
        size: 12,
        font: Font,
        color: rgb(1, 0, 0),
    });
    /* Asignatura */
    const asignatura = form.createTextField("asignatura");
    asignatura.setText("Calculo Diferencial");
    asignatura.setAlignment(TextAlignment.Center);
    asignatura.addToPage(page, {
        x: 71,
        y: 482.5,
        width: 482,
        height: 12,
        borderWidth: 0,
    });
    asignatura.setFontSize(12);
    asignatura.enableReadOnly();
    page.drawText("con clave:", {
        x: 71,
        y: 460.5,
        size: 12,
        font: Font,
        color: rgb(1, 0, 0),
    });
    /* Clave */
    const clave = form.createTextField("clave");
    clave.setText("123456");
    clave.setAlignment(TextAlignment.Center);
    clave.addToPage(page, {
        x: 134,
        y: 460.5,
        width: 59,
        height: 12,
        borderWidth: 0,
    })
    clave.setFontSize(12);
    clave.enableReadOnly();
    page.drawText(", en", {
        x: 193.5,
        y: 460.5,
        size: 12,
        font: Font,
        color: rgb(1, 0, 0),
    });
    page.drawText("el grupo:", {
        x: 218.5,
        y: 460.5,
        size: 12,
        font: Font,
        color: rgb(1, 0, 0),
    });
    /* Grupo */
    const grupo = form.createTextField("grupo");
    grupo.setText("6A");
    grupo.setAlignment(TextAlignment.Center);
    grupo.addToPage(page, {
        x: 275.5,
        y: 460.5,
        width: 59,
        height: 12,
        borderWidth: 0,
    })
    grupo.setFontSize(12);
    grupo.enableReadOnly();
    page.drawText(", durante", {
        x: 335,
        y: 460.5,
        size: 12,
        font: Font,
        color: rgb(1, 0, 0),
    });
    page.drawText("el periodo", {
        x: 393,
        y: 460.5,
        size: 12,
        font: Font,
        color: rgb(1, 0, 0),
    });
    /* Periodo */
    const periodo = form.createTextField("periodo");
    periodo.setText("Agosto-Diciembre");
    periodo.setAlignment(TextAlignment.Center);
    periodo.addToPage(page, {
        x: 457.5,
        y: 460.5,
        width: 95,
        height: 17,
        borderWidth: 0,
    });
    periodo.setFontSize(11);
    periodo.enableReadOnly();
    page.drawText("del año", {
        x: 71,
        y: 438.2,
        size: 12,
        font: Font,
        color: rgb(1, 0, 0),
    });
    /* Año */
    page.drawText(".", {
        x: 160.5,
        y: 438.2,
        size: 12,
        font: Font,
        color: rgb(1, 0, 0),
    });

    page.drawText("Esta asignatura la imparte el (la) profesor(a):", {
        x: 71,
        y: 394.5,
        size: 12,
        font: Font,
        color: rgb(1, 0, 0),
    });
    /* Profesor */
    page.drawText("En", {
        x: 71,
        y: 363,
        size: 12,
        font: Font,
        color: rgb(1, 0, 0),
    });
    page.drawText("espera", {
        x: 94.5,
        y: 363,
        size: 12,
        font: Font,
        color: rgb(1, 0, 0),
    });
    page.drawText("que", {
        x: 142,
        y: 363,
        size: 12,
        font: Font,
        color: rgb(1, 0, 0),
    });
    page.drawText("dicha", {
        x: 173,
        y: 363,
        size: 12,
        font: Font,
        color: rgb(1, 0, 0),
    });
    page.drawText("solicitud", {
        x: 213.7,
        y: 363,
        size: 12,
        font: Font,
        color: rgb(1, 0, 0),
    });
    page.drawText("sea", {
        x: 272,
        y: 363,
        size: 12,
        font: Font,
        color: rgb(1, 0, 0),
    });
    page.drawText("aceptada", {
        x: 299.5,
        y: 363,
        size: 12,
        font: Font,
        color: rgb(1, 0, 0),
    });
    page.drawText("me", {
        x: 363.5,
        y: 363,
        size: 12,
        font: Font,
        color: rgb(1, 0, 0),
    });
    page.drawText("despido", {
        x: 390.5,
        y: 363,
        size: 12,
        font: Font,
        color: rgb(1, 0, 0),
    });
    page.drawText("quedando", {
        x: 446.5,
        y: 363,
        size: 12,
        font: Font,
        color: rgb(1, 0, 0),
    });
    page.drawText("a", {
        x: 516,
        y: 363,
        size: 12,
        font: Font,
        color: rgb(1, 0, 0),
    });
    page.drawText("sus", {
        x: 530.5,
        y: 363,
        size: 12,
        font: Font,
        color: rgb(1, 0, 0),
    });
    page.drawText("órdenes.", {
        x: 71,
        y: 348,
        size: 12,
        font: Font,
        color: rgb(1, 0, 0),
    });
    page.drawText("Atentamente", {
        x: 270.2,
        y: 333.5,
        size: 12,
        font: Font,
        color: rgb(1, 0, 0),
    });
    page.drawText("Nombre y Firma", {
        x: 261.5,
        y: 286,
        size: 12,
        font: Font,
        color: rgb(1, 0, 0),
    });
    page.drawText("Estudiante", {
        x: 71,
        y: 249.5,
        size: 12,
        font: Font,
        color: rgb(1, 0, 0),
    });
    page.drawText("del", {
        x: 141.5,
        y: 249.5,
        size: 12,
        font: Font,
        color: rgb(1, 0, 0),
    });
    /* Semestre */
    page.drawText("semestre", {
        x: 200,
        y: 249.5,
        size: 12,
        font: Font,
        color: rgb(1, 0, 0),
    });
    page.drawText("de", {
        x: 261,
        y: 249.5,
        size: 12,
        font: Font,
        color: rgb(1, 0, 0),
    });
    page.drawText("la", {
        x: 281.5,
        y: 249.5,
        size: 12,
        font: Font,
        color: rgb(1, 0, 0),
    });
    page.drawText("carrera", {
        x: 296.5,
        y: 249.5,
        size: 12,
        font: Font,
        color: rgb(1, 0, 0),
    });
    page.drawText("de", {
        x: 344,
        y: 249.5,
        size: 12,
        font: Font,
        color: rgb(1, 0, 0),
    });
    /* Carrera */
    page.drawText("con numero de control", {
        x: 71,
        y: 227.5,
        size: 12,
        font: Font,
        color: rgb(1, 0, 0),
    });
    /* Numero de control */
    page.drawText(".", {
        x: 302.5,
        y: 227.5,
        size: 12,
        font: Font,
        color: rgb(1, 0, 0),
    });
    page.drawText("Correo Electrónico:", {
        x: 71,
        y: 205.5,
        size: 12,
        font: Font,
        color: rgb(1, 0, 0),
    });
    /* Correo */
    page.drawText(".", {
        x: 368.5,
        y: 205.5,
        size: 12,
        font: Font,
        color: rgb(1, 0, 0),
    });
    page.drawText("Teléfono:", {
        x: 71,
        y: 183.5,
        size: 12,
        font: Font,
        color: rgb(1, 0, 0),
    });
    /* Telefono */
    page.drawText(".", {
        x: 350.5,
        y: 183.5,
        size: 12,
        font: Font,
        color: rgb(1, 0, 0),
    });

    var Font = await pdfDoc.embedFont(MontserratBold);
    page.drawText("Nota:", {
        x: 71,
        y: 151.5,
        size: 10,
        font: Font,
        color: rgb(1, 0, 0),
    });
    var Font = await pdfDoc.embedFont(Montserrat);
    page.drawText(
        "Quedo al pendiente que se me entregue la autorización por parte de mi coordinación de ",
        {
            x: 101.5,
            y: 151.5,
            size: 10,
            font: Font,
            color: rgb(1, 0, 0),
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
            color: rgb(1, 0, 0),
        }
    );

    const pdfBytes = await pdfDoc.save();
    fs.writeFileSync(
        "./output/Solicitud_CURSO_ORDINARIO_SEMIPRESENCIAL.pdf",
        pdfBytes
    );
}
sol_Curso_Ordsemipresencial();
