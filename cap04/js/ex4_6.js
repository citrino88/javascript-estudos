'use strict'
/* c) Em um determinado momento do dia, apenas notas de 10, 50, 100 estão disponíveis em um terminal de caixa eletrônico. Elaborar um programa que leia um valor de saque de um cliente, verifique sua validade (ou seja, se pode ser pago com as notas disponíveis) e informe o número mínimo de notas de 100, 50 e 10 necessárias para pagar esse saque. */

const form = document.querySelector('form')
const resp100 = document.querySelector('nota100')
const resp50 = document.querySelector('nota50')
const resp10 = document.querySelector('nota10')

form.addEventListener('submit', (noReload)=>{
    noReload.preventDefault()
    const saque = Number(form.inSaque.value)
    if(saque % 10 != 0){
        alert('Valor inválido para as notas disponíveis\n(R$ 10, 50 ou 100)')
        form.inSaque.focus()
        return
    }
    const notas100 = Math.floor(saque / 100)
    let resto = saque % 100
})