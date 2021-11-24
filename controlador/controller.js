const connection=require('../conexion/conexion');
const cnn=connection();
const {render}=require('ejs');//Ayuda a renderizar los archivos ejs
const bcryptjs=require('bcryptjs');//Permite que las claves se puedan encriptar
//const Cliente=require('../modelo/clientes');
const controller={};


//LOGIN
controller.index=(req,res,next)=>{
    res.render('pagpri');
    //res.send("error en controlador");
}

controller.logi=(req,res,next)=>{
    res.render('login'); 
}


controller.inicio=(req,res,next)=>{
  if(req.session.login){
      res.render('inicio');
  }
  else{
      res.redirect('/');
  }
}
controller.iniciod=(req,res,next)=>{
    if(req.session.login){
        res.render('iniciod');
    }
    else{
        res.redirect('/');
    }
  }

controller.cliente=(req,res,next)=>{
  if(req.session.login){
      let nombreusu=req.session.uss
      res.render('lclientes')
  }
  else{
      res.redirect('/')
  }
}
controller.transferir=(req,res,next)=>{
    if(req.session.login){
        let nombreusu=req.session.uss
        res.render('transferencia')
    }
    else{
        res.redirect('/')
    }
  }

controller.consignando=(req,res,next)=>{
    if(req.session.login){
        let nombreusu=req.session.uss
        res.render('consignar')
    }
    else{
        res.redirect('/')
    }
}  
controller.retirando=(req,res,next)=>{
    if(req.session.login){
        let nombreusu=req.session.uss
        res.render('retirar')
    }
    else{
        res.redirect('/')
    }
}  

controller.consultageneral=(req,res,next)=>{
   if(req.session.login){

   
    cnn.query('SELECT * FROM bancousuarios',(err,resbd)=>{
        if(err){
          next(new Error(err))  
          console.log("Error en la consulta")
        }
        else{
            //console.log(resbd)
            res.render('lusuarios',{datos:resbd});
        }
    }) 
  }
  else{
      res.redirect('/')
  }
 }

 
controller.consultageneralus=(req,res,next)=>{
    if(req.session.login){
 
    
     cnn.query('SELECT * FROM bancousuarios WHERE DocCli="'+[ddd]+'"',(err,resbd)=>{
         if(err){
           next(new Error(err))  
           console.log("Error en la consulta")
         }
         else{
             //console.log(resbd)
             res.render('usuario',{datos:resbd});
         }
     }) 
   }
   else{
       res.redirect('/')
   }
  }

controller.consultacli=(req,res,next)=>{
    if (req.session.login){
    cnn.query('SELECT * FROM bancoclientes',(err,resbd)=>{
       if(err){
           next(new Error(err))
           console.log("Error en la consulta")
       }
       else{
           //console.log(resbd)
           res.render('lclientes',{datos:resbd});
       }
   })
   }
   else{
    res.redirect('/')
   }
}


