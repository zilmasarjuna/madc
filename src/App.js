import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Login from 'containers/Login'
import ForgotPassword from 'containers/ForgotPassword'
import ResetPassword from 'containers/ResetPassword'


import Register from 'containers/Register'
import Dashboard from 'containers/Dashboard'
// import JudgementList from 'containers/Judgement/List'
// import JudgementDetail from 'containers/Judgement/Detail'
// import RegisterPublisher from 'containers/Publisher/RegisterPublisher'
// import BookList from 'containers/Book/List'
// import BookCreate from 'containers/Book/Create'
import DaftarTamu from 'containers/Tamu/List'

import UsersList from 'containers/Users/List'

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
            <PublicComponent exact path="/forgot-password" component={ForgotPassword} />
            <PublicComponent exact path="/reset-password/:id" component={ResetPassword} />

            <PrivateComponent exact path="/dashboard" component={Dashboard} menu="dashboard" />
            <PrivateComponent exact path="/guest" component={DaftarTamu} menu="guest" />
            <PrivateComponent exact path="/users" component={UsersList} menu="users" />

            {/* <PrivateComponent exact path="/judgement" component={JudgementList} menu="judgement" /> */}
            {/* <PrivateComponent exact path="/judgement/:id" component={JudgementDetail} menu="judgement" /> */}
            {/* <PrivateComponent exact path="/publisher/register" component={RegisterPublisher} menu="profile" />  */}
            {/* <PrivateComponent exact path="/books" component={BookList} menu="books" /> */}
            {/* <PrivateComponent exact path="/books/create" component={BookCreate} menu="books" /> */}

            <Route path="*" component={NotFound} />
          </Switch>
         </React.Suspense>
      </Router>
    </div>
  );
}

export default App;
