
const numeroSorteado = 50
const buttonElement = document.getElementById('checkButton');
numero = document.getElementById('tentativaInput').value;
    const paragraphElement = document.getElementById ('resultMessage');

buttonElement.addEventListener('click', function () {
    
    console.log(numero)

    if (numero < numeroSorteado) {
        document.getElementById(result-sucess) = '<strong>'
        alert('O número é menor que o sorteado')
    } else {
        alert('O número é maior que p sorteado');
    }
    
});