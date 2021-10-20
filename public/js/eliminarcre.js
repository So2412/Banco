$(document).ready(function(){
    
    $('.eli').on('click',function(){
       
       let btn= $('.eli').index(this);
       alert(btn)
       let docr=$('.doc').eq(btn);
      
       
       console.log(docr)
    
    
       let d=docr.val();
    
       alert("Se eliminaran los datos"+d)
    
    
    
    $.ajax({
    type:"POST",
    url:'/eliminarcre',
    data:{
        dd:d
    }
    
    });  
       
    });
    
    
    
    })
