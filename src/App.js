import React from 'react';
import Spinner from './components/UI/Spinner/Spinner'
import Layout from './hoc/Layout/Layout'
import Auth from './containers/Auth/Auth'
import Logout from './containers/Auth/Logout/Logout'
import SellerSignUp from './containers/SignUps/SellerSignUp/SellerSignUp'
import CustomerSignUp from './containers/SignUps/CustomerSignUp/CustomerSignUp'
import { Route , Switch }  from 'react-router-dom'


function App() {
  return (
    <div>
      <Layout>
        <Switch>
          <Route path="/signup/customer" component={CustomerSignUp}/>
          <Route path="/signup/seller" component={SellerSignUp}/>
          <Route path="/login" component={Auth}/>
          <Route path="/logout" component={Logout}/>
          <Route path="/" exact component={Spinner}/>
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
