const express = require('express');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swaggerOptions');

const app = express();
const port = 3000;

app.use(express.json());

// Middleware para registrar información de la solicitud y el tiempo de ejecución
app.use((req, res, next) => {
    console.time(`Request-${req.method}-${req.url}`);
    console.log(`Received ${req.method} request for ${req.url}`);
    res.on('finish', () => {
        console.timeEnd(`Request-${req.method}-${req.url}`);
    });
    next();
});

// Swagger
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Definición de rutas con comentarios Swagger
/**
 * @swagger
 * /:
 *   get:
 *     summary: Ruta de bienvenida
 *     responses:
 *       200:
 *         description: Devuelve un saludo de bienvenida.
 */
app.get('/', (req, res) => {
    res.send('¡Hola Mundo!');
});

/**
 * @swagger
 * /data:
 *   get:
 *     summary: Obtiene algunos datos
 *     responses:
 *       200:
 *         description: Una lista de datos.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                 data:
 *                   type: array
 *                   items:
 *                     type: integer
 */
app.get('/data', (req, res) => {
    setTimeout(() => {
        res.send({message: 'Datos obtenidos después de un retraso', data: [1, 2, 3]});
    }, 2000); // Simula un retraso de 2 segundos
});

/**
 * @swagger
 * /calculate:
 *   post:
 *     summary: Realiza algunos cálculos
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               a:
 *                 type: number
 *               b:
 *                 type: number
 *             required:
 *               - a
 *               - b
 *     responses:
 *       200:
 *         description: Resultado del cálculo.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 */
app.post('/calculate', (req, res) => {
    const {a, b} = req.body;
    const sum = a + b;
    res.send({message: `La suma de ${a} y ${b} es ${sum}`});
});

app.listen(port, () => {
    console.log(`La aplicación está escuchando en http://localhost:${port}`);
});

