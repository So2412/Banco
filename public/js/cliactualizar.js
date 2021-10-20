$(document).ready(function(){

$('.btnac').on('click',function(){
       
    let btn= $('.btnac').index(this);
    let doccl=$('.doc').eq(btn);
    let nomcl=$('.nom').eq(btn);
    let apecl=$('.ape').eq(btn);
    let corcl=$('.cor').eq(btn);
    let celcl=$('.cel').eq(btn);
    let sexcl=$('.sex').eq(btn);
    let feccl=$('.fec').eq(btn);
    
       
    let dc=doccl.val();
    let n=nomcl.val();
    let a=apecl.val();
    let c=corcl.val();
    let ce=celcl.val();
    let s=sexcl.val();
    let f=feccl.val();
    alert("datos"+dc+n+a+c+ce+s+f)
    
    
    
$.ajax({
type:"POST",
url:'/actualiza',
data:{
    ddo:dc,nn:n,aa:a,cc:c,cl:ce,ss:s,ff:f
}
    
});  
       
});
    
    
    
})

//Actualizar solo un cliente
$(document).ready(function(){

    $('.btnactc').on('click',function(){
           
        let btn= $('.btnactc').index(this);
        let dcl=$('.docu').eq(btn);
        let ncl=$('.nomu').eq(btn);
        let acl=$('.apeu').eq(btn);
        let ccl=$('.coru').eq(btn);
        let cecl=$('.celu').eq(btn);
        let scl=$('.sexu').eq(btn);
        let fcl=$('.fecu').eq(btn);
        
           
        let dc=dcl.val();
        let n=ncl.val();
        let a=acl.val();
        let c=ccl.val();
        let ce=cecl.val();
        let s=scl.val();
        let f=fcl.val();
        alert("datos"+dc+n+a+c+ce+s+f)
        
        
        
    $.ajax({
    type:"POST",
    url:'/actualizacl',
    data:{
        dcc:dc,nc:n,ac:a,cu:c,clu:ce,sc:s,fc:f
    }
        
    });  
           
    });
        
        
        
    })