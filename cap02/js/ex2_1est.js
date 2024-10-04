const form = document.querySelector('form')
const resp = document.querySelector('h3')

form.addEventListener("submit", (naoreload) =>{
    // ENTRADA
    const numero1 = form.num1.value
    const numero2 = form.num2.value
    // PROCESSAMENTO
    const modulo1 = numero1 % numero2

    // SAÍDA
    resp.innerText = `Respostas\n${numero1}\n${numero2}\n${modulo1}`
    naoreload.preventDefault()
})