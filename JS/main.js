$(document).ready(function () {

    // SCROLL TO TOP
    var scrollTopBtn = $('.scroll-top');

    function showScrollTopBtn() {
        if ($(window).scrollTop() > $(document).height() * 0.2) {
            scrollTopBtn.show();
        }
        else {
            scrollTopBtn.hide();
        }
    }
    showScrollTopBtn();

    //Sticky navbar
    var header = $('header');
    function stickyNavBar() {

        if ($(window).scrollTop() > 100) {
            header.addClass('sticky');
        } else {
            header.removeClass('sticky');
        }
    }



    setTimeout(function () {
        $('.lazy-img').each(function () {
            $(this).attr('src', $(this).data('src'));
            $(this).removeClass('lazy-img');
        });
    }, 500);




    const menuBtn = $('.menu-btn');
    const menu = $('.menu');
    // const banner = $('.banner');
    let menuOpen = false;

    function toggleMenu(element1, /*element2,*/ element3) {

        if (!menuOpen) {

            element1.addClass('opened');
            // element2.addClass('slim-banner');
            element3.addClass('open');

            menuOpen = true;
        }
        else {
            element1.removeClass('opened');
            // element2.removeClass('slim-banner');
            element3.removeClass('open');

            menuOpen = false;
        }
    }//koniec funkcji toggleMenu;


    menuBtn.on('click', function () {
        toggleMenu(menu, /*banner,*/ menuBtn);
    });//koniec funkcji on

    $('.menu ul li a').on('click', function () {
        menu.removeClass('opened');
        // banner.removeClass('slim-banner');
        menuBtn.removeClass('open');
        menuOpen = false;
    });


    // funkcja opóźniająca ładowanie się obrazków
    function lazyLoadOnScroll() {
        $('.lazy-img-scroll').each(function () {
            if ($(this).offset().top < window.innerHeight + window.pageYOffset + 300) {
                $(this).attr('src', $(this).data('src'));
                $(this).removeClass('lazy-img-scroll');
                // $('.lazy-bg').css('background','url("'+ $('.lazy-bg').data('background') +'")');     
            }
        })
    };//koniec funkcji lazyLoad

    if ($(window).scrollTop > 1000) {
        lazyLoadOnScroll();
    }
    //funkcja zniesjzająca wykonanie funckji lazyLoad( do częstotliwości maksymalnej 1/sekundę)
    var eventTimeout;
    var eventThrottler = function () {
        if (!eventTimeout) {
            eventTimeout = setTimeout(function () {
                eventTimeout = null;
                lazyLoadOnScroll();
            }, 1000);
        }
    };//koniec funkcji eventThrottler

    $(window).on('scroll', function () {
        stickyNavBar();
        showScrollTopBtn();
        eventThrottler();
    });




    //REALIZACJE

    //Rozwijanie sekcji realizacje
    $('.hidden-container').hide();
    $('.more').on('click', function () {
        $('.hidden-container').slideDown(500, function () {
            $('.more').hide();
            $('.wrap').show();
        });
    });
    $('.wrap').on('click', function () {
        $('.hidden-container').slideUp(500, function () {
            $('.more').show();
            $('.wrap').hide();
        })
    });



    //otwieranie okien z realizacją
    $('.btn-1').on('click', function () {
        $('.pc-1').fadeIn(300);
    });
    $('.btn-2').on('click', function () {
        $('.pc-2').fadeIn(300);
    });
    $('.btn-3').on('click', function () {
        $('.pc-3').fadeIn(300);
    });
    $('.btn-4').on('click', function () {
        $('.pc-4').fadeIn(300);
    });
    $('.btn-5').on('click', function () {
        $('.pc-5').fadeIn(300);
    });
    $('.btn-6').on('click', function () {
        $('.pc-6').fadeIn(300);
    });
    $('.btn-7').on('click', function () {
        $('.pc-7').fadeIn(300);
    });
    $('.btn-8').on('click', function () {
        $('.pc-8').fadeIn(300);
    });
    $('.btn-9').on('click', function () {
        $('.pc-9').fadeIn(300);
    });
    $('.btn-10').on('click', function () {
        $('.pc-10').fadeIn(300);
    });

    //otwieranie okien z nieruchomością
    $('.btn-101').on('click', function () {
        $('.pc-101').fadeIn(300);
    });
    $('.btn-102').on('click', function () {
        $('.pc-102').fadeIn(300);
    });
    $('.btn-103').on('click', function () {
        $('.pc-103').fadeIn(300);
    });
    $('.btn-104').on('click', function () {
        $('.pc-104').fadeIn(300);
    });
    $('.btn-105').on('click', function () {
        $('.pc-105').fadeIn(300);
    });
    $('.btn-106').on('click', function () {
        $('.pc-106').fadeIn(300);
    });



    //zamykanie okna z realizacją lub neruchomością
    $('.close-btn').on('click', function () {
        $('.portfolio-bg').fadeOut(300);
    });
    $('.back-to-home').on('click', function () {
        $('.portfolio-bg').fadeOut(300, function () {
        });
    });
    $('.portfolio-bg').on('click', function () {
        $('.portfolio-bg').fadeOut(300, function () {
        });
    });




});