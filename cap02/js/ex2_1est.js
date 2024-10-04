const form = document.querySelector('form')
const resp = document.querySelector('h2')
const modulo1 = 11 % 4

form.addEventListener("submit", (naoreload) =>{
    const numero1 = form.num1.value
    const numero2 = form.num2.value
    resp.innerText = `Respostas\n${numero1}\n${numero2}`
    naoreload.preventDefault()
})