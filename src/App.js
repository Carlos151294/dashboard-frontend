import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

// Styles
import './App.scss';

// Pages
import DashboardPage from './pages/dashboard/dashboard.component';
import LoginPage from './pages/loginpage/loginpage.component';

function App() {
  const { isLogged } = useSelector(state => state.auth);

  return (
    <div>
      <Switch>
        <Route exact path='/' render={() => isLogged ? (<Redirect to='dashboard' />) : (<Redirect to='login' />)} />
        <Route exact path='/login' render={() => isLogged ? (<Redirect to='dashboard' />) : (<LoginPage />)} />
        <Route exact path='/dashboard' render={() => isLogged ? (<DashboardPage />) : (<Redirect to='login' />) } />
      </Switch>
    </div>
  );
}

export default App;
