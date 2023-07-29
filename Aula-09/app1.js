const buttonElement = document.getElementById('checkButton');

buttonElement.addEventListener('click', function () {
    const numero = parseInt(document.getElementById('numeroInput').value);
    if (numero <= 10) {
        buttonElement.classList.remove('button-green');
        buttonElement.classList.add('button-red');
        alert('O número é menor ou igual a 10')
    } else {
        buttonElement.classList.remove('button-red');
        buttonElement.classList.add('button-green');
        alert('O número é maior que 10');
    }
    
});


