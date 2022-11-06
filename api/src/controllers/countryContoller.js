const axios = require('axios');
const {Country, Activity} = require('../db');

//?--------------------GET-COUNTRIES--------------------
const getCountry = async ()=>{
    try{
        const countriesDb = await Country.findAll({include: Activity});
        return countriesDb;
    }catch(e){
        return e;
    }
}




module.exports = {
    getCountry
}