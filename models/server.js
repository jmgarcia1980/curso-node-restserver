const express = require('express');
const cors = require('cors');
 

class Server {

    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.usuarioPath = '/api/usuario';


        //midlewares
        this.middlewares();

        //ruters
        this.routers();
    }

    middlewares() {

        //CORS
        this.app.use( cors() );

        //Lectura y parseo del JSON
        this.app.use( express.json() ) //Toma el JSON que viene en el body

        //muestro la carpeta publica con el index que alli tiene
        this.app.use( express.static('public') );

    }

    routers() { 

        this.app.use(this.usuarioPath , require('../routes/usuario'));

    }

    listen() {
        this.app.listen( this.port, () =>{
            console.log('Servidor corriendo en el puerto: ', this.port);
          } );
          
    }


}


module.exports = Server;