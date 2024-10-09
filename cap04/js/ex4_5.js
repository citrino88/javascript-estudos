'use strict'
/* 
b) Elaborar um programa que leia um número e calcule sua raiz quadrada. Caso a raiz seja exata (quadrados perfeitos), informá-la, caso contrário, informe: 'Não há raiz exata para ...' */

const form = document.querySelector('form')
const saida = document.querySelector('h3')

form.addEventListener('submit', (noReload) =>{
    noReload.preventDefault()
    const numero = Number(form.inNumero.value)
    const raiz = Math.sqrt(numero)
    if (Number.isInteger(raiz)){
        saida.innerText = `Raiz é ${raiz}`
    } else {
        saida.innerText = `Não há raiz exata para ${numero}`
    }
})