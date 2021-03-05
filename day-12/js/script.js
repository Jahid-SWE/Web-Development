
/*
Basic input/output





setInterval();
setTimeout();
*/

$dateTime= new date();
var x =$dateTime.getData();
function text(){
    alert('hello world');
}
// setInterval("text()",3000);
// setTimeout("text()", 3000);




var homeContent = document.getElementById('homeContent');
var aboutContent = document.getElementById('aboutContent');
var contactContent = document.getElementById('contactContent');






var homeBtn = document.getElementById('homeBtn');
homeBtn.onclick = function (){

    homeBtn.className='btn btn-active ';
    aboutBtn.className='btn ';
    contactBtn.className='btn';
    homeContent.className ='d-block';
    aboutContent.className ='d-none';
    contactContent.className ='d-none';
}
var aboutBtn = document.getElementById('aboutBtn');
aboutBtn.onclick = function (){

    homeBtn.className='btn ';
    aboutBtn.className='btn btn-active';
    contactBtn.className='btn';
    homeContent.className ='d-none';
    aboutContent.className ='d-block';
    contactContent.className ='d-none';

}
var contactBtn = document.getElementById('contactBtn');
contactBtn.onclick = function (){
    homeBtn.className='btn ';
    aboutBtn.className='btn ';
    contactBtn.className='btn btn-active';

    homeContent.className ='d-none';
    aboutContent.className ='d-none';
    contactContent.className ='d-block';

}





