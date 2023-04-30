import { formato_NO_ADEUDO } from './FNA.js';
const form = document.querySelector('.form');


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
            formato_NO_ADEUDO(alumno['noControl'], alumno['nombre'], alumno['apellidoPat'], alumno['apellidoMat'], alumno['semestre'], alumno['carrera'], lab)
        })
})
