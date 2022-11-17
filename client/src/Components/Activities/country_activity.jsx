import React from 'react';
import {Link} from "react-router-dom";

const CountryActivity =({activities})=>{

    if(activities && activities.length > 0) {
        
        
        return (

        <React.Fragment>
            <div>
             
                    {
                    activities.map(a=>
                        <ul  key={a.id}>
                            <li> <p>Actividad: {a.name}</p></li>
                            <li><p>Dificultad: {a.difficulty}</p></li>
                            <li><p>Duración: {a.duration} hs</p></li>
                            <li><p>Temporada: {a.season}</p></li>
                        </ul>
                    )
                }
             
            </div>
        </React.Fragment>
    ) 

    } else {
        return <Link  to="/activities"><button>Crear actividad</button></Link>
      }
}

export default CountryActivity;