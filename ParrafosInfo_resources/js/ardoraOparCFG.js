//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=360; timeIni=360; timeBon=0;
var successes=0; successesMax=2; attempts=0; attemptsMax=2;
var score=0; scoreMax=4; scoreInc=2; scoreDec=-1
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
var timeOnMessage=5; messageOk="Felicidades lo estas logrando"; messageTime=""; messageError=""; messageErrorG=""; messageAttempts="Que pasa? Por que tantos errores "; isShowMessage=false;
var urlOk=""; urlTime=""; urlError="Vamos!! Tu puedes"; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var wordsGame="UGFycmFmb3NJbmZv"; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var actMaxWidth="600"; actMaxHeight="400";profG=0;dirMedia="ParrafosInfo_resources/media/";
var indexG=0;
var words1G=["VW4gZMOtYSBkZSBpbnZpZXJubyBsYSBSZWluYSBtaXJhYmEgY8OzbW8gY2HDrWFuIGxvcyBjb3BvcyBkZSBuaWV2ZSBtaWVudHJhcyBjb3PDrWEu","TGUgY2F1dGl2YXJvbiBkZSB0YWwgZm9ybWEgcXVlIHNlIGRlc3Bpc3TDsyB5IHNlIHBpbmNow7MgZW4gdW4gZGVkbyBkZWphbmRvIGNhZXIgdHJlcyBnb3RhcyBkZSBsYSBzYW5ncmUgbcOhcyByb2phIHNvYnJlIGxhIG5pZXZlLg==","RW4gZXNlIG1vbWVudG8gcGVuc8OzOg==","LSBDw7NtbyBkZXNlYXLDrWEgdGVuZXIgdW5hIGhpamEgYXPDrSwgYmxhbmNhIGNvbW8gbGEgbmlldmUsIHNvbnJvc2FkYSBjb21vIGxhIHNhbmdyZSB5IGRlIGNhYmVsbG9zIG5lZ3JvcyBjb21vIGVsIMOpYmFuby4=","QWwgY2FibyBkZSB1biB0aWVtcG8gc3UgZGVzZW8gc2UgY3VtcGxpw7MgeSBkaW8gYSBsdXogYSB1bmEgbmnDsWEgYmVsbMOtc2ltYSwgYmxhbmNhIGNvbW8gbGEgbmlldmUsIHNvbnJvc2FkYSBjb21vIGxhIHNhbmdyZSB5IGNvbiBsb3MgY2FiZWxsb3MgY29tbyBlbCDDqWJhbm8u","RGUgbm9tYnJlIGxlIHB1c2llcm9uIEJsYW5jYW5pZXZlcywgYXVucXVlIHN1IG5hY2ltaWVudG8gc3VwdXNvIGxhIG11ZXJ0ZSBkZSBzdSBtYWRyZS4="];
var words2G=["SGFiw61hIHVuYSB2ZXogdW4gbW9saW5lcm8gcG9icmUgcXVlIGN1YW5kbyBtdXJpw7Mgc8OzbG8gcHVkbyBkZWphciBhIHN1cyBoaWpvcyBwb3IgaGVyZW5jaWEgZWwgbW9saW5vLCB1biBhc25vIHkgdW4gZ2F0by4=","RW4gZWwgcmVwYXJ0byBlbCBtb2xpbm8gZnVlIHBhcmEgZWwgbWF5b3IsIGVsIGFzbm8gcGFyYSBlbCBzZWd1bmRvIHkgZWwgZ2F0byBwYXJhIGVsIG3DoXMgcGVxdWXDsW8u","w4lzdGUgw7psdGltbyBzZSBsYW1lbnTDsyBkZSBzdSBzdWVydGUgZW4gY3VhbnRvIHN1cG8gY3XDoWwgZXJhIHN1IHBhcnRlLg==","wr9ZIGFob3JhIHF1w6kgaGFyw6k/IE1pcyBoZXJtYW5vcyB0cmFiYWphcsOhbiBqdW50b3MgeSBoYXLDoW4gZm9ydHVuYSwgcGVybyB5byBzw7NsbyB0ZW5nbyB1biBwb2JyZSBnYXRvLg==","RWwgZ2F0bywgcXVlIG5vIGFuZGFiYSBtdXkgbGVqb3MsIGxlIGNvbnRlc3TDszo=","LSBObyBvcyBwcmVvY3Vww6lpcyBtaSBzZcOxb3IsIGVzdG95IHNlZ3VybyBkZSBxdWUgb3Mgc2Vyw6kgbcOhcyB2YWxpb3NvIGRlIGxvIHF1ZSBwZW5zw6Fpcy4=","LSDCv0FoIHPDrT8gwr9Dw7Ntbz8sIGRpam8gZWwgYW1vIGluY3LDqWR1bG8=","LSBEYWRtZSB1biBwYXIgZGUgYm90YXMgeSB1biBzYWNvIHkgb3MgbG8gZGVtb3N0cmFyw6ku"];
var words3G=[];
var c1=[80,127,21,118,155,86];
var c2=[119,97,69,100,46,87,39,53];
var c3=[];
