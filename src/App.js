import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import history from 'utils/history'

import Login from 'containers/Login'
import Register from 'containers/Register'
import Dashboard from 'containers/Dashboard'
import JudgementList from 'containers/Judgement/List'
import JudgementDetail from 'containers/Judgement/Detail'

import PrivateComponent from 'containers/Layout/ProtectedRoute'
import PublicComponent from 'containers/Layout/PublicRoute'

import NotFound from 'containers/NotFound'

function App() {
  return (
    <div className="App">
      <Router>
        <React.Suspense fallback="Loading">
          <Switch>
            <PublicComponent exact path="/" component={Login} />
            <PublicComponent exact path="/register" component={Register} />

            <PrivateComponent exact path="/dashboard" component={Dashboard} menu="dashboard" />
            <PrivateComponent exact path="/judgement" component={JudgementList} menu="judgement" />
            <PrivateComponent exact path="/judgement/:id" component={JudgementDetail} menu="judgement" />

            <Route path="*" component={NotFound} />
          </Switch>
         </React.Suspense>
      </Router>
    </div>
  );
}

export default App;
