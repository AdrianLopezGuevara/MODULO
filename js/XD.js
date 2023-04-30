const { PDFDocument, TextAlignment } = PDFLib

async function Formato_noadeudo() {
    /* Variables */
    const date = new Date();
    var vdia = date.getDate().toString();
    var nmes = date.getMonth();
    var vmes = ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"];
    var vanio = date.getFullYear().toString();
    var vnoControl = document.getElementById("noControl").value;
    var vnombre = document.getElementById("nombre").value;
    var vapellidoPat = document.getElementById("apellidoPat").value;
    var vapellidoMat = document.getElementById("apellidoMat").value;
    var vsemestre = document.getElementById("semestre").value;
    var vcarrera = document.querySelector('input[name="carrera"]:checked').value;
    var vlaboratorio = document.querySelector('input[name="laboratorio"]:checked').value;

    /* Import Fonts */
    const MontserratURL = "./fonts/Montserrat/static/Montserrat-Regular.ttf";
    const MontserratBoldURL = "./fonts/Montserrat/static/Montserrat-BoldItalic.ttf";
    const Montserrat = await fetch(MontserratURL).then(res => res.arrayBuffer())
    const MontserratBold = await fetch(MontserratBoldURL).then(res => res.arrayBuffer())
    /* Import template */
    const template = "./pdf/Formato.pdf";
    const formPdfBytes = await fetch(template).then(res => res.arrayBuffer())

    const pdfDoc = await PDFDocument.load(formPdfBytes);
    pdfDoc.registerFontkit(fontkit);

    const pages = pdfDoc.getPages();
    const page = pages[0];

    const form = pdfDoc.getForm(); //Se define tipo form

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
    page.drawText("Querétaro, Qro.,    a", {
        x: 269.3,
        y: yfecha,
        size: 10,
        font: Font,
    });
    const dia = form.createTextField("dia"); //Se crea el txtField de dia
    dia.setText(vdia);
    dia.setAlignment(TextAlignment.Center);
    dia.addToPage(page, {
        x: 370,
        y: 608,
        width: 20,
        height: 20,
        borderWidth: 0,
    });
    dia.setFontSize(10);
    dia.enableReadOnly();
    page.drawText("de", {
        x: 397,
        y: yfecha,
        size: 10,
        font: Font,
    });
    const mes = form.createTextField("mes"); //Se crea el txtField de mes
    mes.setText(vmes[nmes]);
    mes.setAlignment(TextAlignment.Center);
    mes.addToPage(page, {
        x: 413,
        y: 608,
        width: 84,
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
    const anio = form.createTextField("anio"); //Se crea el txtField de año
    anio.setText(vanio);
    anio.setAlignment(TextAlignment.Center);
    anio.addToPage(page, {
        x: 518,
        y: 607.5,
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
    const noControl = form.createTextField("noControl"); //Se crea el txtField de numero de control
    noControl.setText(vnoControl);
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
    const nombre = form.createTextField("nombre"); //Se crea el txtField de nombre
    nombre.setText(vnombre + " " + vapellidoPat + " " + vapellidoMat);
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
    const semetre = form.createTextField("semestre"); //Se crea el txtField de semestre
    semetre.setText(vsemestre);
    semetre.setAlignment(TextAlignment.Center);
    semetre.addToPage(page, {
        x: 133.9,
        y: 523.5,
        width: 39,
        height: 21,
    });
    semetre.setFontSize(10);
    semetre.enableReadOnly();

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
    const carrera = form.createTextField("carrera"); //Se crea el txtField de carrera
    carrera.setText(vcarrera);
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
    const lab = form.createTextField("lab"); //Se crea el txtField de laboratorio
    lab.setText(vlaboratorio);
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
