$(document).ready(function() {

    prikaziNavigaciju();

    $(window).scroll(function(){

        const motaj = $(this).scrollTop();

        if(motaj > 70) {

            $('.logoPic').addClass('logoPic1');

        } else {
            
            $('.logoPic').removeClass('logoPic1');

        }

    })

    $('.backTop').click(function(){
        $('html').animate({scrollTop: 0}, 250);
    })

    $('.pojaviSide').click(function(){
        $('.sideNavigation').toggleClass('side1')
    })


});
function prikaziNavigaciju() {

    var linkovi =  [['Home','index.html'], ['Zones', 'zones.html'], ['About us', 'aboutUs.html'], ['Reservations','reservations.html']];

    var lista = '<ul>';

    var menu = document.getElementsByClassName('menu');

    var logo = document.getElementsByClassName('logo');

    for(var i=0;i<linkovi.length;i++){

        lista += `<li><a href="${linkovi[i][1]}">${linkovi[i][0]}</a></li>`;

    }

    lista += '</ul>';

    for(var i=0;i<menu.length;i++){
        menu[i].innerHTML += lista;
    }

    for(var i=0;i<logo.length;i++){
        logo[i].innerHTML += `<a href="index.html"><img src="img/logo.png" class="logoPic img-fluid" alt="Paintball Club Logo"/></a>`;
    }


}


