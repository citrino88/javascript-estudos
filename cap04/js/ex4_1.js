'use strict'
//criar referências
const form = document.querySelector('form')
const resp1 = document.querySelector('h3')
const resp2 = document.querySelector('h4')

//criar o "ouvinte de eventos"
form.addEventListener('submit', (naoReload) =>{
    naoReload.preventDefault()
    //entrada
    const nome = form.inNome.value
    const nota1 = Number(form.inNota1.value)
    const nota2 = Number(form.inNota2.value)
    //processamento
    const media = (nota1+nota2)/2
    //saída
    resp1.innerText = `Média das Notas do Aluno é ${media.toFixed(2)}`
    //processamento das condições Aprovado, Reprovado ou Recuperação e Saídas
    if (media >= 7){
        resp2.innerText = `Parabéns ${nome}! Você foi aprovado(a)!`
        resp2.style.color = 'green'
    } else if (media>=4){
        resp2.innerText = `Atenção ${nome}. Você está de recuperação.`
        resp2.style.color = 'purple'
    } else {
        resp2.innerText = `Ops ${nome}. Você foi reprovado(a)`
        resp2.style.color = 'red'
    }
})