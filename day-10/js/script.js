var btn=document.getElementById('btn');
btn.onclick= function (){
    var h1= document.getElementById('h1');
    h1.innerHTML='hello world';
}

var btn1 = document.getElementById('btn1');
btn1.onclick=function (){
    var input=document.getElementById('input');
    var value =input.value;
    var newH1 =document.getElementById('newH1');
    newH1.innerHTML=value;
}

var img1 = document.getElementById('img1');
var img2 = document.getElementById('img2');
var img3 = document.getElementById('img3');
var img4 = document.getElementById('img4');
var mainImage =document.getElementById('mainImage');
img1.onclick=function (){
    var imageURL =img1.getAttribute('src');
    mainImage.setAttribute('src',imageURL);
}
img2.onclick=function (){
    var imageURL =img2.getAttribute('src');
    mainImage.setAttribute('src',imageURL);
}
img3.onclick=function (){
    var imageURL =img3.getAttribute('src');
    mainImage.setAttribute('src',imageURL);
}
img4.onclick=function (){
    var imageURL =img4.getAttribute('src');
    mainImage.setAttribute('src',imageURL);
}