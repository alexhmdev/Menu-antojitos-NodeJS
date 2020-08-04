//PUERTO
process.env.PORT = process.env.PORT || 3000;

//conexion a la db 
let urlDB = 'mongodb://localhost:27017/antojitos';
 
process.env.URLDB = urlDB;