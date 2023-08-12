const resultado = $('#resultadoMensagem')
$('#checkButton').click(() => {
    var inputValue = $('#numeroInput').val()
    if (inputValue == '') {
        alert('O valor digitado não é um número válido!');
        resultado.removeClass('button-red')
        $('#resultadoMensagem').removeClass('button-green')
        $('#resultadoMensagem').html('')
    } else if (inputValue > 10) {
        $('#resultadoMensagem').addClass('button-green')
        $('#resultadoMensagem').removeClass('button-red')
        $('#resultadoMensagem').html('O valor  ' + inputValue + '  é maior que 10!')
    } else {
        $('#resultadoMensagem').removeClass('button-green')
        $('#resultadoMensagem').addClass('button-red')
        $('#resultadoMensagem').html('O valor  ' + inputValue + '  é menor que 10!')
    }
})