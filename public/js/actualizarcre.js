$(document).ready(function(){
    
    $('.act').on('click',function(){
       
       let btn= $('.act').index(this);
       //let codc=$('.codc').eq(btn);
       let doc=$('.doc').eq(btn);
       let codl=$('.codl').eq(btn);
       let mon=$('.mon').eq(btn);
       let feca=$('.feca').eq(btn);
       let pla=$('.pla').eq(btn);
    
    
       //let co=codc.val();
       let d=doc.val();
       let cd=codl.val();
       let mm=mon.val();
       let fa=feca.val();
       let p=pla.val();
       alert("datos"+d+cd+mm+fa+p)
    
    
    
    $.ajax({
    type:"POST",
    url:'/actualizarcre',
    data:{
        dd:d,ll:cd,mo:mm,ff:fa,pp:p
    }
    
    });  
       
    });
    
    
    
    })