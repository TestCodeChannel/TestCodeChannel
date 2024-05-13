$('.code-conteirner-input').on('submit',function(e){
    e.preventDefault();
    var inputUser= $('.user-code-input').val();
    if (inputUser == 2024){
        $('.answer-correct').toggle('hide')
        $('.answer-incorrect').addClass('hide');
        setTimeout(function(){
            location.href = "search.html";
        },2000);
    }else{
        $('.answer-correct').addClass('hide');
        $('.answer-incorrect').toggle('hide');
    }
});
