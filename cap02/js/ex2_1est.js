const form = document.querySelector('form')
const resp = document.querySelector('h3')

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
    resp.innerText = `Respostas\n${numero1}\n${numero2}\n${absoluto}`
    naoReload.preventDefault()
})