controller.consultaclien=(req,res,next)=>{
    if (req.session.login){
    cnn.query('SELECT * FROM bancoclientes WHERE DocCli="'+[ddd]+'"',(err,resbd)=>{
       if(err){
           next(new Error(err))
           console.log("Error en la consulta")
       }
       else{
           //console.log(resbd)
           res.render('cliente',{datos:resbd});
       }
   })
   }
   else{
    res.redirect('/')
   }
}
controller.consultacre=(req,res,next)=>{
    if (req.session.login){
    cnn.query('SELECT * FROM bancocreditos',(err,resbd)=>{
       if(err){
           next(new Error(err))
           console.log("Error en la consulta")
       }
       else{
           //console.log(resbd)
           res.render('lcrerditos',{datos:resbd});
       }
   })
    }
    else{
        res.redirect('/')
       }
}
controller.consultacredi=(req,res,next)=>{
    if (req.session.login){
    cnn.query('SELECT * FROM bancocreditos WHERE DocCli="'+[ddd]+'"',(err,resbd)=>{
       if(err){
           next(new Error(err))
           console.log("Error en la consulta")
       }
       else{
           //console.log(resbd)
           res.render('credito',{datos:resbd});
       }
   })
    }
    else{
        res.redirect('/')
       }
}
controller.consultali=(req,res,next)=>{
    cnn.query('SELECT * FROM bancolineas',(err,resbd)=>{
       if(err){
           next(new Error(err))
           console.log("Error en la consulta")
       }
       else{
           console.log(resbd)
           res.render('llineas',{datos:resbd});
       }
   })
}
controller.consultaline=(req,res,next)=>{
    cnn.query('SELECT * FROM bancousuarios u INNER JOIN bancoclientes c on (c.DocCli=u.DocCli) INNER JOIN bancocreditos cr on (cr.DocCli=c.DocCli) INNER JOIN bancolineas l on (cr.CodLinea=l.CodLinea) WHERE c.DocCli="'+[ddd]+'"',(err,resbd)=>{
       if(err){
           next(new Error(err)) 
           console.log("Error en la consulta")
       }
       else{
           console.log(resbd)
           res.render('linea',{datos:resbd});
       }
   })
}

controller.consultacu=(req,res,next)=>{
    cnn.query('SELECT * FROM bancocuentas',(err,resbd)=>{
       if(err){
           next(new Error(err))
           console.log("Error en la consulta")
       }
       else{
           console.log(resbd)
           res.render('lcuentas',{datos:resbd});
       }
   })
}

controller.consultacuen=(req,res,next)=>{
    cnn.query('SELECT * FROM bancocuentas WHERE DocCli="'+[ddd]+'"',(err,resbd)=>{
       if(err){
           next(new Error(err))
           console.log("Error en la consulta")
       }
       else{
           console.log(resbd)
           res.render('cuenta',{datos:resbd});
       }
   })
}

/*controller.transfe=(req,res,next)=>{
    cnn.query('SELECT * FROM bancocuentas WHERE DocCli="'+[ddd]+'"',(err,resbd)=>{
       if(err){
           next(new Error(err))
           console.log("Error en la consulta")
       }
       else{
           console.log(resbd)
           res.render('transferencia',{datos:resbd});
       }
   })
}*/

controller.insertrans=async(req,res,next)=>{
    const d=req.body.DocCli;
    const a=req.body.Saldo;
    const c=req.body.Tipo;
    console.log(a);

    cnn.query('UPDATE bancocuentas SET Saldo=Saldo -"'+a+'" WHERE DocCli="'+ddd+'" AND Tipo="Ahorros"',async(err,respbb)=>{
        if(err){
            next(new Error(err));
        }
        else{
            console.log(respbb);
            res.render('transferencia',{datos:respbb});
        }
    });
    cnn.query('UPDATE bancocuentas SET Saldo= Saldo +"'+a+'" WHERE DocCli="'+d+'" AND Tipo="'+c+'"',async(err,respbb)=>{ 
        if(err){    
            next(new Error(err)); 
        }
        else{
            console.log(respbb);
            res.render('transferencia',{datos:respbb}); 
        }
        });
}


controller.consignarcuen=(req,res,next)=>{
    //const d=req.body.DocCli;
    const a=req.body.Saldo;     
    const c=req.body.Tipo;
    console.log(a);
    cnn.query('UPDATE bancocuentas SET Saldo= Saldo +"'+a+'" WHERE DocCli="'+ddd+'" AND Tipo="'+c+'"',async(err,respbb)=>{ 
    if(err){    
        next(new Error(err));  
    }
    else{
        console.log(respbb);
        res.render('consignar',{datos:respbb}); 
    }
    }); 
}
controller.retirarcue=(req,res,next)=>{
    //const d=req.body.DocCli;
    const a=req.body.Saldo;     
    const c=req.body.Tipo;
    console.log(a);
    cnn.query('UPDATE bancocuentas SET Saldo= Saldo -"'+a+'" WHERE DocCli="'+ddd+'" AND Tipo="'+c+'"',async(err,respbb)=>{ 
    if(err){    
        next(new Error(err));  
    }
    else{
        console.log(respbb);
        res.render('retirar',{datos:respbb}); 
    }
    }); 
}


