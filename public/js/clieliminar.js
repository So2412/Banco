$(document).ready(function(){
    
    $('.btnel').on('click',function(){
       
       let btn= $('.btnel').index(this);
       alert(btn)
       let doca=$('.doc').eq(btn);
      
       
       console.log(doca)
    
    
       let d=doca.val();
    
       alert("Se eliminaran los datos"+d)
    
    
    
    $.ajax({
    type:"POST",
    url:'/elimina',
    data:{
        dd:d
    }
    
    });  
       
    });
    
    
    
    })
