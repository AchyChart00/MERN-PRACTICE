const mongoose = require("mongoose");

const dbConnection= async ()=>{
    try {
        await mongoose.connect(process.env.MONGODB/* , {
            Opciones ya no necesarias en la versión 6

            useNewUrlParser:true,
            useCreateIndex:true
        } */)
        console.log("Base de datos online");
    } catch (error) {
        /* console.log("Error al inicializar base de datos"); */
        console.log(error);
        throw new Error("Error a la hora de iniciar la base de datos");
    }
}




module.exports={
    dbConnection, 
}