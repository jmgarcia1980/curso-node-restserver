require('dotenv').config();


const Server = require('./models/server');


// npm i express dotenv corse

const server = new Server;

 
server.listen();
