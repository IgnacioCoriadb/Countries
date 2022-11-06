const axios = require('axios');
const {Country} = require('../db');


const insertCountryDb = async () =>{
    try{
        const apiInfo = await axios.get("https://restcountries.com/v3/all");
        const apiData = apiInfo.data.map(p=>{
            return {
                id:  p.cca3,
                name: p.name.common,
                imgFlag: p.flags[0],
                continent: p.continents[0],
                capital: p.capital ? p.capital[0] :  "No se encontró la capital ", 
                subRegion: p.subregion,
                area: p.area,
                population: p.population
            }
        })
    
        Country.bulkCreate(apiData);
    }catch(err){
        return err;
    }
}


module.exports ={
    insertCountryDb
}