controller.insertar=async(req,res,next)=>{
    console.log(req.body) 
 const d=req.body.DocCli;//Captura el dato del documento del cliente
 const u=req.body.NomUsu;//Captura el dato del nombre del cliente
 const c=req.body.Clave;//Captura el dato de la clave del cliente
 const r=req.body.Rol ;//Captura el dato del rol del cliente
 const e=req.body.Estado;//Captura el dato del estado del cliente
 const i=req.body.Imagen;//Captura el dato de la imagen del cliente
 const password=await bcryptjs.hash(c,8)//Permite que la contraseña sea encriptada,tambien del dato que se toma para la encriptacion
 
 console.log(d,u);
 cnn.query('INSERT INTO bancousuarios SET?',{DocCli:d,NomUsu:u, Clave:password, Rol:r, Estado:e, Imagen:i},(err,resbd)=>{//Inserta los datos capturados en la base de datos que esta conectada a la aplicaion
 if(err){
     next(new Error (err))
 
 }
 else{
     console.log(resbd);
     res.redirect('/')   
     
 }
     })
 }

 controller.insertara=async(req,res,next)=>{
    const docb=req.body.dl;
    const usub=req.body.ul;
    const clab=req.body.cl;
    const rolb=req.body.rl;
    const estb=req.body.el;
    const imgb=req.body.il;
    const password=await bcryptjs.hash(clab,8)
    
    //console.log("Actualizar",doc,usu);
    cnn.query('INSERT INTO bancousuarios SET?',{DocCli:docb, NomUsu:usub,Clave:password,Rol:rolb,Estado:estb,Imagen:imgb}, (err,respbb)=>{
      if(err){
          next(new Error(err));
      }
      else{
          console.log("Ingresado")
          res.redirect('lusuarios');
      }
    
    })
    
    }

controller.insertarcu=(req,res,next)=>{
    console.log(req.body) 
 const co=req.body.CodCu;//Captura el dato del documento del cliente
 const d=req.body.DocCli;//Captura el dato del nombre del cliente
 const t=req.body.Tipo;//Captura el dato de la clave del cliente
 const s=req.body.Saldo ;//Captura el dato del rol del cliente
 
 //const password=await bcryptjs.hash(c,8)//Permite que la contraseña sea encriptada,tambien del dato que se toma para la encriptacion
 
 console.log(d,t);
 cnn.query('INSERT INTO bancocuentas SET?',{CodCu:co,DocCli:d, Tipo:t, Saldo:s},(err,resbd)=>{//Inserta los datos capturados en la base de datos que esta conectada a la aplicaion
 if(err){
     next(new Error (err))
 
 }
 else{
     console.log(resbd);
     res.redirect('lcuentas')   
     
 }
     })
 }

 





