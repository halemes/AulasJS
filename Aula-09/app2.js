// jogo de advinhação

const buttonElement = document.getElementById('checkButton');
const resultadoMensagemElement = document.getElementById('resultMessage');
var tentativas = 1;
var sorteado = Math.floor(Math.random() * 100) + 1;
console.log(sorteado);
buttonElement.addEventListener('click', 
    function() { 
        var numero = document.getElementById('tentativaInput').value; 
        
        
        if (numero < 1 || numero > 100){
            tentativas++
            resultadoMensagemElement.classList.remove('result-fail');
            resultadoMensagemElement.classList.remove('result-success');
            resultadoMensagemElement.classList.add('result-error');
            resultadoMensagemElement.innerHTML = '<br>'+'<strong> DIGITE UM NÚMERO DE 1 A 100 </strong>'+'<br>'
            
        
        } else if (numero >= 1 && numero <= 100 && sorteado > numero){
            tentativas++
            resultadoMensagemElement.classList.remove('result-error');
            resultadoMensagemElement.classList.add('result-fail');
            resultadoMensagemElement.innerHTML = '<br>'+'<strong> VOCÊ ERROU... TENTE NOVAMENTE... </strong>'
            +'<br><br>'+'o número sorteado é maior que o número digitado ' + numero;
            

        } else if (numero >= 1 && numero <= 100 && sorteado < numero){
            tentativas++
            resultadoMensagemElement.classList.remove('result-error');
            resultadoMensagemElement.classList.add('result-fail');
            resultadoMensagemElement.innerHTML = '<br>'+'<strong> VOCÊ ERROU... TENTE NOVAMENTE... </strong>'+
            '<br><br>'+'o número sorteado  é menor que o número digitado ' + numero;
         
            
        } else if (numero >= 1 && numero <= 100 && sorteado == numero){
            resultadoMensagemElement.classList.remove('result-error');
            resultadoMensagemElement.classList.remove('result-fail');
            resultadoMensagemElement.classList.add('result-success');
            resultadoMensagemElement.innerHTML = '<br>'+'<strong> PARABÉNS ! VOCÊ ACERTOU !!! </strong>' + 
            '<br><br>' +'o número sorteado  ' + sorteado + '  é igual ao número digitado ' + numero + 
            '<br><br>'+'acertou na tentativa número: '+ tentativas;
            tentativas=1;
            sorteado = Math.floor(Math.random() * 100) + 1;
            console.log(sorteado);
        }
        
  });