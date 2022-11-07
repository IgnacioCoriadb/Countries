const {Router} = require('express');
const {postActivity} = require('../controllers/activitiesController');

const router = Router();

router.post('/', async function(req, res){
    try{
        const {name,difficulty,duration,season,countryId} = req.body;
    
        res.json(await postActivity(name,difficulty,duration,season,countryId));
    }catch(err){
        return res.json(err);
    }
});


module.exports = router;