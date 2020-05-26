import React from 'react';
import Products from './containers/Products/Products'
import Layout from './hoc/Layout/Layout'
import Auth from './containers/Auth/Auth'
import Logout from './containers/Auth/Logout/Logout'
import SellerSignUp from './containers/SignUps/SellerSignUp/SellerSignUp'
import CustomerSignUp from './containers/SignUps/CustomerSignUp/CustomerSignUp'
import { Route , Switch }  from 'react-router-dom'
import asyncComponent from './hoc/asyncComponent/asyncComponent'
import SetAddress from './containers/SetAddress/SetAddress'

const asyncProfile = asyncComponent(() => {
  return import('./containers/UserProfile/CustomerProfile/CustomerProfile')
})

function App() {
  return (
    <div>
      <Layout>
        <Switch>
          <Route path="/add-address" component={SetAddress}/>
          <Route path="/my-profile" component={asyncProfile}/>
          <Route path="/signup/customer" component={CustomerSignUp}/>
          <Route path="/signup/seller" component={SellerSignUp}/>
          <Route path="/login" component={Auth}/>
          <Route path="/logout" component={Logout}/>
          <Route path="/" exact component={Products}/>
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
