$(document).ready(function(){
    

    let sectionsPos = new Array;
    var sectionsAmount = $('section');
    let navItem = new Array;
    let navItemAmount = $('.menu ul li');
    let sectionHeight = new Array();
    let headerHeight = $('header').height();

    setData();
    setActiveNavLink();


    function setData(){
            for(i=0; i<sectionsAmount.length; i++)// wprowadza do tablicy pozycję kolejnych sekcji względem początku dokumentu
            {
                sectionsPos.push($('section').eq(i).offset().top);
            }
            for(j=0; j<navItemAmount.length; j++)//wprowadza do tablicy kolejne pozycji navigacji
            {
                navItem.push($('.menu ul li').eq(j));
            }
            for(k=0; k <sectionsAmount.length; k++) //wprowadza do tablicy wysokości kolejnych sekcji
            {
                sectionHeight.push($('section').eq(k).height());
            };
        };

    function setActiveNavLink(){
        for (i=0; i< sectionsAmount.length; i++)
        {
            if(($(window).scrollTop() >= sectionsPos[i] - headerHeight) && ($(window).scrollTop() < sectionsPos[i]+sectionHeight[i] - headerHeight))
            {
                navItem[i].addClass('active');
            }
            else
            {
                if(navItem[i].hasClass("active"))
                {
                    navItem[i].removeClass('active');
                }
    
            }
        }
    }
    $(window).on('scroll', setActiveNavLink );
});