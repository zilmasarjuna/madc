import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Login from 'containers/Login'
import Register from 'containers/Register'

import PrivateComponent from 'containers/Layout/ProtectedRoute'

function App() {
  return (
    <div className="App">
      <Router>
        <React.Suspense fallback="Loading">
          <Switch>
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />

            <PrivateComponent exact path="/dashboard" component={Register} />
          </Switch>
         </React.Suspense>
      </Router>
    </div>
  );
}

export default App;
