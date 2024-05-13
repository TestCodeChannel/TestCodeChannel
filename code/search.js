$('.search-Bar').on('submit',function(e){
    e.preventDefault();
    var goTo = $('.search-bar-user-input').val();
    var decodeit = encodeURI(`https://www.bing.com/search?q=${goTo}`);
    location.href = decodeit;
});
alert('congrats!! You have completed all the challenges!! You now can search what you want');