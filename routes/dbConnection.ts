import { Pool } from 'pg';

require('dotenv').config();

const connection = new Pool();

connection.connect((err) => {
    if (err) {
        return console.error('Error al conectar la base de datos')
    } else {
        return console.log('Se ha conectado a la base de datos de K8s')
    }
})

export { connection };