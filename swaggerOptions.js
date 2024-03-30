const swaggerJsdoc = require('swagger-jsdoc');

const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Mi API Compleja',
            version: '1.0.0',
            description: 'Una descripción detallada de mi API con Node.js y Express',
        },
        servers: [
            {
                url: 'http://localhost:3000',
                description: 'Servidor de Desarrollo',
            },
        ],
    },
    // Ruta a tus archivos de rutas de Express. Asegúrate de ajustar esto a tus necesidades.
    apis: ['./app.js'], // Ajusta este camino según dónde se encuentren tus rutas.
};

const specs = swaggerJsdoc(options);
module.exports = specs;
