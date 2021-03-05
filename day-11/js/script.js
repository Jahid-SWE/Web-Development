var btn = document.getElementById('btn');
btn.onclick=function (){
    var firstName  = document.getElementById('firstName').value;
    var lastName   = document.getElementById('lastName').value;
    var result     = firstName+' '+lastName;
    var fullName   = document.getElementById('fullName');
    fullName.value=result;
}

var fName = document.getElementById('fName');
fName.onkeyup = function (){
    var result = document.getElementById('res1');
    result.innerHTML = fName.value;

}
var lName = document.getElementById('lName');
lName.onkeyup = function (){
    var result = document.getElementById('res2');
    result.innerHTML = lName.value;

}
lName.onblur = function (){

    var res3 = document.getElementById('res1');
    var fuName = document.getElementById('fuName');
    var result = fName.value+' '+ lName.value;
    res3.innerHTML = result;
    fuName.value = result;

}

var fuName = document.getElementById('fuName');
fuName.onkeyup = function (){
    var res3 = document.getElementById('res3');
    res3.innerHTML = fuName.value;
}

var btn1 = document.getElementById('btn1');
btn1.onclick = function (){
    var height = document.getElementById('height').value;
    var width = document.getElementById('width').value;
    var backgroundColor = document.getElementById('backgroundColor').value;


    var div1 = document.getElementById('div1');
    div1.style.height  = height+'px';
    div1.style.width  = width+'px';
    div1.style.backgroundColor = backgroundColor;
}
