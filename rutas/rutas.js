const express=require('express');
const rutas=express.Router();
const controller=require('../controlador/controller');//ejecuta las funciones que estan escritas en el controller
const controllercliente=require('../controlador/controllercliente');
const controllercre=require('../controlador/controllercre');
const controllerli=require('../controlador/controllerlin');
rutas.get('/',controller.index);//Permite ingresar al login principal
rutas.get('/log',controller.logi);
rutas.post('/login',controller.login);
rutas.get('/inicio',controller.inicio);
rutas.get('/iniciod',controller.iniciod);
//rutas.get('/cliente',controller.clientes);//Transporta los datos de la vista de login hasta el controlador
rutas.get('/lusuarios',controller.consultageneral);//Ayuda a consultar los datos de la tabla usuarios y los muestra en la terminal
rutas.get('/usuario',controller.consultageneralus);
rutas.get('/lclientes',controller.consultacli);
rutas.get('/cliente',controller.consultaclien);
rutas.get('/lcreditos',controller.consultacre);
rutas.get('/credito',controller.consultacredi);
rutas.get('/llineas',controller.consultali);
rutas.get('/linea',controller.consultaline);
rutas.get('/lcuentas',controller.consultacu);
rutas.get('/cuenta',controller.consultacuen);
rutas.get('/transferir',controller.transferir);
rutas.get('/consignando',controller.consignando);
rutas.get('/retirando',controller.retirando);
rutas.post('/frminsertartra',controller.insertrans);
rutas.post('/frminsertarcon',controller.consignarcuen);
rutas.post('/frminsertarret',controller.retirarcue);
//rutas.post('/frminsertar',controller.insertar);//Permite que al inngresar los datos en el formulario, queden guardados y encriptados en la base;//permite que una pagina se redireccione a la vista de cliente
rutas.post('/frminsertar',controller.insertara);
rutas.post('/frminsertarcu',controller.insertarcu);
//rutas.get('/transferencia',controller.insertrans);
rutas.post('/actualizar',controller.actualizar);
rutas.post('/actualizarcu',controller.actualizarcu);
rutas.post('/actualizarus',controller.actualizarus);
rutas.post('/eliminar',controller.eliminar);
rutas.post('/eliminarcu',controller.eliminarcu);
rutas.get('/cerrar',controller.cerrar);


//Rutas cliente
rutas.post('/frminsertarcl',controllercliente.insertarcl);
rutas.post('/actualiza',controllercliente.actualizarcl);
rutas.post('/actualizacl',controllercliente.actualizarusc);
rutas.post('/elimina',controllercliente.eliminar);

//rutas lineas
rutas.post('/frminsertarli',controllerli.insertar);
//rutas.post('/actualizarli',controllerli.actualizarli)

//rutas credito
rutas.post('/frminsertarcre',controllercre.insertar);
rutas.post('/actualizarcre',controllercre.actualizarcre);
rutas.post('/eliminarcre',controllercre.eliminar);
module.exports=rutas
