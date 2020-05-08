

var x = 0;
function apl2() {

    $('#link1').css('display', 'none');
    $('#link2').show();

};

function apl1() {

    $('#link2').css('display', 'none');
    $('#link1').show();

};

setInterval(function() {

    var i = Math.floor(Math.random() * 2) + 1;

    window['apl' + i]();
    

}, 7000);