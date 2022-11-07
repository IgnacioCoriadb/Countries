const { Router } = require('express');
const country = require('./CountryRoute.js');
const activities = require("./ActivitiesRoute.js");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use("/countries", country);
router.use("/activities", activities);


module.exports = router;
