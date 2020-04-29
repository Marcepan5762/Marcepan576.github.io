let obiekt = document.querySelector('.obiekt');
let moveBy = 35;

window.addEventListener('load', () =>{ 
    obiekt.style.position = 'absolute';
    obiekt.style.left = 0;
});

window.addEventListener('keyup', (e) =>{ 
   switch (e.key) {
        case 'ArrowLeft':
            obiekt.style.left = parseInt(obiekt.style.left) - moveBy + 'px';
            break;
        case 'ArrowRight':
            obiekt.style.left = parseInt(obiekt.style.left) + moveBy + 'px';
             break;    
            

   }
});

