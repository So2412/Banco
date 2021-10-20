const {render}=require('ejs');//Ayuda a renderizar los archivos ejs
const bcryptjs=require('bcryptjs');//Permite que las claves se puedan encriptar
//const Cliente=require('../modelo/clientes');
const controllerli={};
const connection=require('../conexion/conexion');
const cnn=connection();

controllerli.insertar=(req,res,next)=>{
    console.log(req.body) 
 const cd=req.body.CodLinea;//Captura el dato del documento del cliente
 const nl=req.body.NomLinea;//Captura el dato del nombre del cliente
 const mc=req.body.MontoMaxCredito;//Captura el dato de la clave del cliente
 const pc=req.body.PlazoMaxCred ;//Captura el dato del rol del cliente

 
 
 console.log(cd,nl);
 cnn.query('INSERT INTO bancolineas SET?',{CodLinea:cd,NomLinea:nl, MontoMaxCredito:mc, PlazoMaxCred:pc},(err,resbd)=>{//Inserta los datos capturados en la base de datos que esta conectada a la aplicaion
 if(err){
     next(new Error (err))
 
 }
 else{
     console.log(resbd);
     res.redirect('/llineas')   
     
 }
     })
 }


 controllerli.actualizarli=async(req,res,next)=>{
    const coll=req.body.ll;
    const noll=req.body.nn;
    const moll=req.body.mo;
    const plll=req.body.pa;
    const docr=req.body.dd;
    //const password=await bcryptjs.hash(clax,8)
    
    //console.log("Actualizar",doc,usu);
    cnn.query('UPDATE bancolineas INNER JOIN bancocreditos cr on(cr.CodLinea=CodLinea) SET CodLinea="'+coll+'",NomLinea="'+noll+'",MontoMaxCredito="'+moll+'",PlazoMaxCred="'+plll+'",Plazo="'+plar+'"  WHERE DocCli="'+docr+'"', async(err,respbb)=>{
      if(err){
          next(new Error(err));
      }
      else{
          alert('Si se actualizo')
          console.log("Actualizado")
          res.redirect('lcrerditos');
      }
    
    })}
    
    

 module.exports=controllerli;