$(document).ready(function(){

    $('.izbaciError').blur(izlazakIzPolja);
    $('#sendDugme').click(provera);  
    $('#datumDolaska').keyup(crtice);

});

function izlazakIzPolja(){
    var imePrezime = document.getElementById('polje1').value;
    var mail = document.getElementById('polje2').value;
    var datum = document.getElementById('datumDolaska').value;
    var poruka = document.getElementById('poruka').value;
    var imePrezimePrikaziGresku = document.getElementById('fullnameError');
    var mailPrikaziGresku = document.getElementById('mailError');
    var datumPrikaziGresku = document.getElementById('dateComingError');
    var porukaPrikaziGresku = document.getElementById('porukaError');

    // /^$/

    var regExpImePrezime = /^[A-Z][a-z]{1,20}\s[A-Z][a-z]{1,20}(\s[A-Z][a-z]{1,20}){0,2}$/
    var regExpMail = /^[a-z\.\d\-]+\@[a-z]+(\.[a-z]{2,15}){1,2}$/
    var regExpDatum = /^2020\-(0[1-9]|1[012])\-(0[1-9]|[12][\d]|3[01])$/
    var regExpPoruka = /^[A-z\d\.\,\s\-]+$/

    function prikaziGresku(vrednost, regularniIzraz, error){

            if(!regularniIzraz.test(vrednost)){
                error.style.visibility = 'visible';
                document.getElementById('poslataPoruka').style.visibility = 'hidden';
            }
            else{
                error.style.visibility = 'hidden';
            }
        
    }

    prikaziGresku(imePrezime, regExpImePrezime, imePrezimePrikaziGresku);
    prikaziGresku(mail, regExpMail, mailPrikaziGresku);
    prikaziGresku(datum, regExpDatum, datumPrikaziGresku);
    prikaziGresku(poruka, regExpPoruka, porukaPrikaziGresku);


}


function provera(e){
    e.preventDefault();
    var provere = true;

    var imePrezime = document.getElementById('polje1').value;
    var mail = document.getElementById('polje2').value;
    var datum = document.getElementById('datumDolaska').value;
    var poruka = document.getElementById('poruka').value;
    var imePrezimePrikaziGresku = document.getElementById('fullnameError');
    var mailPrikaziGresku = document.getElementById('mailError');
    var datumPrikaziGresku = document.getElementById('dateComingError');
    var porukaPrikaziGresku = document.getElementById('porukaError');

    var regExpImePrezime = /^[A-Z][a-z]{1,20}\s[A-Z][a-z]{1,20}(\s[A-Z][a-z]{1,20}){0,2}$/
    var regExpMail = /^[a-z\.\d\-]+\@[a-z]+(\.[a-z]{2,15}){1,2}$/
    var regExpDatum = /^2020\-(0[1-9]|1[012])\-(0[1-9]|[12][\d]|3[01])$/
    var regExpPoruka = /^[A-z\d\.\,\s\-]+$/

    function menjajProvere(polje, regularni, error){
        if(!regularni.test(polje)){
            error.style.visibility = 'visible';
            provere = false;
        }

        else{
            error.style.visibility = 'hidden';
        }
    }

    menjajProvere(imePrezime, regExpImePrezime, imePrezimePrikaziGresku);
    menjajProvere(mail, regExpMail, mailPrikaziGresku);
    menjajProvere(datum, regExpDatum, datumPrikaziGresku);
    menjajProvere(poruka, regExpPoruka, porukaPrikaziGresku);

    var zone = document.getElementsByName('zona');

    var novaProvera = false;

    for(var i=0;i<zone.length;i++){
        if(zone[i].checked){
            novaProvera = true;
        }
    }

    if(novaProvera == false){
        document.getElementById('zoneError').style.visibility = 'visible';
        provere = false;
    }

    else{
        document.getElementById('zoneError').style.visibility = 'hidden';
    }

    console.log(provere)

    if(provere){
        document.getElementById('poslataPoruka').style.visibility = 'visible';
        document.getElementById('zoneError').style.visibility = 'hidden';
    }

    else{
        document.getElementById('poslataPoruka').style.visibility = 'hidden';
    }
    
}


function crtice(){
   var dopuna = document.getElementById('datumDolaska').value;
   console.log(dopuna)
   if(dopuna.length == 4 || dopuna.length == 7){
        dopuna += '-';
   }

   document.getElementById('datumDolaska').value = dopuna;

   console.log(dopuna)
}

