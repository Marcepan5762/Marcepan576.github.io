let obiekt = document.querySelector('#obiekt');
let moveBy = 35;
let obiektOdp = document.querySelector('.obiektOdp');
var sec = 0, time = 150;
var backgSoud = document.getElementById('bacgroundSound');
var x_pos = 500, y_pos = 250;
var rand_x, rand_y;
var db, nd;
var traf = 0, blad = 0;
var reakcja = document.getElementsByClassName("odpBlock");
var blad = document.getElementById('bladzo');


var cord = document.getElementsByClassName('.obiekt');
obiekt.style. position = "absolute"
obiekt.style.left = x_pos+'px';
obiekt.style.top = y_pos+'px';



window.addEventListener('load', () =>{ 
    obiekt.style.position = 'absolute';
    obiekt.style.left = 700;
    obiekt.style.top = 400;
});


var cord = document.getElementById('bloczekStartu');
cord.style.position = "absolute"
cord.style.left = x_pos+'px';
cord.style.top = y_pos+'px';


function placeDiv1(rand_x, rand_y) {
    let d = document.getElementById("ODP1");
    d.style.position = "absolute";
    d.style.left = rand_x+'px';
    d.style.top = rand_y+'px';
    document.getElementById("ODP1").setAttribute("class", "odpBlockP");
  };
  function placeDiv2(rand_x, rand_y) {
    let d = document.getElementById("ODP2");
    d.style.position = "absolute";
    d.style.left = rand_x+'px';
    d.style.top = rand_y+'px';
    document.getElementById("ODP2").setAttribute("class", "odpBlockP");
  };
  function placeDiv3(rand_x, rand_y) {
    let d = document.getElementById("ODP3");
    d.style.position = "absolute";
    d.style.left = rand_x+'px';
    d.style.top = rand_y+'px';
    document.getElementById("ODP3").setAttribute("class", "odpBlockP");
  };
  function placeDiv4(rand_x, rand_y) {
    let d = document.getElementById("ODP4");
    d.style.position = "absolute";
    d.style.left = rand_x+'px';
    d.style.top = rand_y+'px';
    document.getElementById("ODP4").setAttribute("class", "odpBlockP");
  };
  function placeDiv5(rand_x, rand_y) {
    let d = document.getElementById("ODP5");
    d.style.position = "absolute";
    d.style.left = rand_x+'px';
    d.style.top = rand_y+'px';
    document.getElementById("ODP5").setAttribute("class", "odpBlockP");
  };
  function placeDiv6(rand_x, rand_y) {
    let d = document.getElementById("ODP6");
    d.style.position = "absolute";
    d.style.left = rand_x+'px';
    d.style.top = rand_y+'px';
    document.getElementById("ODP6").setAttribute("class", "odpBlockP");
  };
  function placeDiv7(rand_x, rand_y) {
    let d = document.getElementById("ODP7");
    d.style.position = "absolute";
    d.style.left = rand_x+'px';
    d.style.top = rand_y+'px';
    document.getElementById("ODP7").setAttribute("class", "odpBlockP");
  };
  function placeDiv8(rand_x, rand_y) {
    let d = document.getElementById("ODP8");
    d.style.position = "absolute";
    d.style.left = rand_x+'px';
    d.style.top = rand_y+'px';
    document.getElementById("ODP8").setAttribute("class", "odpBlockP");
  };
  function placeDiv9(rand_x, rand_y) {
    let d = document.getElementById("ODP9");
    d.style.position = "absolute";
    d.style.left = rand_x+'px';
    d.style.top = rand_y+'px';
    document.getElementById("ODP9").setAttribute("class", "odpBlockP");
  };
  function placeDiv10(rand_x, rand_y) {
    let d = document.getElementById("ODP10");
    d.style.position = "absolute";
    d.style.left = rand_x+'px';
    d.style.top = rand_y+'px';
    document.getElementById("ODP10").setAttribute("class", "odpBlockP");
  };
  function placeDiv11(rand_x, rand_y) {
    let d = document.getElementById("ZLE1");
    d.style.position = "absolute";
    d.style.left = rand_x+'px';
    d.style.top = rand_y+'px';
    document.getElementById("ZLE1").setAttribute("class", "odpBlockP");
  };
  function placeDiv12(rand_x, rand_y) {
    let d = document.getElementById("ZLE2");
    d.style.position = "absolute";
    d.style.left = rand_x+'px';
    d.style.top = rand_y+'px';
    document.getElementById("ZLE2").setAttribute("class", "odpBlockP");
  };
  function placeDiv13(rand_x, rand_y) {
    let d = document.getElementById("ZLE3");
    d.style.position = "absolute";
    d.style.left = rand_x+'px';
    d.style.top = rand_y+'px';
    document.getElementById("ZLE3").setAttribute("class", "odpBlockP");
  };
  function placeDiv14(rand_x, rand_y) {
    let d = document.getElementById("ZLE4");
    d.style.position = "absolute";
    d.style.left = rand_x+'px';
    d.style.top = rand_y+'px';
    document.getElementById("ZLE4").setAttribute("class", "odpBlockP");
  };
  function placeDiv15(rand_x, rand_y) {
    let d = document.getElementById("ZLE5");
    d.style.position = "absolute";
    d.style.left = rand_x+'px';
    d.style.top = rand_y+'px';
    document.getElementById("ZLE5").setAttribute("class", "odpBlockP");
  };
  function placeDiv16(rand_x, rand_y) {
    let d = document.getElementById("ZLE6");
    d.style.position = "absolute";
    d.style.left = rand_x+'px';
    d.style.top = rand_y+'px';
    document.getElementById("ZLE6").setAttribute("class", "odpBlockP");
  };
  function placeDiv17(rand_x, rand_y) {
    let d = document.getElementById("ZLE7");
    d.style.position = "absolute";
    d.style.left = rand_x+'px';
    d.style.top = rand_y+'px';
    document.getElementById("ZLE7").setAttribute("class", "odpBlockP");
  };
  function placeDiv18(rand_x, rand_y) {
    let d = document.getElementById("ZLE8");
    d.style.position = "absolute";
    d.style.left = rand_x+'px';
    d.style.top = rand_y+'px';
    document.getElementById("ZLE8").setAttribute("class", "odpBlockP");
  };
  function placeDiv19(rand_x, rand_y) {
    let d = document.getElementById("ZLE9");
    d.style.position = "absolute";
    d.style.left = rand_x+'px';
    d.style.top = rand_y+'px';
    document.getElementById("ZLE9").setAttribute("class", "odpBlockP");
  };
  function placeDiv20(rand_x, rand_y) {
    let d = document.getElementById("ZLE10");
    d.style.position = "absolute";
    d.style.left = rand_x+'px';
    d.style.top = rand_y+'px';
    document.getElementById("ZLE10").setAttribute("class", "odpBlockP");
  };
  function punkt(db) {

    traf= traf + db;
  };
  if(traf > 10 || traf == 10) {

    document.getElementById("wygrana").setAttribute("id", "trueWin");
    document.getElementById("zagrajPonownie").setAttribute("id", "zagrajPonownieP");
    backgSoud.pause();
};
  function timeCrusher(nd) {
    blad.play();
    time=time-5;
    blad = blad + nd;
    blad.play();
     
  };

  if(blad == 5 || time < 0 || blad > 5) {
    var wynikowo
     document.getElementById('trueFail') = wynikowo + traf;
  
    document.getElementById("przegrana").setAttribute("id", "trueFail"); 
    $('.zagrajPonownie').show();
    backgSoud.pause();
  };
  


