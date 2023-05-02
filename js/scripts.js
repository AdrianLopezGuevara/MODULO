import { formato_NO_ADEUDO } from './F_no_adeudo.js';
import { formato_Requisitos_Empresa } from './F_requisitos_empresa.js';
const form = document.querySelector('#form1');
const form2 = document.querySelector('#form2');


form.addEventListener('submit', function (e) {
    e.preventDefault()
    const lab = document.querySelector('[name="lab"]:checked').value;
    let data = new FormData(form);
    fetch('../php/functions.php', {
        method: 'POST',
        body: data
    })
        .then(res => res.json())
        .then(alumno => {
            const nombre = alumno['nombre'] + " " + alumno['apellidoPat'] + " " + alumno['apellidoMat'];
            formato_NO_ADEUDO(alumno['noControl'], nombre, alumno['semestre'], alumno['carrera'], lab)
        })
})

form2.addEventListener('submit', function (e) {
    e.preventDefault()
    let data = new FormData(form2);
    fetch('../php/functions.php', {
        method: 'POST',
        body: data
    })
        .then(res => res.json())
        .then(alumno => {
            const noControl = [];
            const nombre = [];
            const carrera = [];
            for (let i = 0; i < 5; i++) {
                noControl[i] = alumno[i][0];
                nombre[i] = alumno[i][1] + " " + alumno[i][2] + " " + alumno[i][3];
                carrera[i] = [alumno[i][5]];
                /* console.log(noControl[i])
                console.log(nombre[i])
                console.log(carrera[i]) */
            }

            formato_Requisitos_Empresa(
                noControl[0], noControl[1], noControl[2], noControl[3], noControl[4],
                nombre[0], nombre[1], nombre[2], nombre[3], nombre[4],
                carrera[0].toString(), carrera[1].toString(), carrera[2].toString(), carrera[3].toString(), carrera[4].toString(),
                "Huawei", "Rick Sanchez",
                "Sistemas Operativos", "Tony Stark",
                "Servicio Social", "Liberar mi servicio porfa XD", "Mucho alcance", "Jugar overwatch ");
        })
})