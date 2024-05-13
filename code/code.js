$(document).on('ready',function(){
var randomNumber = Math.floor(Math.random()*4);
var audios = {
    audio1 : new Audio("../sound/ElevenLabs_2024-05-12T01_57_12_Brian_pre_s50_sb75_se0_b_m2.mp3"),
    audio2 : new Audio("../sound/ElevenLabs_2024-05-12T02_01_48_Brian_pre_s50_sb75_t2.mp3"),
    audio3 : new Audio("../sound/ElevenLabs_2024-05-12T05_07_00_Brian_pre_s50_sb75_t2.mp3"),
    audio4 : new Audio("../sound/Not Google.mp3"),
    audio5 : new Audio("../sound/ElevenLabs_2024-05-12T05_21_07_Brian_pre_s50_sb75_t2.mp3")
}
function AudiosVolume(){
$('.volumechange').on('change',function(){
    var Volumes = $('.volumechange').val();
    audios.audio1.volume= Volumes;
    audios.audio2.volume= Volumes;
    audios.audio3.volume= Volumes;
    audios.audio4.volume= Volumes;
    audios.audio5.volume= Volumes;
    console.log(Volumes);
});
};
audios.audio2.play();
AudiosVolume(); 
$('.search-Bar').mouseover(function(){
    var searchBarLeft = $('.search-Bar').offset().left;
    var windowSize = $(window).width();
    $('.search-Bar').css('left',`${windowSize}px`);
    audios.audio1.play();
    audios.audio2.pause();
    AudiosVolume();
    if ((searchBarLeft + windowSize) >= windowSize){
        ConteinerDown();
        var timing = 10
        var timer = setInterval(function(){
                if (timing != 0){
                    timing-= 1;
                    $('.timer-display').html(timing);
                }else{
                    clearInterval();
                    delayTime();
                    showKey();
                    DeleteScroll()
                    showMusicandCode()
                    audios.audio3.play();
                    AudiosVolume();
                }
        },1000);
        buttonClicked(timer);
    };
}); 
function buttonClicked(timer){
    $('.div-key').click(function(e){
        var name = this.innerHTML;
        if(name == randomNumber){
            clearInterval(timer);
            answeredCorrect();
            showKey();
            showMusicandCode()
            audios.audio5.play();
            AudiosVolume();
        }else{
            answeredIncorrect()
            clearInterval(timer);
            showKey();
            DeleteScroll();
            showMusicandCode()
            audios.audio3.play();
            AudiosVolume();
        }
    });
}
function answeredCorrect(){
    delayTime();
}
function answeredIncorrect(){
    delayTime();
}
function ConteinerUp(){
    $('.lose-cursor-timer-conteiner').css('top','-135%');
}
function ConteinerDown(){
    $('.lose-cursor-timer-conteiner').css('top','25%');
}
function showKey(){
    var displayIt = $('.div-key')[randomNumber].innerHTML="🔑";
    console.log(displayIt);
}
function delayTime(){
    setTimeout(function(){
        ConteinerUp();
    },1000);
}
function DeleteScroll(){
    $('body').css("cursor","none");
    $('a').css("cursor","none");
    $('p').css("cursor","none");
    $('hr').css("cursor","none");
    $('svg').css("cursor","none");
    $('button').css("cursor","none");
}
function undelelteScroll(){
    $('body').css("cursor","pointer");
    $('a').css("cursor","pointer");
    $('p').css("cursor","pointer");
    $('hr').css("cursor","pointer");
    $('svg').css("cursor","pointer");
    $('button').css("cursor","pointer");
}
$(document).keydown(function(e){
    if(e.key === "A"){
        undelelteScroll();
    }
});
$('.music-link').click(function(){
    audios.audio4.play();
    AudiosVolume();
});
$('.code-link').click(function(){

});
function showMusicandCode(){
    $('.code-link').removeClass('hide');
    $('.music-link').removeClass('hide');
};
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
})
});