function startGame() {

  
    document.getElementById("bloczekStartu").style.display = "none";

    var timer=setInterval(function(){
      backgSoud.play();
        document.getElementById("timer").innerHTML = time + " POZOSTAŁY CZAS";
        time=time-1;
        console.log(traf);
        console.log(blad);
      
    if(time < 0) {
            document.getElementById("timer").style.display = "none";
            document.getElementById("przegrana").setAttribute("id", "trueFail"); 
            $('.zagrajPonownie').show(); 
    };
    if(blad == 5 || time < 0 || blad > 5) {
      document.getElementById('przegrana').setAttribute("id", "trueFail"); 
      $('.zagrajPonownie').show();
    };
    if(traf > 10 || traf == 10) {

      document.getElementById("wygrana").setAttribute("id", "trueWin");
      document.getElementById("zagrajPonownie").setAttribute("id", "zagrajPonownieP");
      backgSoud.pause();
    };
}   ,1000);
    
var gra=setInterval(function(){
    var i;
    
    rand_x = Math.floor(Math.random() * 700) + 1;
    rand_y = Math.random() * (1200 - 600) + 1;
    
    i = Math.floor(Math.random() * 20) + 1;
    window['placeDiv' + i](rand_x, rand_y);
    gra+1;
},1500);


var wynika = traf;
document.getElementById("traf").innerHTML = wynika;


};
function instrukcja() {
 
    document.getElementById("start").setAttribute("id", "startB");
    document.getElementById("instrukcjaText").setAttribute("id", "text"); 
    document.getElementById("bloczekStartu").setAttribute("id", "bloczekInstrukcja");
    document.getElementById("instrukcja").setAttribute("id", "instrukcjaB");
    document.getElementById("powrotB").setAttribute("id", "powrot");

};
document.getElementById("powrot").setAttribute("id", "powrotB");
function powrot() {

    document.getElementById("startB").setAttribute("id", "start");
    document.getElementById("text").setAttribute("id", "instrukcjaText"); 
    document.getElementById("bloczekInstrukcja").setAttribute("id", "bloczekStartu");
    document.getElementById("instrukcjaB").setAttribute("id", "instrukcja");
    document.getElementById("powrot").setAttribute("id", "powrotB");

};
function gameover() {

location.reload()

};



