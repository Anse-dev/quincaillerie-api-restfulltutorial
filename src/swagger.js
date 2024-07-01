
const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const express = require('express');
const path = require('path');
const router = express.Router();


const swaggerOptions = {
    swaggerDefinition: {
        openapi: '3.0.0',
        info: {
            title: 'API de gestion de quincaillerie',
            description: 'Documentation de l\'API pour gérer une quincaillerie',
            version: '1.0.0',
        },
    },
    apis: [path.join(__dirname, './routes/*.js')],
};

console.log(`Swagger options: ${JSON.stringify(swaggerOptions)}`);
const swaggerDocs = swaggerJsdoc(swaggerOptions);


router.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

module.exports = router;
