/*
*    jquery basic syntax : $(selector).action()
*    $ is a jquery object sign
*    selector is html element class, id ,attribute,
*    . java script ar object sign
*    action is call jquery method
* */

/*
$('#btn').click(function (){
   var firstName = $('firstName').val();
   var lastName  = $('lastName').val();
   var fullName  = firstName+ ' '+lastName;
   $('#fullName').val(fullName);
});*/

$('#fName').keyup(function (){
    var firstName  = $('#fName').val();
   $('#res1').text(firstName);
});
$('#lName').keyup(function (){
    var lastName  = $('#lName').val();
    $('#res2').text(lastName);
});


$('#lName').blur(function (){
   var firstName  = $('#fName').val();
    var lastName  = $('#lName').val();
    var fullName  = firstName+ ' '+ lastName;

     $('#fuName').val(fullName);
     $('#res3').text(fullName);

});




$('.remove-btn').click(function (){
    $(this).closest('tr').remove();
});

$(document).on('click', '#addBtn', function (){
    var tr = '';
    tr += '<tr>';
    tr += '<td><input type="text" name="" placeholder="name"></td>';
    tr += '<td><input type="email" name="" placeholder="email"></td>';
    tr += '<td><input type="number" name="" placeholder="mobile"></td>';
    tr += '<td><input type="button" class="remove-btn" name="" value="-"></td>';
    tr += '</tr>';
    $('#resTbody').append(tr);
} );



$(document).on('click','#remove-btn', function (){
    $(this).closest('tr').remove();
});