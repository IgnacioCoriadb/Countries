const {Router} = require('express');
const {getCountry,getCountryId,getCountryQuery} = require('../controllers/countryContoller');


const router = Router();

//? todos los paises o pais pasado por query
router.get("/", async (req, res)=>{
    try{
        const {name} = req.query;
        if(!name){
            res.json( await getCountry());
        }else{
            res.json(await getCountryQuery(name));
        }
    }catch(err){
        res.json(err)
    }
});

//?pais pasado por id
router.get("/:id", async (req, res)=>{
    try{
        const {id} = req.params;
        const idM = id.toUpperCase();
    
        res.json( await getCountryId(idM));
    }catch(err){
        res.json(err)

    }
});




module.exports = router;