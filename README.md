
# PoC node.js API backend

Brief description of the project, its main functionality, and the problem it solves.

## Getting Started

These instructions will allow you to get a working copy of the project on your local machine for development and testing purposes.

### Prerequisites

Before you start, make sure you have Git installed to clone the repository:

```
git clone https://github.com/Eprey27/poc-node-api
cd poc-node-api
```

### Installation

To install the project dependencies, run the following command:

```
npm install
```

Then, set up the environment variables by duplicating the `.env.example` file for each environment:

```
cp .env.development
cp .env.test
cp .env.production
```

Make sure to configure the environment variables in each `.env` file according to the needs of your environment.

### Execution

Use the following commands to start the application in the desired environment:

#### Development

```
NODE_ENV=development
npm run dev
```

#### Testing

```
NODE_ENV=test
npm run test
```

#### Production

```
NODE_ENV=production
npm run start
```

## Running the tests

To run the automated tests for this system, use the following command:

```
npm test
```

## Deployment

Add additional notes on how to deploy this on a live system.

## Built With

* [Node.js](https://nodejs.org/) - JavaScript runtime environment.
* [Express](https://expressjs.com/) - Fast, minimalist, and flexible web framework for Node.js.

## Authors

* **Emilio Pérez** - *poc-node-api* - [Eprey27](https://github.com/Eprey27)

You may also want to list other contributors who have contributed to this project.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

* Thanks to anyone whose code was used.
* Inspiration.
* etc.
