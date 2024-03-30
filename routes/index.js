const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('¡Hola Mundo!');
});

router.get('/data', (req, res) => {
    setTimeout(() => {
        res.send({ message: 'Datos obtenidos después de un retraso', data: [1, 2, 3] });
    }, 2000); // Simula un retraso
});

router.post('/calculate', (req, res) => {
    const { a, b } = req.body;
    if (typeof a !== 'number' || typeof b !== 'number') {
        return res.status(400).send({ message: 'Los valores deben ser números.' });
    }
    const sum = a + b;
    res.send({ message: `La suma de ${a} y ${b} es ${sum}` });
});

module.exports = router;
