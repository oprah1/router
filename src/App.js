import React, { Component } from 'react';
import { Route, BrowserRouter, Switch, NavLink } from 'react-router-dom';
// import { Link } from 'react-router-dom'
import Home from './Home';
import History from './History';


class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <NavLink exact to="/"> Accueil </NavLink>
                    <NavLink to="/notre-History" activeStyle={{color:'red'}}> History</NavLink>

                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/notre-History" component={History} />
                </Switch>
                
                </div>
            </BrowserRouter>
        )
    }
}

export default App;

