# Nombre del Proyecto

Breve descripción del proyecto, su funcionalidad principal y el problema que resuelve.

## Comenzando

Estas instrucciones te permitirán obtener una copia del proyecto en funcionamiento en tu máquina local para fines de desarrollo y pruebas.

### Pre-requisitos

Antes de comenzar, asegúrate de tener Git instalado para clonar el repositorio:

```
git clone https://github.com/Eprey27/poc-node-api
cd poc-node-api
```

### Instalación

Para instalar las dependencias del proyecto, ejecuta el siguiente comando:

```
npm install
```

Luego, configura las variables de entorno duplicando el archivo `.env.example` para cada entorno:

```
cp .env.example .env.development
cp .env.example .env.test
cp .env.example .env.production
```

Asegúrate de configurar las variables de entorno en cada archivo `.env` según las necesidades de tu entorno.

### Ejecución

Utiliza los siguientes comandos para iniciar la aplicación en el entorno deseado:

#### Desarrollo

```
NODE_ENV=development npm run dev
```

#### Pruebas

```
NODE_ENV=test npm run test
```

#### Producción

```
NODE_ENV=production npm run start
```

## Ejecutando las pruebas

Para ejecutar las pruebas automatizadas para este sistema, utiliza el siguiente comando:

```
npm test
```

## Despliegue

Agrega notas adicionales sobre cómo desplegar esto en un sistema en vivo.

## Construido con

* [Node.js](https://nodejs.org/) - Entorno de ejecución para JavaScript.
* [Express](https://expressjs.com/) - Infraestructura web rápida, minimalista y flexible para Node.js.

## Autores

* **Emilio Pérez** - *poc-node-api* - [Eprey27](https://github.com/Eprey27)

También puedes querer listar a otros colaboradores que hayan contribuido a este proyecto.

## Licencia

Este proyecto está licenciado bajo la Licencia XYZ - ver el archivo [LICENSE.md](LICENSE.md) para detalles.

## Reconocimientos

* Agradecimientos a cualquier persona cuyo código fue utilizado.
* Inspiración.
* etc.