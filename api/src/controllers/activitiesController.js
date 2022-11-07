const {Activity,Country}  = require('../db');


//?----------------POST ACTIVITIES----------------
const postActivity = async(name,difficulty,duration,season,countryId) =>{
    try{
        const activityCreate = await Activity.create({
            name:name,
            difficulty:difficulty,
            duration:duration,
            season:season
        });
    
        countryId.forEach(async(country) =>{
            const countryDb = await Country.findAll({
                where: {
                    id: country
                }
            });
            await activityCreate.addCountry(countryDb);
        })
    }catch(e){
        return e;
    }
}

module.exports ={
    postActivity
}