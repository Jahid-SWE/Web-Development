
var btn = document.getElementById('btn1');
btn.onclick=function (){
    var firstNumber = Number(document.getElementById('firstNumber').value);
    var lastNumber = Number(document.getElementById('lastNumber').value);
    var result = firstNumber+lastNumber;
    var Result = document.getElementById('result');
    Result.value =result;
}
var btn2 = document.getElementById('btn2');
btn2.onclick=function (){
    var firstNumber = Number(document.getElementById('firstNumber').value);
    var lastNumber = Number(document.getElementById('lastNumber').value);
    var result = firstNumber-lastNumber;
    var Result = document.getElementById('result');
    Result.value =result;
}
var btn3 = document.getElementById('btn3');
btn3.onclick=function (){
    var firstNumber = Number(document.getElementById('firstNumber').value);
    var lastNumber = Number(document.getElementById('lastNumber').value);
    var result = firstNumber*lastNumber;
    var Result = document.getElementById('result');
    Result.value =result;
}
var btn4 = document.getElementById('btn4');
btn4.onclick=function (){
    var firstNumber = Number(document.getElementById('firstNumber').value);
    var lastNumber = Number(document.getElementById('lastNumber').value);
    var result = firstNumber/lastNumber;
    var Result = document.getElementById('result');
    Result.value =result;
}
var btn5 = document.getElementById('btn5');
btn5.onclick=function (){
    var firstNumber = Number(document.getElementById('firstNumber').value);
    var lastNumber = Number(document.getElementById('lastNumber').value);
    var result = firstNumber%lastNumber;
    var Result = document.getElementById('result');
    Result.value =result;
}