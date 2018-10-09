import React, { Component } from "react";
import { NavLink } from 'react-router-dom';


class History extends Component {
    render(){
        return(
            <div>
                
                <NavLink exact to="/"> Accueil </NavLink><br></br>
                <NavLink to="/notre-History" activeclassName="select"> Histoiry</NavLink>
                <h1>Notre Histore</h1>
            </div>
        )
    }
}

export default History; 
