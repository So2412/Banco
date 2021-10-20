$(document).ready(function(){
    
    $('.btneli').on('click',function(){
       
       let btn= $('.btneli').index(this);
       alert(btn)
       let docc=$('.doc').eq(btn);
      
       
       console.log(docc)
    
    
       let d=docc.val();
    
       alert("Se eliminaran los datos"+d)
    
    
    
    $.ajax({
    type:"POST",
    url:'/eliminar',
    data:{
        dd:d
    }
    
    });  
       
    });
    
    
    
    })
