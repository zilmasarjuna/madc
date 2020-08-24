import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import history from 'utils/history'

import Login from 'containers/Login'
import Register from 'containers/Register'
import Dashboard from 'containers/Dashboard'

import PrivateComponent from 'containers/Layout/ProtectedRoute'
import PublicComponent from 'containers/Layout/PublicRoute'

function App() {
  return (
    <div className="App">
      <Router>
        <React.Suspense fallback="Loading">
          <Switch>
            <PublicComponent exact path="/login" component={Login} />
            <PublicComponent exact path="/register" component={Register} />

            <PrivateComponent exact path="/dashboard" component={Dashboard} />
          </Switch>
         </React.Suspense>
      </Router>
    </div>
  );
}

export default App;
