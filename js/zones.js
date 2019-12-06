$(document).ready(function(){
    $('.prviPredjen').hover(function(){
        $('.slide1').css('transform', 'translateX(0px)');
    }, function(){
        $('.slide1').css('transform', 'translateX(-300px)');
    });

    $('.drugiPredjen').hover(function(){
        $('.slide2').css('transform', 'translateX(0px)');
    }, function(){
        $('.slide2').css('transform', 'translateX(300px)');
    });

    $('.treciPredjen').hover(function(){
        $('.slide3').css('transform', 'translateX(0px)');
    }, function(){
        $('.slide3').css('transform', 'translateX(-300px)');
    });

    $('.cetvrtiPredjen').hover(function(){
        $('.slide4').css('transform', 'translateX(0px)');
    }, function(){
        $('.slide4').css('transform', 'translateX(300px)');
    });
});



var zikZak0 = ['zone1.jpg','$35.95','FOR ALL DAY PLAY','Negotiate your way through a myriad of trees, undergrowth and streams to retrieve the flags well protected within a hotly defended castle complex.','reservations.html', 'THE CASTLE STORM', 'prviPredjen','slide1']

var zikZak1 = ['zone2.jpg','$18.95','FOR ALL DAY PLAY','Relying on woodland cover, gorges and concealed paths, players hunt the opposition, watch their backs and search for the flags at the same time.','reservations.html', 'PREDATOR ATACK', 'drugiPredjen','slide2']

var zikZak2 = ['zone3.jpg','$24.95','FOR ALL DAY PLAY','The attacking team start from the base of the hill with the objective of placing the bomb under the defended tower. Attackers can approach from the north.','reservations.html', 'BOMB THE TOWER', 'treciPredjen','slide3']

var zikZak3 = ['zone4.jpg','$30.95','FOR ALL DAY PLAY','Negotiate your way through a myriad of trees, undergrowth and streams to retrieve the flags well protected within a hotly defended castle complex.This zone is not operational!','reservations.html', 'BUNKER BUSTER', 'cetvrtiPredjen','slide4']


function zikZak(niz){
    var puni = document.querySelector('.zik1');
    
        puni.innerHTML += `<div class='row zikRed'>
        <div class='col-lg-12 relativan ${niz[6]}'>
        <div class='slikaKolone'><img src='img/${niz[0]}' class='kolonaSlika img-fluid' alt='Paintball'/></div>
        <div class='tekstKolone'>
        <h2 class='crveni'>${niz[1]}</h2>
        <h3 class='beli'>${niz[2]}</h3>
        <p class='pKolone'>${niz[3]}</p>
        <a href="${niz[4]}" class='anchorKolone'>BOOK NOW</a>
        </div>
        <div class='sliding ${niz[7]}'>
        <a href='aboutUs.html' class='slidingTekst'>${niz[5]}</a>
        </div>
        </div>
        </div>`;


        
}

function zakZik(niz){
    var puni = document.querySelector('.zik1');
    
        puni.innerHTML += `<div class='row zikRed'>
        <div class='col-lg-12 relativanReverese ${niz[6]}'>
        <div class='tekstKolone'>
        <h2 class='crveni'>${niz[1]}</h2>
        <h3 class='beli'>${niz[2]}</h3>
        <p class='pKolone'>${niz[3]}</p>
        <a href="${niz[4]}" class='anchorKolone'>BOOK NOW</a>
        </div>
        <div class='slikaKolone'><img src='img/${niz[0]}' class='kolonaSlika img-fluid' alt='Paintball'/></div>
        <div class='slidingReverse ${niz[7]}'>
        <a href='aboutUs.html' class='slidingTekst'>${niz[5]}</a>
        </div>
        </div>
        </div>`;
}
zikZak(zikZak0);
zakZik(zikZak1);
zikZak(zikZak2);
zakZik(zikZak3);