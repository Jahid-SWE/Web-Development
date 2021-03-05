


// var h1=document.getElementById('h1');
// h1.onclick = function (){
//     h1.innerHTML="masud rane";
// }


$('#h1').click(function (){
   var text =$('#h1').text();
   alert(text);
    // $('#h1').html('hello world from query');
});

$('#input').click(function (){
    var text =$('#input').val();
    alert('welcome to my channel')
});

$('#btn').click(function (){
    var firstName =$('#firstName').val();
    var lastName =$('#lastName').val();
    var fullName = firstName+' '+lastName;
    $('#fullName').val(fullName);
})

$('#fName').keyup(function (){
    var firstName=$('#fName').val();
    $('#res1').text(firstName);
})
$('#lName').keyup(function (){
    var lastName=$('#lName').val();
    $('#res2').text(lastName);
})
$(document).on('blur', '#fuName',function (){
    var firstName=$('#fName').val();
    var lastName=$('#lName').val();
    var fullName =firstName+' '+lastName;

    $('#fuName').val(fullName);
    $('#res3').text(fullName);
})

$(document).on('click', '#addBtn', function (){
    var tr = '';
    tr +='<tr>';
    tr +='<td> <input type="text" name="" placeholder="Enter your name"></td>'
    tr +='<td> <input type="email" name="" placeholder="Enter your email"></td>'
    tr +='<td> <input type="number" name="" placeholder="Enter your mobile"></td>'
    tr +='<td> <input type="button" name="" class="remove-btn" value="-"></td>'

    tr +='</tr>';
    $('#resTbody').append(tr);
})

$(document).on('click', '.remove-btn', function (){
    $(this).closest('tr').remove();
})