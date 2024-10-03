// aqui criamos uma referência ao form e ao elemento h3 (onde haverá uma saída)
const formulario = document.querySelector("form")
const resp = document.querySelector("h3")

// criamos abaixo um "ouviente" de evento, acionado quando o botão submit (Mostrar) for clicado
formulario.addEventListener("submit", (e) =>{
    const nome = formulario.inNome.value // aqui capturo o nome digitado no form
    resp.innerText = `Olá ${nome}` // exibe a resposta
    e.preventDefault() // evita envio do form
})

/* OBSERVAÇÕES
1) poderíamos ter acessado diretamente a propriedade que queria atraves de:
const nome = document.querySelector("form").inNome.value
Porém se nosso programa trabalhar mais de uma vez com o mesmo elemento é melhor, então, armazenar o localização dele em uma variável.

2) querySelector é mais amplo e cria uma referência a um elemento HTML pela sua tag name, id ou classe, exemplos  ("h1"), (".classeCorClara") e (#idFormaAnimada).

3) getElementById elemento só referenciado se tiver um id.

4) exemplos de palavras reservadas para Eventos (submit, change, click, blur, load, ...)

5) arrow function: () => { comandos a serem  executados }

6) propriedade value: altera ou obtém o conteúdo de um campo de formulário HTML.

7) propriedade innerText: altera ou obtém o texto dentro de elementos do documento identificado  no HTML. textContent ou outerText são semelhantes ao innerText.

8) propriedade innerHTML: altera ou obtém o conteúdo de elementos HTML, exemplos cabeçalhos (h1, h2,...), (p), containers (span, div)

9) XSS(Cross-Site-Scripting): são ataques que exploram a exibição de dados em uma página web. Para evitar esse problema é necessário filtrar os dados de entrada do site.

10) método preventDefault(): previne, por exemplo, o comportamento default do botão submit(quando clicado, ocorre uma ação de envio de dados, e isso faz com que haja um reload da página, sendo desta maneira perdidos as resposta que o usuário enviou). Este método foi aplicado sobre um evento passado pelo parâmetro (e). 
*/
