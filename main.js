$(document).ready(function() {
    // Quando o formulário for enviado
    $('.form-tarefa').submit(function(event) {
        event.preventDefault(); // Evita o comportamento padrão do formulário

        // Pega o valor do campo de entrada
        const novaTarefa = $('#novaTarefa').val();

        // Adiciona um novo item à lista
        $('.lista-tarefa ul').append('<li>' + novaTarefa + '</li>');

        // Limpa o campo de entrada
        $('#novaTarefa').val('');
    });

    // Quando um item da lista for clicado
    $('.lista-tarefa ul').on('click', 'li', function() {
        $(this).toggleClass('feito'); // Adiciona ou remove a classe 'feito'
    });
});
