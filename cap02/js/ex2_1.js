// aqui criamos uma referência ao form e ao elemento h3 (onde haverá uma saída)
const formulario = document.querySelector("form")
const resp = document.querySelector("h3")

// criamos abaixo um "ouviente" de evento, acionado quando o botão submit (Mostrar) for clicado
formulario.addEventListener("submit", (e) =>{
    const nome = formulario.inNome.value // aqui capturo o nome digitado no form
    resp.innerText = `Olá ${nome}` // exibe a resposta
    e.preventDefault() // evita envio do form
})