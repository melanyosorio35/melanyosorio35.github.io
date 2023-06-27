//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=120; timeIni=120; timeBon=30;
var successes=0; successesMax=0; attempts=0; attemptsMax=3;
var score=0; scoreMax=5; scoreInc=5; scoreDec=0
var typeGame=0;
var tiTime=true;
var tiTimeType=0;
var tiButtonTime=true;
var textButtonTime="Comenzar";
var tiSuccesses=true;
var tiAttempts=true;
var tiScore=true;
var startTime;
var colorBack="#8191DA"; colorButton="#8080FF"; colorText="#000000"; colorSele="#9B9BCE";
var goURLNext=false; goURLRepeat=false;tiAval=false;
var scoOk=0; scoWrong=0; scoOkDo=0; scoWrongDo=0; scoMessage=""; scoPtos=10;
var fMenssage="'Times New Roman', Times, serif";
var fActi="Verdana, Geneva, sans-serif";
var fEnun="'Times New Roman', Times, serif";
var timeOnMessage=5; messageOk="Felicidades!! Ha logrado finalizar"; messageTime="Su tiempo ha finalizado"; messageError=""; messageErrorG=""; messageAttempts="Ha sobrepasado el limite de intentos "; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var wordsGame="TWF0ZW1hdGljYQ=="; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
var a=["0","0","0","0","1","1","1","1",];
var b=["NQ==","MTA=","MzA=","MTU=","MTU=","MjU=","MjA=","MTA=",];
var c=["10","17","41","37","-8","-5","15","-3",];
var d=["NQ==","Nw==","MTE=","MjI=","MjM=","MzA=","NQ==","MTM=",];
var colorSol="#3A00A6";var actualState=[];var iOp1=false;var iOp2=false;var iM=false;var iSol=false;var idiOp1=-1;var idiOp2=-1;var idiM=-1;var idiSol=-1;
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
