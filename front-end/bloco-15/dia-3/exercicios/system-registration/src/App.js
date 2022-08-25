import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './pages/Home'
import Login from './pages/Login'
import Cadastro from './pages/Cadastro'
import ClientesCadastrados from './pages/ClientesCadastrados'
import './App.css';

class App extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={ Home } />
        <Route exact path="/login" component={ Login } />
        <Route exact path="/clientesCadastrados" component={ ClientesCadastrados } />
        <Route exact path="/cadastro" component={ Cadastro } /> 
      </Switch>
    );
  }
}
 

export default App;
