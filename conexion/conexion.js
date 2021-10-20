/*const mongoose=require('mongoose');
const user='root2';
const password='sofia2412';
const database='banco';
const uri=`mongodb+srv://<username>:${password}@cluster0.msg8f.mongodb.net/${database}?retryWrites=true&w=majority`
module.exports=()=>mongoose.connect(uri,{useNewUrlParser: true, useUnifiedTopology: true})*/


/*const mongoose=require('mongoose');
const user='root2';
const password='sofia2412';
const database='banco';
const uri=`mongodb+srv://${user}:${password}@cluster0.msg8f.mongodb.net/${database}?retryWrites=true&w=majority`


module.exports=()=>mongoose.connect(uri,{useNewUrlParser: true, useUnifiedTopology: true})*/

const mysql=require('mysql');//conecta la base de datos que se creo en mysql
module.exports=()=>
mysql.createConnection({
    host:'localhost',//nombre del host de la base
    user:'root',//nombre del user de la base
    password:'',//contraseña del user(si hay contraseña)
    database:'dbbancoh'//Nombre de la base de datos que se esta utilizando
})