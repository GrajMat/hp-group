$(document).ready(function(){
    const pause = 5000;
    const fadeSpeed = 1300;
    let flag =1;
    var t;

    function fadeInSlider(){
        t = setTimeout(function(){
            $('.slide3').animate({
                opacity: 0,
            },fadeSpeed);
            $('.slide2').animate({
                opacity: 1,
            },1);

            t = setTimeout(function(){
                $('.slide2').animate({
                    opacity: 0,
                },fadeSpeed);
                $('.slide1').animate({
                    opacity: 1,
                },1);
                t =  setTimeout(function(){
                    $('.slide1').animate({
                        opacity: 0,
                    },fadeSpeed);
                    $('.slide3').animate({
                        opacity: 1,
                    },fadeSpeed);
                    if(flag==1){
                        fadeInSlider();
                    }
                },pause);
            },pause);
        },pause);
    };
    fadeInSlider();

    function handleVisibilityChange() {    //zatrzymywanie i uruchamianie podczas minimalizacji okna przeglądarki oraz zmiany karty w przeglądarce
        if (document.hidden) 
        {
            clearTimeout(t);
            flag=0;
        } 
        else  
        { 
            fadeInSlider();
            flag=1;
        }
    }; //koniec funkcji handleVisibilityChange
        
    document.addEventListener("visibilitychange", handleVisibilityChange, false);



     

});