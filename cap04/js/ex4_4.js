'use strict'
/* a) Sabendo que o fuso horário da França em relação ao Brasil é de + 5 horas( no horário de verão na França), elaborar um programa que leia a hora no Brasil e informe a hora na França. */

//criar as referências
const form = document.querySelector('form')
const resp = document.querySelector('h3')

//criar o ouvinte de evento
form.addEventListener('submit', (naoReload) => {
    naoReload.preventDefault()
    //entrada + processamento
    let horaFr = Number(form.inHoraBrasil.value) + 5.00
    if (horaFr > 24){
        horaFr = horaFr - 24
    }

    //saída
    resp.innerText = `Hora na França é ${horaFr.toFixed(2)}`
})