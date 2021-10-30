import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Navigation from '../navigation/navigation';
import LandingPage from '../../routes/landing/LandingPage';
import DashboardPage from '../../routes/dashboard/DashboardPage';
import RegistrationPage from '../../routes/registration/RegistrationPage';
import LoginPage from '../../routes/login/LoginPage';
import ContentPage from '../../routes/content/ContentPage'; 
import './App.css';

function App() {
  return (
    <React.Fragment>
      <Navigation />
      <main>
        <Switch>
          <Route exact path={'/'} component={LandingPage} />
          <Route path={'/dashboard'} component={DashboardPage} />
          <Route path={'/login'} component={LoginPage} />
          <Route path={'/Register'} component={RegistrationPage} />
          <Route path={'/blog/:blogID'} component={ContentPage} />
        </Switch>  
      </main>  
    </React.Fragment>
  )
}

export default App;
