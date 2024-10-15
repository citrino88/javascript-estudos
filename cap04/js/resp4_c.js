/* Exercício

c) Elaborar um programa para simular um parquímetro, o qual leia o valor de moedas depositado em um terminal de estacionamento rotativo. O programa deve informar o tempo de permanência do veículo no local e o troco(se existir). Se o valor for inferior ao tempo mínimo, exiba a mensagem: "Valor Insuficiente"

tabela
valor| tempo (mín)
1,00	30
1,75	60
3,00	120 */

const form = document.querySelector('form')
const resposta = document.querySelector('h3')

form.addEventListener('submit', (c)=>{
    c.preventDefault()

    const valor = Number(form.inValor.value)

    if (valor < 1.00) {
        alert('Valor Insuficiente (no mínimo, R$ 1.00)')
        form.inValor.focus()
        return
    }

    if (valor >= 3){
        let troco = valor - 3
        resposta.innerText = `Tempo: 120 min\nTroco R$: ${troco.toFixed(2)}`
    } else {
        if (valor >= 1.75){
            troco = valor - 1.75
            resposta.innerText = `Tempo 60 min\nTroco R$: ${troco.toFixed(2)}`
        } else {
            troco = valor - 1.00
            resposta.innerText = `Tempo 30 min\nTroco R$: ${troco.toFixed(2)}`
        }
    }
})