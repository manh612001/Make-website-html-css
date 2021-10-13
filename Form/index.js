$(document).ready(function(){
    
    var id = 0;
    $('.btn-success').click(function(){
        var namecar = $('.name').val();
        var img = $('.img').val();
        var brand = $('#brand').val();
        var price = $('#price').val();
        var lh = $('#lh').val();
        var sdt = $('#sdt').val();
        var email = $('#email').val();
        
        ++id;
        var val = '<tr>'+'<td>'+id+'</td>'+'<td><img src="'+img+'" style ="width:100px"/></td>'+'<td>'+namecar+'</td>'+'<td>'+brand+'</td>'+'<td>'+price+'</td>'+'<td>'+lh+'</td>'+'<td>'+sdt+'</td>'+'<td>'+email+'</td>'+'</tr>';
        $('.table').append(val);
         
        
        
        
    })
    
    
   
    // tìm kiếm 
    $(".search").on("keyup", function() {
        var value = $(this).val().toLowerCase();
        $(".table tr").filter(function() {
          $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
    });    
    

    
    
    
})