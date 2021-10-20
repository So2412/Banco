$(document).ready(function(){
   
    $('.ac').on('click',function(){
       
       let btn= $('.ac').index(this);
       //let cdo=$('.cod').eq(btn);
       let dco=$('.doc').eq(btn);
       let tt=$('.tip').eq(btn);
       let ss=$('.sal').eq(btn);
     
    
    
       //let co=cdo.val();
       let d=dco.val();
       let t=tt.val();
       let s=ss.val();
      
       alert("datos"+d+t+s)
    
    
    
    $.ajax({
    type:"POST",
    url:'/actualizarcu',
    data:{
        cm:d,tm:t,sm:s
    }
    
    });  
       
    });
    
    
    
    })
