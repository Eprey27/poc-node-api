// ./routes/index.js

const express = require('express');
const router = express.Router();

/**
 * @swagger
 * /:
 *   get:
 *     summary: Saludo inicial de la API
 *     description: Devuelve un mensaje de Hola Mundo.
 *     responses:
 *       200:
 *         description: Mensaje de bienvenida
 *         content:
 *           text/plain:
 *             schema:
 *               type: string
 *               example: ¡Hola Mundo!
 */
router.get('/', (req, res) => {
    res.send('¡Hola Mundo!');
});

/**
 * @swagger
 * /data:
 *   get:
 *     summary: Obtiene datos con retraso
 *     description: Devuelve un conjunto de datos después de un retraso simulado.
 *     responses:
 *       200:
 *         description: Datos obtenidos exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Datos obtenidos después de un retraso
 *                 data:
 *                   type: array
 *                   items:
 *                     type: integer
 *                   example: [1, 2, 3]
 */
router.get('/data', (req, res) => {
    setTimeout(() => {
        res.send({ message: 'Datos obtenidos después de un retraso', data: [1, 2, 3] });
    }, 2000); // Simula un retraso
});

/**
 * @swagger
 * /calculate:
 *   post:
 *     summary: Calcula la suma de dos números
 *     description: Realiza la suma de dos números y devuelve el resultado.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               a:
 *                 type: number
 *                 description: Primer número para sumar
 *                 example: 5
 *               b:
 *                 type: number
 *                 description: Segundo número para sumar
 *                 example: 3
 *     responses:
 *       200:
 *         description: Resultado de la suma
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: La suma de 5 y 3 es 8
 *       400:
 *         description: Error de validación
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Los valores deben ser números.
 */
router.post('/calculate', (req, res) => {
    const { a, b } = req.body;
    if (typeof a !== 'number' || typeof b !== 'number') {
        return res.status(400).send({ message: 'Los valores deben ser números.' });
    }
    const sum = a + b;
    res.send({ message: `La suma de ${a} y ${b} es ${sum}` });
});

module.exports = router;
