import React from 'react';
import Button from '@material-ui/core/Button';
import { SignIn } from './pages/SignIn/SignIn';
import { Route, Switch } from 'react-router-dom';
import { Home } from './pages/Home/Home';


function App() {
  return (
    <div>
      <Switch>
        <Route path="/signin" component={SignIn}/>
        <Route path='/' component={Home}/>
      </Switch>
    </div>
  );
}

export default App;
