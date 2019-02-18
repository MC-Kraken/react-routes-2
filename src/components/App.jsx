import React, {Component, Fragment} from 'react';
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';
import Films from './Films';
import Film from './Film';
import Home from './Home';
import Characters from './Characters';
import Character from './Character';
import Locations from './Locations';
import Location from './Location'
import Species from './Species'
import OneSpecies from './OneSpecies'

class App extends Component {
    render() {
        return (
            <Router>
                <Fragment>
                    <Link to="/">Home</Link>
                    <Link to='/films'>Films</Link>
                    <Link to='/people'>Characters</Link>
                    <Link to='/locations'>Locations</Link>
                    <Link to='/species'>Species</Link>
                    <Switch>
                        <Route exact path="/" component={Home}></Route>
                        <Route exact path='/films' component={Films}></Route>
                        <Route exact path='/films/:id' component={Film}></Route>
                        <Route exact path='/people' component={Characters}></Route>
                        <Route exact path='/people/:id' component={Character}></Route>
                        <Route exact path='/locations' component={Locations}></Route>
                        <Route exact path='/locations/:id' component={Location}></Route>
                        <Route exact path='/species' component={Species}></Route>
                        <Route exact path='/species/:id' component={OneSpecies}></Route>
                    </Switch>
                </Fragment>
            </Router>
        );
    }
}

export default App