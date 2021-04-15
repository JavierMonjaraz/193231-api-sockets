import { Router, Request, Response } from 'express';
import { Pool } from 'pg';

require('dotenv').config();

const pool = new Pool();

pool.connect((err) => {
    if (err) {
        return console.error('Error al conectar la base de datos')
    }else{
        return console.log('Se ha conectado a la base de datos de K8s')
    }
  })

const router = Router();

router.get('/mensajes', (req: Request, res: Response) => {
    res.json({
        ok: true,
        mensaje: 'GET listo!'
    });
});

router.post('/mensajes', (req: Request, res: Response) => {

    const cuerpo = req.body.cuerpo;
    const de = req.body.de;
    const ok = true;

    res.json({
        ok,
        cuerpo,
        de
        // mensaje: 'POST listo!'
    });
});

router.post('/mensajes/:id', (req: Request, res: Response) => {

    const cuerpo = req.body.cuerpo;
    const de = req.body.de;
    const id = req.params.id;
    const ok = true;

    res.json({
        ok,
        cuerpo,
        de,
        id
        // mensaje: 'POST listo!'
    });
});

export default router;