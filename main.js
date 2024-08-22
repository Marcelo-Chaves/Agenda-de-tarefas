$(document).ready(function(){
    $('#list').on('submit', function(e) {
        e.preventDefault();

        const taskName = $('#list-input').val();
        if (taskName.trim() !== '') {
            const newTask = $('<li></li>').text(taskName);
            $('#task-list').append(newTask);
            $('#list-input').val(''); // Limpa o campo de entrada
        }
    });

    $('#task-list').on('click', 'li', function() {
        $(this).toggleClass('completed'); // Alterna a classe para 'completed'
    });
});
