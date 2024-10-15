/* Exercício
d) Elaborar um programa que leia três lados e verifica se eles podem ou não formar um triângulo. Para formar um triângulo, um dos lados não pode ser maior que a soma dos outros dois. Caso possam formar um triângulo, exiba também qual o tipo do triângulo: Equilátero ( 3 lados iguais), Isósceles (2 lados iguais) e Escaleno (3 lados diferentes)
 */

const form = document.querySelector('form')
const resposta1 = document.getElementById('naoTriangulo')
const resposta2 =  document.getElementById('tipoTriangulo')

form.addEventListener('submit', (c) =>{
    c.preventDefault()

    const ladoA = Number(form.inLadoA.value)
    const ladoB = Number(form.inLadoB.value)
    const ladoC = Number(form.inLadoC.value)

    if(ladoA > ladoB + ladoC || ladoB > ladoA + ladoC || ladoC > ladoA + ladoB){
        resposta1.innerText = 'Não pode formar um triângulo com estes lados.'
        resposta2.innerText = ''
    } else {
        resposta1.innerText = 'Os lados formam um triângulo.'
        if (ladoA == ladoB && ladoB == ladoC){
            resposta2.innerText = 'Tipo: Triângulo Equilátero'
        } else if(ladoA == ladoB || ladoA == ladoC || ladoB == ladoC){
            resposta2.innerText = 'Tipo: Triângulo Isóceles'
        } else {
            resposta2.innerText = 'Tipo: Triângulo Escaleno'
        }
    }


})