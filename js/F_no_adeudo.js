const { PDFDocument, TextAlignment } = PDFLib
import { autoFecha, vanio, vdia, vmes, nmes } from "./dev/Fecha.js";
import { Montserrat, MontserratBold } from "./Fonts.js";

/* Inlcudes */
const templateURL = "./pdf/Formato.pdf";
const template = await fetch(templateURL).then(res => res.arrayBuffer())
const pdfDoc = await PDFDocument.load(template);
pdfDoc.registerFontkit(fontkit);
const pages = pdfDoc.getPages();
const page = pages[0];
const form = pdfDoc.getForm();

const dia = form.createTextField("dia");
const mes = form.createTextField("mes");
const anio = form.createTextField("anio");

/* Function variables */
const noControl = form.createTextField("noControl");
const nombre = form.createTextField("nombre");
const semestre = form.createTextField("semestre");
const carrera = form.createTextField("carrera");

const lab = form.createTextField("lab");

export async function formato_NO_ADEUDO(_noControl, _nombre, _semestre, _carrera, _lab) {
    let Font = await pdfDoc.embedFont(Montserrat);

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
    const yForm = yfecha - 6.2;
    let [X, Wmes] = autoFecha();
    page.drawText("Querétaro, Qro.,    a", {
        x: X,
        y: yfecha,
        size: 10,
        font: Font,
    });

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

    noControl.setText(_noControl);
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

    nombre.setText(_nombre);
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

    semestre.setText(_semestre);
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

    carrera.setText(_carrera);
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
    let txtY = 465.2;
    let recY = 463;
    let recW = 169;
    let recH = 12;
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

    lab.setText(_lab);
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
    download(pdfBytes, "Formato de No Adeudo.pdf", "application/pdf");
}

