const express = require('express');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swaggerOptions');
const loggerMiddleware = require('./middlewares/logger');

const routes = require('./routes/index'); // Supone la existencia de un archivo index.js en la carpeta de rutas

const app = express();
const PORT = process.env.PORT || 3000; // Usar variable de entorno o default
const HOST = process.env.HOST || 'localhost';

app.use(express.json());
app.use(loggerMiddleware); // Middleware personalizado para logging

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Usar las rutas importadas
app.use(routes);

app.listen(PORT, () => {
    console.log(`La aplicación está escuchando en http://localhost:${PORT}`);
});
