import React, {Component, Fragment} from 'react';
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';
import Films from './Films';
import Film from './Film';
import Home from './Home';
import Characters from './Characters';
import Character from './Character';
import Locations from './Locations';
import Location from './Location'

class App extends Component {
    render() {
        return (
            <Router>
                <Fragment>
                    <Link to="/">Home</Link>
                    <Link to='/films'>Films</Link>
                    <Link to='/characters'>Characters</Link>
                    <Link to='/locations'>Locations</Link>
                    <Switch>
                        <Route exact path="/" component={Home}></Route>
                        <Route exact path='/films' component={Films}></Route>
                        <Route exact path='/films/:id' component={Film}></Route>
                        <Route exact path='/characters' component={Characters}></Route>
                        <Route exact path='/characters/:id' component={Character}></Route>
                        <Route exact path='/locations' component={Locations}></Route>
                        <Route exact path='/locations/:id' component={Location}></Route>

                    </Switch>
                </Fragment>
            </Router>
        );
    }
}

export default App