$(document).ready(function() {

    document.querySelector('.bgChange').style.backgroundImage = `url('img/bgPicture1.jpg')`;

    document.querySelector('.h1PaintBall').textContent = 'Welcome to the Paintball Club';

    setInterval(bgSlikaINaslov, 3000);

    blokovi1();

       $('.doleGore').click(function(e){
        $('.goreDole').slideToggle();
        $(this).toggleClass('faTurn1');
    });


});

document.querySelector('.doleGore').addEventListener('click',function(e){
    e.preventDefault();
})

function bgSlikaINaslov(){

    var bgSlike = ['bgPicture1.jpg','bgPicture2.jpg','bgPicture3.jpg'];

    var h1Tag = ['The only Paintball you will ever need', 'Welcome to the Paintball Club', 'Ready to shoot ?'];

    var randBg = Math.floor(Math.random() * bgSlike.length);

    var randH1Tag = Math.floor(Math.random() * h1Tag.length);

    document.querySelector('.bgChange').style.backgroundImage = `url('img/${bgSlike[randBg]}')`;

    document.querySelector('.h1PaintBall').textContent = h1Tag[randH1Tag];
}
function blokovi1(){

    var blokovi1 = [['New map soon', 'bg1Blokovi.jpeg'], ['Our equipment', 'bg2Blokovi.jpeg'], ['Packages', 'bg3Blokovi.jpeg']];

    for(var i=0;i<blokovi1.length;i++){
        document.querySelector('.blokoviTri').innerHTML += `<div class="col-lg-4 blokoviKolona">
        <img src='img/${blokovi1[i][1]}' class='img-fluid slikaBlokovi1' alt='Paintball'/>
        <div class='zatamniBlokovi1'><h3>${blokovi1[i][0]}</h3><a href='#'>Learn More</a></div>
        </div>`;
    }
}
