'use strict'
// criar referências
const form = document.querySelector('form')
const resp = document.querySelector('h3')

// criar o "ouvinte de evento"
form.addEventListener('submit', (naoReload) => {
    naoReload.preventDefault()

    // entrada
    const nome = form.inNome.value
    const masculino = form.inMasculino.checked // se masculino foi ticado
    const altura = Number(form.inAltura.value)

    // processamento
    let peso
    if (masculino) { //(masculino == true)
        peso = 22 * Math.pow(altura, 2)
    } else {
        peso = 21 * Math.pow(altura, 2)
    }
    
    // saída
    resp.innerText = `${nome} seu peso ideal é ${peso.toFixed(3)} kg`
})
form.addEventListener('reset', ()=>{
    resp.innerText = ''
})