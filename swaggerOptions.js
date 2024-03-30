const swaggerJsdoc = require('swagger-jsdoc');

// Utiliza el puerto de la variable de entorno o el predeterminado
const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST || 'localhost';

const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Mi API Compleja',
            version: '1.0.0',
            description: 'Una descripción detallada de mi API con Node.js y Express',
        },
        // Configura dinámicamente el servidor de Swagger para usar el puerto actual
        servers: [
            {
                url: `http://${HOST}:${PORT}`,
                description: 'Servidor de Desarrollo',
            },
        ],
    },
    apis: ['./app.js'], // Asegúrate de que esta ruta apunte a tus archivos de ruta
};

const specs = swaggerJsdoc(options);
module.exports = specs;
