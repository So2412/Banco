$(document).ready(function(){
   
    $('.el').on('click',function(){
    
       let btn= $('.el').index(this);
       alert(btn)
       let dotr=$('.doc').eq(btn);
      
    
     
    
    
       let d=dotr.val();
    
       alert("Se eliminaran los datos"+d)
    
    
    
    $.ajax({
    type:"POST",
    url:'/eliminarcu',
    data:{
        dd:d
    }
    
    });  
       
    });
    
    
    
    })