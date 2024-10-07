'use strict'
/* b) Elaborar um programa para uma revenda de veículos. O programa dever ler o modelo e preço do veículo. Apresentar como resposta o valor da entrada (50%) e o saldo em 12x */

// criar referência ao form e as saídas pelo uso do id
const frm = document.querySelector('form')
const resp1 = document.querySelector('#outResp1')
const resp2 = document.querySelector('#outResp2')
const resp3 = document.querySelector('#outResp3')

// criar o "ouviente do evento"
frm.addEventListener("submit", (naoReload)=>{
    //ENTRADA dos valores puxando pelo id
        const veiculo = frm.inVeiculo.value
        const preco = Number(frm.inPreco.value)
    //PROCESSAMENTO
        const entrada = preco * 0.50
        const parcela = entrada / 12 // ou (preco * 0.50) /12
    //SAÍDA
        resp1.innerText = `Promoção: ${veiculo}`
        resp2.innerText = `Entrada de R$ ${entrada.toFixed(2)}`
        resp3.innerText = `+12 parcelas de R$ ${parcela.toFixed(2)}`
    naoReload.preventDefault()    
})