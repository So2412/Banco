//const { NOTIMP } = require('dns');
const express=require('express');
const morgan=require('morgan');
const app=express();
const path=require('path');
const session= require('express-session');
//const colors=require('colors')
app.use(morgan("dev"));
app.set('port',process.env.PORT || 3000)
//app.use(require('./conexion/conexion'));

app.use(express.static(path.join(__dirname,'public')));
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'vista'));
app.use(express.urlencoded({extended:true}));

app.use(session({
  secret:'123',//se pone una clave para que permita usar session
  resave:true,//valor por defecto que debe tener la sesion
  saveUninitialized:true
}))

app.use(require('./rutas/rutas'));//permite que las paginas se redireccionen a diferentes paginas




app.use((err,req,res,next)=>{
  res.send({err:err.mesage});
});

//console.log('Hola'.red)

/*const http=require('http');
const server=http.createServer((req,res)=>{
  console.log("En conexion")
  res.end("Conexion ok")
});
server.listen(3000,()=>{
    console.log("Esperando")
})*/
/*const express=require('express');
const morgan=require('morgan');
const app=express();
const path=require('path')
app.use(morgan('dev'));
app.use(require('./rutas/rutas'));
app.use(express.static(path.join(__dirname,'public')));
app.set('view engine', 'ejs');
app.set('views',path.join(__dirname,'vista'));
app.use((err,req,res,next)=>{
  res.send({err:err.message});

});*




//Servidor
app.set('port',process.env.PORT || 5000);


app.listen(app.get('port'),()=>{
console.log(`En el servidor ${app.get('port')}`);
})*/
//servidor
app.set('port',process.env.PORT || 3000);//permite conectar nuestra aplicacion a un servidor para que permita su ejecucion
app.listen(app.get('port'),()=>{
    console.log(`En el servidor ${app.get('port')}`);//avisa el numero del servidor en el que se encuentra
})