controller.login=async(req,res,next)=>{
 const usu=await req.body.usuario;
 const cla=await req.body.login;
 cnn.query('SELECT * FROM bancousuarios WHERE NomUsu=?',[usu],async(err,results)=>{
        if(err){
            next(new Error("Error de consulta login",err));
        }
        else if(results!=0 && await(bcryptjs.compare(cla,results[0].Clave))){//Esto compara la clave que ingresa el usuario con la de la base de datos que ya esta encriptada
                console.log("Datos correctos");
                //res.redirect('/lusuarios')
                rol=results[0].Rol;//Captura el rol del arreglo result del usuario del cual se ingresan los datos y que ya esta registrado en la base
                uss=results[0].NomUsu;
                ddd=results[0].DocCli;//captura el usuario del arreglo result del usuario del cual se ingresan los datos y que ya esta registrado en la base
                req.session.login=true;//se esta inicializando la variable de session
                req.session.uss=results[0].NomUsu;
                req.session.ddd=results[0].DocCli;
                switch(rol){//Reconoce el rol registrado del usuario que ingreso al login
                    case 'Cliente':
                        res.redirect('cliente');//Si en la base el usuario tiene registrado Cliente la pagina se redirecciona a la vista del cliente
                        /*if(req.session.login){
                         res.redirect('cliente');
                        }
                        else{
                            res.redirect('login');
                        }*/
                    break;    
                    case 'Empleado':
                      res.redirect('inicio');//Si en la base el usuario tiene registrado Empleado la pagina se redirecciona a la vista del usuario
                    break;
                    case 'Administrador':
                        res.redirect('iniciod')
                    break;    
                }
        }
        else{
            console.log("Datos incorrectos");
            res.redirect('/');
        }
    })
}



controller.actualizar=async(req,res,next)=>{
const docx=req.body.dd;
const usux=req.body.uu;
const clax=req.body.cc;
const rolx=req.body.rr;
const estx=req.body.ee;
const imgx=req.body.ii;
const password=await bcryptjs.hash(clax,8)

//console.log("Actualizar",doc,usu);
cnn.query('UPDATE bancousuarios SET NomUsu="'+usux+'",Clave="'+password+'",Rol="'+rolx+'",Estado="'+estx+'",Imagen="'+imgx+'"  WHERE DocCli="'+docx+'"', async(err,respbb)=>{
  if(err){
      next(new Error(err));
  }
  else{
      console.log("Actualizado")
      res.redirect('/');
  }

})

}

controller.actualizarus=async(req,res,next)=>{
    const docx=req.body.du;
    const usux=req.body.us;
    const clax=req.body.cu;
   
    const password=await bcryptjs.hash(clax,8)
    
    //console.log("Actualizar",doc,usu);
    cnn.query('UPDATE bancousuarios SET NomUsu="'+usux+'",Clave="'+password+'"  WHERE DocCli="'+docx+'"', async(err,respbb)=>{
      if(err){
          next(new Error(err));
      }
      else{
          console.log("Actualizado");
          res.redirect('/');
      }
    
    })
    
    }
controller.actualizarcu=async(req,res,next)=>{
        //const docx=req.body.dm;
        const docu=req.body.cm;
        const ticu=req.body.tm;
        const sacu=req.body.sm;
        //const password=await bcryptjs.hash(clax,8)
        
        //console.log("Actualizar",doc,usu);
        cnn.query('UPDATE bancocuentas SET Tipo="'+ticu+'",Saldo="'+sacu+'"  WHERE DocCli="'+docu+'"', async(err,respbb)=>{
          if(err){
              next(new Error(err));
          }
          else{
              console.log("Actualizado");
              res.redirect('lcuentas');
          }
        
        })
        
        }
controller.eliminar=async(req,res,next)=>{
    console.log("Boton eliminar")
    const doce=req.body.dd;
    console.log(doce)
    cnn.query('DELETE FROM bancousuarios WHERE DocCli="'+doce+'"',async(err,respbb)=>{
        
    if(err){
        
      next(new Error(err));
    }
    else{
        console.log("Datos Eliminados")
        res.redirect('/')
    }
        
     })
}
controller.eliminarcu=async(req,res,next)=>{
    console.log("Boton eliminar")
    const doco=req.body.dd;
    console.log(doco)
    cnn.query('DELETE FROM bancocuentas WHERE DocCli="'+doco+'"',async(err,respbb)=>{
        
    if(err){
        
      next(new Error(err));
    }
    else{
        console.log("Datos Eliminados")
        res.redirect('lcuentas')
    }
        
     })
}

//CERRAR SESION
controller.cerrar=(req,res,next)=>{
req.session.destroy(()=>{
    res.redirect('/');
})


}
module.exports=controller;