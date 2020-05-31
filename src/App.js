import React from 'react';
import Products from './containers/Products/Products'
import Layout from './hoc/Layout/Layout'
import Auth from './containers/Auth/Auth'
import Logout from './containers/Auth/Logout/Logout'
import CustomerDetail from './containers/SignUps/CustomerDetail/CustomerDetail'
import { Route , Switch }  from 'react-router-dom'
import asyncComponent from './hoc/asyncComponent/asyncComponent'
import SetAddress from './containers/SetAddress/SetAddress'
import EditProfile from './containers/EditDetails/EditProfile/EditProfile'
import UpdateMsg from './components/Updated/UpdateMsg'
import EditAddress from './containers/EditDetails/EditAddress/EditAddress'
import EditPassword from './containers/EditPassword/EditPassword'
import SellerSignUp from './containers/SignUps/SellerSignUp/SellerSignUp'
import ResendLink from './components/ResendLink/ResendLink'
import ProductVariation from './containers/Seller/ProductVariation/ProductVariation'
import AllSellers from './containers/Admin/AllSellers/AllSeller';
import AllCustomers from './containers/Admin/AllCustomers/AllCustomer'
import MetaData from './containers/Admin/AddCategoryMetaDataField/MetaData/MetaData';
import GetMetaData from './containers/Admin/GetMetadata/GetMetadata'
// import GetCategory from './containers/Admin/CategoryById/GetCategory/GetCategory';
import AddCategory from './containers/Admin/AddCategory/AddCategory'
import CategoryById from './containers/Admin/CategoryById/CategoryById'
import GetProduct from './containers/Admin/Product/GetProduct/GetProduct';
import GetProfile from './containers/Seller/GetProfile/GetProfile';
import UpdateProfile from './containers/Seller/UpdateProfile/UpdateProfile';
import UpdateAddress from './containers/Seller/UpdateProfile/UpdateAddress/UpdateAddress';
import AddProduct from './containers/Seller/Product/AddProduct/AddProduct';
import SellerProduct from './containers/Seller/Product/GetProducts/GetProduct'
import GetCategory from './containers/Seller/GetCategory/GetCategory';

const asyncProfile = asyncComponent(() => {
  return import('./containers/UserProfile/CustomerProfile/CustomerProfile')
})


function App() {
  return (
    <div>
      <Layout>
        <Switch>
          <Route path="/get-category" component={GetCategory}/>
          <Route path="/add/product-variation" component={ProductVariation}/>
          <Route path="/seller/products" component={SellerProduct}/>
          <Route path="/post/product" component={AddProduct}/>
          <Route path="/update-seller-address" component={UpdateAddress}/>
          <Route path="/updaet-seller-profile" component={UpdateProfile}/>
          <Route path="/seller-profile" component={GetProfile}/>
          <Route path="/all-product" component={GetProduct}/>
          <Route path="/add-category" component={AddCategory}/>
          <Route path="/get-category" component={CategoryById}/>
          <Route path="/get-metadata" component={GetMetaData}/>
          <Route path="/add-metadata" component={MetaData}/>
          <Route path="/admin/sellers" component={AllSellers}/>
          <Route path="/admin/customers" component={AllCustomers}/>
          <Route path="/resend-link" component={ResendLink}/>
          <Route path="/signup/seller" component={SellerSignUp}/>
          <Route path="/edit-profile/password" component={EditPassword}/>
          <Route path="/updated" exact component={UpdateMsg}/>
          <Route path="/edit-profile" exact component={EditProfile}/>
          <Route path="/edit-profile/address" component={EditAddress}/>
          <Route path="/add-address" component={SetAddress}/>
          <Route path="/my-profile" component={asyncProfile}/>
          <Route path="/signup/customer" component={CustomerDetail}/>
          <Route path="/login" component={Auth}/>
          <Route path="/logout" component={Logout}/>
          <Route path="/" exact component={ProductVariation}/>
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
