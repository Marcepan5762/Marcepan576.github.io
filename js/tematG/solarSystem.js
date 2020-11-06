//load elements
const sun = document.querySelector('#sun');
const mercury = document.querySelector('#mercury');
const venus = document.querySelector('#venus');
const earth = document.querySelector('#earth');
const mars = document.querySelector('#mars');
const jupiter = document.querySelector('#jupiter');
const saturn = document.querySelector('#saturn');
const mSun = document.querySelector('#megaSun');
const mMercury = document.querySelector('#megaMercury');
const mVenus = document.querySelector('#megaVenus');
const mEarth = document.querySelector('#megaEarth');
const mMars = document.querySelector('#megaMars');
const mJupiter = document.querySelector('#megaJupiter');
const mSaturn = document.querySelector('#megaSaturn');

const divToLoad = document.querySelector('.outputHoverBlock');

let textToLoad = 'super';

//functions

function miniDivTrue() {

    divToLoad.style.display = "flex";

    divToLoad.innerHTML = textToLoad;
    
};


function miniDivFalse() {

divToLoad.style.display = "none";

};

//mini div open
sun.addEventListener("mouseover", e => {                                                            

    divToLoad.style.display = "flex";
    divToLoad.innerHTML = "Słońce - Kliknij na gwiazde by dowiedzić się więcej";
    divToLoad.style.left = e.pageX + "px";
    divToLoad.style.top = e.pageY + "px";

});

sun.addEventListener("mouseout", miniDivFalse);



mercury.addEventListener("mouseover", e => {

    divToLoad.style.display = "flex";
    divToLoad.innerHTML = "Merkury - Kliknij na planete by dowiedzić się więcej";
    divToLoad.style.left = e.pageX + "px";
    divToLoad.style.top = e.pageY + "px";

});

mercury.addEventListener("mouseout", miniDivFalse);



venus.addEventListener("mouseover", e => {

    divToLoad.style.display = "flex";
    divToLoad.innerHTML = "Wenus - Kliknij na planete by dowiedzić się więcej";
    divToLoad.style.left = e.pageX + "px";
    divToLoad.style.top = e.pageY + "px";

});

venus.addEventListener("mouseout", miniDivFalse);


earth.addEventListener("mouseover", e => {

    divToLoad.style.display = "flex";
    divToLoad.innerHTML = "Ziemia - Kliknij na planete by dowiedzić się więcej";
    divToLoad.style.left = e.pageX + "px";
    divToLoad.style.top = e.pageY + "px";

});

earth.addEventListener("mouseout", miniDivFalse);



mars.addEventListener("mouseover", e => {

    divToLoad.style.display = "flex";
    divToLoad.innerHTML = "Mars - Kliknij na planete by dowiedzić się więcej";
    divToLoad.style.left = e.pageX + "px";
    divToLoad.style.top = e.pageY + "px";

});

mars.addEventListener("mouseout", miniDivFalse);


jupiter.addEventListener("mouseover", e => {

    divToLoad.style.display = "flex";
    divToLoad.innerHTML = "Jowisz - Kliknij na planete by dowiedzić się więcej";
    divToLoad.style.left = e.pageX + "px";
    divToLoad.style.top = e.pageY + "px";

});

jupiter.addEventListener("mouseout", miniDivFalse);

saturn.addEventListener("mouseover", e => {

    divToLoad.style.display = "flex";
    divToLoad.innerHTML = "Saturn - Kliknij na planete by dowiedzić się więcej";
    divToLoad.style.left = e.pageX + "px";
    divToLoad.style.top = e.pageY + "px";

});

saturn.addEventListener("mouseout", miniDivFalse);

sun.addEventListener("click", e => {

    mSun.style.display = "flex"; 
    mMercury.style.display = "none"; 
    mVenus.style.display = "none"; 
    mEarth.style.display = "none"; 
    mMars.style.display = "none"; 
    mJupiter.style.display = "none"; 
    mSaturn.style.display = "none"; 
    

});

mercury.addEventListener("click", e => {

    
    mSun.style.display = "none"; 
    mMercury.style.display = "flex"; 
    mVenus.style.display = "none"; 
    mEarth.style.display = "none"; 
    mMars.style.display = "none"; 
    mJupiter.style.display = "none"; 
    mSaturn.style.display = "none"; 
    

});

venus.addEventListener("click", e => {

    mSun.style.display = "none"; 
    mMercury.style.display = "none"; 
    mVenus.style.display = "flex"; 
    mEarth.style.display = "none"; 
    mMars.style.display = "none"; 
    mJupiter.style.display = "none"; 
    mSaturn.style.display = "none"; 

});

earth.addEventListener("click", e => {

    mSun.style.display = "none"; 
    mMercury.style.display = "none"; 
    mVenus.style.display = "none"; 
    mEarth.style.display = "flex"; 
    mMars.style.display = "none"; 
    mJupiter.style.display = "none"; 
    mSaturn.style.display = "none"; 


});

mars.addEventListener("click", e => {

    mSun.style.display = "none"; 
    mMercury.style.display = "none"; 
    mVenus.style.display = "none"; 
    mEarth.style.display = "none"; 
    mMars.style.display = "flex"; 
    mJupiter.style.display = "none"; 
    mSaturn.style.display = "none"; 


});

jupiter.addEventListener("click", e => {

    mSun.style.display = "none"; 
    mMercury.style.display = "none"; 
    mVenus.style.display = "none"; 
    mEarth.style.display = "none"; 
    mMars.style.display = "none"; 
    mJupiter.style.display = "flex"; 
    mSaturn.style.display = "none"; 


});

saturn.addEventListener("click", e => {

    mSun.style.display = "none"; 
    mMercury.style.display = "none"; 
    mVenus.style.display = "none"; 
    mEarth.style.display = "none"; 
    mMars.style.display = "none"; 
    mJupiter.style.display = "none"; 
    mSaturn.style.display = "flex"; 


});











 






