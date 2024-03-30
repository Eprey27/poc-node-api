const express = require('express');
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
})

// Simular una operación de base de datos con un retraso
app.get('/data', (req, res) => {
  setTimeout(() => {
    res.send({ message: 'Datos obtenidos después de un retraso', data: [1, 2, 3] });
  }, 2000); // Simula un retraso de 2 segundos
});

// Realizar algunos cálculos
app.post('/calculate', (req, res) => {
  const { a, b } = req.body;
  const sum = a + b;
  res.send({ message: `La suma de ${a} y ${b} es ${sum}` });
});

// Ruta de prueba para asegurarnos de que nuestra API está funcionando
app.get('/', (req, res) => {
  res.send('¡Hola Mundo!');
});

// Añade aquí más rutas para tu API...

app.listen(port, () => {
  console.log(`La aplicación está escuchando en http://localhost:${port}`);
});
