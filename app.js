// Importaciones de módulos externos
const express = require('express');
const dotenv = require('dotenv');
const swaggerUi = require('swagger-ui-express');

// Importaciones de configuraciones y middlewares locales
const swaggerDocument = require('./swaggerOptions');
const loggerMiddleware = require('./middlewares/logger');
const routes = require('./routes/index'); // Asume un archivo index.js en la carpeta de rutas

// Configuración de las variables de entorno
// Decidir qué archivo .env usar basado en NODE_ENV y cargar las variables de entorno
const envFile = `.env.${process.env.NODE_ENV}`;
dotenv.config({ path: envFile });

// Configuración inicial de Express
const app = express();
const PORT = process.env.PORT || 3000; // Usar variable de entorno o valor predeterminado
const HOST = process.env.HOST || 'localhost';

// Middlewares
app.use(express.json()); // Para parsear el cuerpo de las peticiones JSON
app.use(loggerMiddleware); // Middleware personalizado para logging

// Rutas
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument)); // Documentación de la API con Swagger
app.use(routes); // Usar las rutas definidas en routes/index.js

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`La aplicación está escuchando en http://${HOST}:${PORT}`);
});
