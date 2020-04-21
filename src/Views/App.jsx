import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Menu from '../componets/Menu';
import Usuarios from './Usuarios'
import FatalError from '../componets/FatalError';
import '../index.css';

const Tareas = () => (<div>Traeas</div>)
const App = () => {
  return (
   <BrowserRouter>
    <Menu />
     <div className="margen">
      <Switch>
        <Route exact path="/"  component={Usuarios}  />
        <Route exact  path="/tareas"  component={Tareas} />
        <Route  component={FatalError} />
      </Switch>
     </div>
   </BrowserRouter>
  );
}

export default App;

