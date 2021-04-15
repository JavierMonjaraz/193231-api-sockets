import { Router, Request, Response } from 'express';
import { connection } from '../global/dbConnection'

const router = Router();

router.get('/mensajes', (request: Request, response: Response) => {
    const consulta = 'SELECT * FROM public.mensajes';

    connection.query(consulta).then(res => {
        response.status(201).json(res.rows);
    }).catch(e => console.error(e.stack));
});

router.post('/mensajes', (request: Request, response: Response) => {
    const consulta = 'INSERT INTO public.mensajes(de, cuerpo) VALUES ($1, $2);'

    const cuerpo = request.body.cuerpo;
    const de = request.body.de;
    const ok = true;

    connection.query(consulta, [de, cuerpo]).then(res => {
        response.status(201).json(res);
    }).catch(e => console.error(e.stack));
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