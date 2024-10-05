const form = document.querySelector('form')
const respModulo = document.querySelector('#modulo')
//ver comentário em saída
form.addEventListener("submit", (naoReload) =>{
    // ENTRADA
    const numero1 = form.num1.value
    const numero2 = form.num2.value
    // PROCESSAMENTO
    const modulo1 = numero1 % numero2
    const absoluto = Math.abs(numero1)
    const arredondCima = Math.ceil(numero1)
    const arredondBaixo = Math.floor(numero1)
    const expoente = Math.pow(numero1, numero2)
    const aleatorio = Math.random()
    const arredondamento = Math.round(numero1)
    const raizQuadrada = Math.sqrt(numero1)
    // SAÍDA
    respModulo.innerText = `Resposta: ${modulo1}`
    //como vou usar somente uma vez, então não vou declarar outras constantes
    document.querySelector('#absoluto').innerText = `Resposta: ${absoluto}`
    document.querySelector('#arreCima').innerText = `Resposta: ${arredondCima}`
    document.querySelector('#arreBaixo').innerText = `Resposta: ${arredondBaixo}`
    document.querySelector('#expoente').innerText = `Resposta: ${expoente}`
    document.querySelector('#aleatorio').innerText = `Resposta: ${aleatorio}`
    document.querySelector('#arredonda').innerText = `Resposta: ${arredondamento}`
    document.querySelector('#raizQuadrada').innerText = `Resposta: ${raizQuadrada}`
    naoReload.preventDefault()
})