const { Router } = require('express');
const country = require('./CountryRoute.js');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use("/country", country);


module.exports = router;
