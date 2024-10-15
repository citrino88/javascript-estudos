/* b) Elaborar um program que leia a velocidade permitida em uma estrada e a velocidade de um condutor. Se a velocidade for inferior ou igual à permitida, exiba 'Sem multas'. Se a velocidade for de até 20% maior que a permitida, exiba "Multa Leve". E, se a velocidade for superior a 20% da velocidade permitida, exiba 'Multa Grave' */

//referências ao form e a saída
const form = document.querySelector('form')
const saida = document.querySelector('h3')

//evento
form.addEventListener('submit', (noReload) => {
    noReload.preventDefault()

    const permitida = Number(form.inPermitida.value) 
    const condutor = Number(form.inCondutor.value)

    if( condutor <= permitida ){
        saida.innerText = 'Situação: Sem Multas'
    } else {
        const vinteAmais = permitida * 1.20
        if (condutor <= vinteAmais){
        saida.innerText = 'Situação: Multa Leve'
        } else{
        saida.innerText = 'Situação: Multa Grave'
        }
    }    
})