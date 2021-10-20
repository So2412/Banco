const connection=require('../conexion/conexion');
const cnn=connection();
const {render}=require('ejs');//Ayuda a renderizar los archivos ejs
const bcryptjs=require('bcryptjs');//Permite que las claves se puedan encriptar
//const Cliente=require('../modelo/clientes');
const controllercliente={};


controllercliente.insertarcl=(req,res,next)=>{
    console.log(req.body) 
 const dc=req.body.DocCli;//Captura el dato del documento del cliente
 const n=req.body.NomCli;//Captura el dato del nombre del cliente
 const a=req.body.ApeCli;//Captura el dato de la clave del cliente
 const c=req.body.CorreoCli;//Captura el dato del rol del cliente
 const ce=req.body.Celular;//Captura el dato del estado del cliente
 const s=req.body.Sexo;
 const f=req.body.FechaNacCli;
 //const password=await bcryptjs.hash(c,8)//Permite que la contraseña sea encriptada,tambien del dato que se toma para la encriptacion
 
 console.log(dc,n);
 cnn.query('INSERT INTO bancoclientes SET?',{DocCli:dc,NomCli:n, ApeCli:a, CorreoCli:c, Celular:ce, Sexo:s,FechaNacCli:f},(err,resbd)=>{//Inserta los datos capturados en la base de datos que esta conectada a la aplicaion
 if(err){
     next(new Error (err))
 
 }
 else{
     console.log(resbd);
     res.redirect('lclientes')   
     
 }
     })
 }



 controllercliente.actualizarcl=async(req,res,next)=>{
    console.log("Actualizar clientes")
    const docc=req.body.ddo;
    const nomc=req.body.nn;
    const apec=req.body.aa;
    const corc=req.body.cc;
    const celc=req.body.cl;
    const sexc=req.body.ss;
    const fecc=req.body.ff;
    //const password=await bcryptjs.hash(clax,8)
    
    console.log("Actualizar",docc,nomc);
    cnn.query('UPDATE bancoclientes SET NomCli="'+nomc+'",ApeCli="'+apec+'",CorreoCli="'+corc+'",Celular="'+celc+'",Sexo="'+sexc+'",FechaNacCli="'+fecc+'"  WHERE DocCli="'+docc+'"', async(err,respbb)=>{
      if(err){
          next(new Error(err));
      }
      else{
      
          console.log("Actualizado")
          res.redirect('lclientes');
      }
    
    })
    
    }



    controllercliente.actualizarusc=async(req,res,next)=>{
        console.log("Actualizar clientes")
        const docz=req.body.ddc;
        const nomz=req.body.nc;
        const apez=req.body.ac;
        const corz=req.body.cu;
        const celz=req.body.clu;
        const sexz=req.body.sc;
        const fecz=req.body.fc;
        //const password=await bcryptjs.hash(clax,8)
        
        console.log("Actualizar",docz,nomz);
        cnn.query('UPDATE bancoclientes SET NomCli="'+nomz+'",ApeCli="'+apez+'",CorreoCli="'+corz+'",Celular="'+celz+'",Sexo="'+sexz+'",FechaNacCli="'+fecz+'"  WHERE DocCli="'+docz+'"', async(err,respbb)=>{
          if(err){
              next(new Error(err));
          }
          else{
          
              console.log("Actualizado")
              res.redirect('cliente');
          }
        
        })
        
        }    
controllercliente.eliminar=async(req,res,next)=>{
        console.log("Boton eliminar")
        const docb=req.body.dd;
        console.log(docb)
        cnn.query('DELETE FROM bancoclientes WHERE DocCli="'+docb+'"',async(err,respbb)=>{
            
        if(err){
            
          next(new Error(err));
        }
        else{
            console.log("Datos Eliminados")
            res.redirect('lclientes')
        }
            
         })
    }

module.exports=controllercliente;