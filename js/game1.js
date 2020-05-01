let obiekt = document.querySelector('#obiekt');
let moveBy = 35;
let obiektOdp = document.querySelector('.obiektOdp');
var sec = 0, time = 50;
var x_pos = 600, y_pos = 400;

var cord = document.getElementsByClassName('.obiekt');
obiekt.style. position = "absolute"
obiekt.style.left = x_pos+'px';
obiekt.style.top = y_pos+'px';


window.addEventListener('load', () =>{ 
    obiekt.style.position = 'absolute';
    obiekt.style.left = 700;
    obiekt.style.top = 400;
});

window.addEventListener('keyup', (e) =>{ 
   switch (e.key) {
        case 'ArrowLeft':
            obiekt.style.left = parseInt(obiekt.style.left) - moveBy + 'px';
            break;
        case 'ArrowRight':
            obiekt.style.left = parseInt(obiekt.style.left) + moveBy + 'px';
             break; 
        case 'ArrowUp':
            obiekt.style.top = parseInt(obiekt.style.top) - moveBy + 'px';
             break;
        case 'ArrowDown':
            obiekt.style.top = parseInt(obiekt.style.top) + moveBy + 'px';
             break;       

            

   }
});

var cord = document.getElementById('start');
cord.style.position = "absolute"
cord.style.left = x_pos+'px';
cord.style.top = y_pos+'px';


function startGame() {

    document.getElementById("start").style.display = "none";

    var timer=setInterval(function(){
        document.getElementById("timer").innerHTML = time + " POZOSTAŁY CZAS";
        time=time-1;
    if(time == 0) {
            document.getElementById("timer").style.display = "none";
    }
}   ,1000);

};



