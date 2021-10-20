const mongoose=require('mongoose')
//const shema=mongoose.shema()
const {Schema}=mongoose
const clienteshe=new Schema({
    documento:String,
    nombre:String,
    apellido:String,
    correo:String,
    celular:String,
    sexo:String,
    fechanacimiento:String
})
const Clientes=mongoose.model('cliente',clienteshe)
/*module.exports=Clientes;*/ 