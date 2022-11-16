import React, {useState,useEffect} from "react";
import {getCountries,createActivity} from "../../redux/actions/actions";
import { useDispatch,useSelector  } from "react-redux";
const FormActivities  = ()=>{

    const dispatch =useDispatch();	
    
    useEffect(()=>{
        dispatch(getCountries());
    },[dispatch]);

    const stateCountry = useSelector(state=> state.countries);
    //numeros del uno a el cinco 
    const difficulty = Array.from({length: 5}, (v,i)=> i+1);
    //temporadas
    const seasons = ['Summer','Autumn', 'Winter','Spring'];
  

    const [inputForm,setInputForm] = useState(
        {
            name:"",
            difficulty: difficulty[0],
            duration: "",
            season: seasons[0],
            countryId: []
        }
    );
    

    const handleChange =(e)=>{
        e.preventDefault();
        setInputForm({
            ...inputForm ,[e.target.name]:e.target.value,
        })
    }
    const pushCountryId =(e)=>{
        const value = e.target.value;
        const aux = inputForm.countryId;
        aux.push(value);
        setInputForm({
            ...inputForm,
            countryId: aux
        })
    }
    const handleSubmit =(e)=>{
        e.preventDefault();
        let form =true;
        if(inputForm.name.length === 0)form = false;
        if(inputForm.countryId.length === 0)form = false;
          
        if(form){
            dispatch(createActivity(inputForm));
            //limpiar formulario
            setInputForm({
                name:"",
                difficulty: difficulty[0],
                duration: "",
                season: seasons[0],
                countryId: []
            })
        }else{
            alert("Los campos nombre y país son obligatorios")
        }

       
    }

    return (
        <React.Fragment>

          
            <form onSubmit={(e) => handleSubmit(e)}>
                <div>
                    <label>Nombre</label>
                    <input type="text" name="name"  value={inputForm.name} onChange={(e) =>handleChange(e)}/>
                </div>
                <div>
                    <label>Dificultad</label>
                    <select name="difficulty" value={inputForm.difficulty} onChange={(e) => handleChange(e)}>
                        {
                           difficulty.map(difficulty => <option key={difficulty} value={difficulty}>{difficulty}</option>,
                           )
                        }
                    </select>
                </div>
                <div>
                    <label>Duración</label>
                    <input type="time" name="duration" value={inputForm.duration} onChange={(e) => handleChange(e)}></input>
                </div>
                <div>
                    <label>Temporadas</label>
                    <select name="season" value={inputForm.seasons} onChange={(e) => handleChange(e)}>
                        {
                            seasons.map(season => <option key={season} value={season}>{season}</option>)
                        }
                    </select>
                </div>
                <div>
                    <label>Selected Country</label>
                    <select name="countryId" value={inputForm.countryId} onChange={(e) => pushCountryId(e)} multiple={true}>
                        {
                            stateCountry.map(country => <option key={country.id} value={country.id}>{country.name}</option>)
                        } 
                    </select>
                </div>
                <div>
                    <input type="submit" value="Crear" />
                </div>
            </form>
        </React.Fragment>       
    )
}


export default FormActivities;