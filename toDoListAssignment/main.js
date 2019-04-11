

$('#button').on('click', function(event){
    
    var inpootVal = $('#inpoot').val();
        
    $('#unList').append('<li id="newLi">' + inpootVal + '</li>');

    console.log(inpootVal)

    $( "li" ).click(function() {
        $(this).remove()
      });

      $('#inpoot').val('');

      
          
      
})


//onclick remove list item 



