// verificar se o valor digitado é maior que 10

const buttonElement = document.getElementById('checkButton');
const resultadoMensagemElement = document.getElementById('resultadoMensagem');
buttonElement.addEventListener('click', 
    function() { 
        var valor = document.getElementById('numeroInput').value; 

        
        if (valor == '' || isNaN(valor)){
          alert('O valor digitado não é válido');
          resultadoMensagemElement.classList.remove('button-green');  
          resultadoMensagemElement.classList.remove('button-red');
          resultadoMensagemElement.innerHTML = '';
          return;

      } else if (valor == 10) {   
          alert('O valor digitado é igual a 10');
          resultadoMensagemElement.classList.remove('button-green');  
          resultadoMensagemElement.classList.remove('button-red');
          resultadoMensagemElement.innerHTML = '';
          return; 
        
      }
       else if (valor > 10) {   
          resultadoMensagemElement.classList.remove('button-red');  
          resultadoMensagemElement.classList.add('button-green');  
          resultadoMensagemElement.innerHTML = 'O valor  ' + valor + '  é maior que 10!'; 
          
      } else { 
          resultadoMensagemElement.classList.remove('button-green');  
          resultadoMensagemElement.classList.add('button-red');  
          resultadoMensagemElement.innerHTML = 'O valor ' + valor + ' é menor que 10!';  
          
      }
  });