var sumadobrych = 0;
var sumaZlych = 0;
function dobrzeKolor() {

   $('#srodokowaCzescKontenera').css('background-color','green');
   setTimeout(10000);
   $('#srodokowaCzescKontenera').css('background-color','white');
};
function zleKolor() {

   $('#srodokowaCzescKontenera').css('background-color','red');
   setTimeout(5000);
   location.reload();

};

var fail = document.getElementsByClassName("czerwono");

if(fail.clicked){
   sumaZlych = 0 + 1;
}

$('#start').click(function()
{
   $('#start').css('display','none');
   $('#quizowo1').show();
   dobrzeKolor();
});
$('#correct1').click(function()
{
    sumadobrych++;
   $('#quizowo2').show();
   dobrzeKolor();
});
$('#correct2').click(function()
{
   $('#quizowo3').show();
    sumadobrych++;
    dobrzeKolor();
});
$('#correct3').click(function()
{
   $('#quizowo4').show();
    sumadobrych++;
    dobrzeKolor();
});
$('#correct4').click(function()
{
   $('#quizowo5').show();
    sumadobrych++;
    dobrzeKolor();
});
$('#correct5').click(function()
{
   $('#quizowo6').show();
    sumadobrych++;
    dobrzeKolor();
});
$('#correct6').click(function()
{
   $('#quizowo7').show();
    sumadobrych++;
    dobrzeKolor();
});
$('#correct7').click(function()
{
   $('#quizowo8').show();
    sumadobrych++;
    dobrzeKolor();
});
$('#correct8').click(function()
{
   $('#quizowo9').show();
    sumadobrych++;
    dobrzeKolor();
});
$('#correct9').click(function()
{
   $('#quizowo10').show();
    sumadobrych++;
    dobrzeKolor();
});
$('#correct10').click(function()
{
   $('#quizowo11').show();
    sumadobrych++;
    dobrzeKolor();
});
$('#correct11').click(function()
{
   $('#quizowo12').show();
    sumadobrych++;
    dobrzeKolor();
});
$('#correct12').click(function()
{
    sumadobrych++;
   $('#wynik').show();
   dobrzeKolor();
});
$('.czerwono').click(function()
{
    
   zleKolor();
});
