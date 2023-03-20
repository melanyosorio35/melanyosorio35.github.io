//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=360; timeIni=360; timeBon=0;
var successes=0; successesMax=0; attempts=0; attemptsMax=2;
var score=0; scoreMax=2; scoreInc=2; scoreDec=-1
var typeGame=0;
var tiTime=false;
var tiTimeType=0;
var tiButtonTime=true;
var textButtonTime="Comenzar";
var tiSuccesses=true;
var tiAttempts=true;
var tiScore=true;
var startTime;
var colorBack="#8000FF"; colorButton="#808080"; colorText="#400000"; colorSele="#C0C0C0";
var goURLNext=false; goURLRepeat=false;tiAval=false;
var scoOk=0; scoWrong=0; scoOkDo=0; scoWrongDo=0; scoMessage=""; scoPtos=10;
var fMenssage="Verdana, Geneva, sans-serif";
var fActi="Verdana, Geneva, sans-serif";
var fEnun="'Times New Roman', Times, serif";
var timeOnMessage=5; messageOk="Lo hizo bien, felicidades! "; messageTime=""; messageError="Piense mas, esta incorrecto"; messageErrorG="Piense mas, esta incorrecto"; messageAttempts="Esos errores!! intenta no equivocarte"; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var wordsGame="TGV5ZW5kYQ=="; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var joinPar=[];
var c=["#008080","#000080","#0000FF","#0080C0","#8080FF","#3438E0","#42A0FF"];
var x=["73","142","194","192","111","138","54"];
var y=["21","65","114","28","122","181","119"];
var t=["4+4","3+3","1+1","2+2","5+5","6+6","7+7"];
var cM=["#008080","#000080","#0000FF","#0080C0","#8080FF","#3438E0","#42A0FF"];
var tM=["4+4","3+3","1+1","2+2","5+5","6+6","7+7"];
var indexColor=0;
