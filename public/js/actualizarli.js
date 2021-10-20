$(document).ready(function(){
   
    $('.actu').on('click',function(){
       
       let btn= $('.actu').index(this);
       let doll=$('.doc').index(btn)
       let coll=$('.codl').eq(btn);
       let noll=$('.noml').eq(btn);
       let moll=$('.montm').eq(btn);
       let pll=$('.plam').eq(btn);
      
       let d=doll.val();
       let cd=coll.val();
       let nl=noll.val();
       let mc=moll.val();
       let pc=pll.val();
       alert("datos"+d+cd+nl+mc+pc)
    
    
    
    $.ajax({
    type:"POST",
    url:'/actualizarli',
    data:{
       dd:d, ll:cd,nn:nl,mo:mc,pa:pc
    }
    
    });  
       
    });
    
    
    
    })

