import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

// Styles
import './App.scss';

// Pages
import DashboardPage from './pages/dashboard/dashboard.component';
import LoginPage from './pages/loginpage/loginpage.component';
import Header from './components/header/header.component';
import ContactPage from './pages/contactpage/contactpage.component';

function App() {
  const { isLogged } = useSelector(state => state.auth);

  return (
    <main className="app-container">
      <Header />
      <Switch>
        <Route exact path='/' render={() => isLogged ? (<Redirect to='dashboard' />) : (<Redirect to='login' />)} />
        <Route path='/login' render={() => isLogged ? (<Redirect to='dashboard' />) : (<LoginPage />)} />
        <Route path='/dashboard' render={() => isLogged ? (<DashboardPage />) : (<Redirect to='login' />)} />
        <Route path='/contact' component={ContactPage} />
        <Route render={() => <Redirect to='login' />} />
      </Switch>
    </main>
  );
}

export default App;
