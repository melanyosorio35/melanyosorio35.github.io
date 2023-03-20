var timeAct=360; timeIni=360; timeBon=0;
var successes=0; successesMax=5; attempts=0; attemptsMax=2;
var score=0; scoreMax=10; scoreInc=2; scoreDec=-1
var typeGame=0;
var tiTime=false;
var tiTimeType=0;
var tiButtonTime=true;
var textButtonTime="Comenzar";
var tiSuccesses=false;
var tiAttempts=false;
var tiScore=false;
var startTime;
var colorBack="#8000FF"; colorButton="#808080"; colorText="#004080"; colorSele="#C0C0C0";
var goURLNext=false; goURLRepeat=false;tiAval=false;
var scoOk=0; scoWrong=0; scoOkDo=0; scoWrongDo=0; scoMessage=""; scoPtos=10;
var fMenssage="'Times New Roman', Times, serif";
var fActi="Verdana, Geneva, sans-serif";
var fEnun="'Times New Roman', Times, serif";
var timeOnMessage=4; messageOk="Vamos!! Lo ha logrado!! "; messageTime=""; messageError="No esta correcto, piensa mas! "; messageErrorG="No esta correcto, piensa mas! "; messageAttempts="Muchos errones no? "; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError="#000000"; borderAttempts="#FF0000";
var wordsGame="RnJhc2VzSW5mbw=="; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var words=["UXXDqSBtYXJhdmlsbG9zbyBlcyBxdWUgbmFkaWUgdGVuZ2EgcXVlIGVzcGVyYXIgbmkgdW4gc2VndW5kbyBwYXJhIGVtcGV6YXIgYSBtZWpvcmFyIGVsIG11bmRv","TXVjaG9zIHBpZW5zYW4gZW4gY2FtYmlhciBlbCBtdW5kbywgcGVybyBjYXNpIG5hZGllIHBpZW5zYSBlbiBjYW1iaWFyc2UgYSBzw60gbWlzbW8=","U8OpIHTDuiBtaXNtby4gVG9kb3MgbG9zIGRlbcOhcyB5YSBlc3TDoW4gb2N1cGFkb3M=","Tm8gZGVqZXMgcXVlIHR1IHBhc2FkbyBvY3VwZSB0b2RvIHR1IHByZXNlbnRl","RWwgcXVlIGNyZWUgcXVlIGxvIHNhYmUgdG9kbyBlcyBpbmNhcGF6IGRlIGFwcmVuZGVy"];imaW=["","","","",""];queW=["Frase de Ana Frank","Frase de Leon Tolstoi","Frase de Oscar Wild","Frase de Will Rogers","Epicteto"];altW=["","","","",""];c=[92,82,46,45,51];
var auW=["","","","",""];
var actMaxWidth="600"; actMaxHeight="300";indexG=0;profG=0;dirMedia="FrasesInfo_resources/media/"; textBNext="Continue, lo esta haciendo bien! ";
var wordsG=[];imageW=[];questionW=[];audioW=[];cG=[];alterW=[];
