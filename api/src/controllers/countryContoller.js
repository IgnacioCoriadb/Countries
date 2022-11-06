const axios = require('axios');
const {Country, Activity} = require('../db');
const { Op } = require("sequelize");


//?--------------------GET-COUNTRIES--------------------
const getCountry = async ()=>{
    try{
        const countriesDb = await Country.findAll({include: Activity});
        return countriesDb;
    }catch(e){
        return e;
    }
}

//?----------------GET-COUNTRIES/{idPais}----------------
const getCountryId = async (id)=>{
    try{
        const countriesIdDb = await Country.findByPk(id,{include: Activity});
        return countriesIdDb
    }catch(e){
       return e;
    }
   
}

//?------------GET-COUNTRIES/countries?name"..."----------------
const getCountryQuery = async(name)=>{
    try{
        const countriesQueryDb = await Country.findAll({
            where: {
                name:{
                    [Op.like]: `%${name}%`
                } 
            }
        }, {include:Activity});
    
        if(countriesQueryDb.length === 0) return `No existe ningún país con el nombre ${name}`;
        return countriesQueryDb;
    }catch(e){
        return e;
    }
}

module.exports = {
    getCountry,
    getCountryId,
    getCountryQuery
}