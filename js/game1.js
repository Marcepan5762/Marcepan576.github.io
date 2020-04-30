let obiekt = document.querySelector('.obiekt');
let moveBy = 35;
let obiektOdp = document.querySelector('.obiektOdp');
var sec = 0, time =0;
var x_pos = 500, y_pos = 500;

var cord = document.getElementsByClassName('.obiekt');
obiekt.style. position = "absolute"
obiekt.style.left = x_pos+'px';
obiekt.style.top = y_pos+'px';


window.addEventListener('load', () =>{ 
    obiekt.style.position = 'absolute';
    obiekt.style.left = 500;
    obiekt.style.top = 500;
});

window.addEventListener('keyup', (e) =>{ 
   switch (e.key) {
        case 'ArrowLeft':
            obiekt.style.left = parseInt(obiekt.style.left) - moveBy + 'px';
            break;
        case 'ArrowRight':
            obiekt.style.left = parseInt(obiekt.style.left) + moveBy + 'px';
             break; 
        case 'ArrowLeft':
            obiekt.style.left = parseInt(obiekt.style.left) - moveBy + 'px';
             break;
        case 'ArrowRight':
            obiekt.style.left = parseInt(obiekt.style.left) + moveBy + 'px';
             break;       

            

   }
});

for(sec = 50; sec > 0; sec--) { 
    time++;
    setTimeout(1000);
    document.getElementById("timer").innerHTML = time;
};





