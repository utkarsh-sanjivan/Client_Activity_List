import React from 'react'
import { Route, Switch, HashRouter } from 'react-router-dom';
import Header from './components/Header/index';
import ClientList from './container/ClientList/index';

const Routing = props => (
  <div>
    <Header />
    <HashRouter basename='/'>
      <Switch>
        <Route exact path="/" component={ClientList} />
        <Route exact path="*" component={ClientList} />
      </Switch>
    </HashRouter>
  </div>
)

export default Routing;
