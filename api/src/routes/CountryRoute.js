const {Router} = require('express');
const {getCountry} = require('../controllers/countryContoller');


const router = Router();

router.get("/", async (req, res)=>{
    try{
        res.json( await getCountry());
    }catch(err){
        return err;
    }
});


module.exports = router;