const connection=require('../conexion/conexion');
const cnn=connection();
const {render}=require('ejs');//Ayuda a renderizar los archivos ejs
const bcryptjs=require('bcryptjs');//Permite que las claves se puedan encriptar
const controllercre={};


controllercre.insertar=(req,res,next)=>{
    console.log(req.body) 
 const co=req.body.CodigoCredito;//Captura el dato del documento del cliente
 const d=req.body.DocCli;//Captura el dato del nombre del cliente
 const cd=req.body.CodLinea;//Captura el dato de la clave del cliente
 const mm=req.body.MontoPrestado ;//Captura el dato del rol del cliente
 const fa=req.body.FechaAproba;//Captura el dato del estado del cliente
 const p=req.body.Plazo;

 //const password=await bcryptjs.hash(c,8)//Permite que la contraseña sea encriptada,tambien del dato que se toma para la encriptacion
 
 console.log(co,d);
 cnn.query('INSERT INTO bancocreditos SET?',{CodigoCredito:co,DocCli:d, CodLinea:cd, MontoPrestado:mm, FechaAproba:fa, Plazo:p},(err,resbd)=>{//Inserta los datos capturados en la base de datos que esta conectada a la aplicaion
 if(err){
     next(new Error (err))
 
 }
 else{
     console.log(resbd);
     res.redirect('lcreditos');
     
 }
     })
 }
 controllercre.actualizarcre=async(req,res,next)=>{
    //const codr=req.body.co;
    const docr=req.body.dd;
    const colr=req.body.ll;
    const monr=req.body.mo;
    const fecr=req.body.ff;
    const plar=req.body.pp;
    //const password=await bcryptjs.hash(clax,8)
    
    console.log("Actualizar",docr,colr);
    cnn.query('UPDATE bancocreditos SET CodLinea="'+colr+'",MontoPrestado="'+monr+'",FechaAproba="'+fecr+'",Plazo="'+plar+'"  WHERE DocCli="'+docr+'"', async(err,respbb)=>{
      if(err){
          next(new Error(err));
      }
      else{
          console.log("Actualizado")
          res.redirect('lcreditos');
      }
    
    })}
    
controllercre.eliminar=async(req,res,next)=>{
        console.log("Boton eliminar")
        const doccr=req.body.dd;
        console.log(doccr)
        cnn.query('DELETE FROM bancocreditos WHERE DocCli="'+doccr+'"',async(err,respbb)=>{
            
        if(err){
            
          next(new Error(err));
        }
        else{
            console.log("Datos Eliminados")
            res.redirect('lcreditos')
        }
            
         })
    }    
module.exports=controllercre;