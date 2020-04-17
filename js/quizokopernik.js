var sumadobrych = 0;
var sumaZlych = 0;

var fail = document.getElementsByClassName("czerwono");

if(fail.clicked){
   sumaZlych = 0 + 1;
}

$('#start').click(function()
{
   $('#start').css('display','none');
   $('#quizowo1').show();
});
$('#correct1').click(function()
{
    sumadobrych =+ 1;
   $('#quizowo2').show();
});
$('#correct2').click(function()
{
   $('#quizowo3').show();
    sumadobrych =+ 1;
});
$('#correct3').click(function()
{
   $('#quizowo4').show();
    sumadobrych =+ 1;
});
$('#correct4').click(function()
{
   $('#quizowo5').show();
    sumadobrych =+ 1;
});
$('#correct5').click(function()
{
   $('#quizowo6').show();
    sumadobrych =+ 1;
});
$('#correct6').click(function()
{
   $('#quizowo7').show();
    sumadobrych =+ 1;
});
$('#correct7').click(function()
{
   $('#quizowo8').show();
    sumadobrych =+ 1;
});
$('#correct8').click(function()
{
   $('#quizowo9').show();
    sumadobrych =+ 1;
});
$('#correct9').click(function()
{
   $('#quizowo10').show();
    sumadobrych =+ 1;
});
$('#correct10').click(function()
{
   $('#quizowo11').show();
    sumadobrych =+ 1;
});
$('#correct11').click(function()
{
   $('#quizowo12').show();
    sumadobrych =+ 1;
});
$('#correct12').click(function()
{
    sumadobrych =+ 1;
   $('#wynik').show();
    var WynikD = document.getElementById("wynik").innerHTML = sumadobrych;
    var WynikZ = document.getElementById("wynikZ").innerHTML = sumaZlych;
});
