import express, {Application} from 'express';

class Server {
    private app: Application;

    //Inicializa la clase
    constructor(){

    }

    //Configuracion de modulos
    config(): void {

    }

    //Configuracion de las rutas
    routes(){

    }
}

const server = new Server();

/* import express from 'express';
const app = express();
 
 DotEnv 
const dotenv = require('dotenv');
dotenv.config();
const port = process.env.PORT;
 
app.get('/', (req, res) => {
  res.send('Hello World!');
});
 
app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
}); */