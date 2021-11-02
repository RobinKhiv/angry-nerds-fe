import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Navigation from '../navigation/navigation';
import LandingPage from '../../routes/landing/LandingPage';
import DashboardPage from '../../routes/dashboard/DashboardPage';
import RegistrationPage from '../../routes/registration/RegistrationPage';
import LoginPage from '../../routes/login/LoginPage';
import ContentPage from '../../routes/content/ContentPage';
import JwtService from '../../services/JwtService'; 
import './App.css';

function PrivateRoute({ component, ...props }) {
  const Component = component;
  return (
    <Route
      { ...props }
      render={ ({ history, match }, componentProps) =>
        !JwtService.getAuthToken() ? (
          <Redirect to={ "/" } />
        ) : (
            <Component history={ history } match={ match } { ...componentProps } />
          )
      }
    />
  );
}

function App() {
  return (
    <React.Fragment>
      <Navigation />
      <main>
        <Switch>
          <Route exact path={'/'} component={LandingPage} />
          <PrivateRoute path={'/dashboard'} component={DashboardPage} />
          <Route path={'/login'} component={LoginPage} />
          <Route path={'/Register'} component={RegistrationPage} />
          <PrivateRoute path={'/blog/:id'} component={ContentPage} />
        </Switch>  
      </main>  
    </React.Fragment>
  )
}

export default App;
