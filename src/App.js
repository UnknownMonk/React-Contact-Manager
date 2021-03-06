import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from './context';

import Contacts from './components/constacts/Contacts';
import Header from './components/layout/Header';
import About from './components/pages/About';
import AddContact from './components/constacts/AddContact';
import EditContact from './components/constacts/EditContact';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import NotFound from './components/pages/NotFound';

class App extends Component {
  render() {
    return (
      <Provider>
        <Router>
          <div className="App">
            <Header branding="Contact Manager" />
            <div className="container">
              <Switch>
                <Route exact path="/" component={Contacts} />
                <Route exact path="/about" component={About} />
                <Route exact path="/contact/add" component={AddContact} />
                <Route exact path="/contact/edit/:id" component={EditContact} />
                <Route component={NotFound} />
              </Switch>
            </div>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
