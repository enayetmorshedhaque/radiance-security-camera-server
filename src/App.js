import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import './App.css';
import Registration from './Components/Shared/Auth/Registration/Registration';
import Login from './Components/Shared/Auth/Login/Login';
import Home from './Components/Pages/ClientHome/Home/Home';
import Header from './Components/Pages/Header/Header';
import Footer from './Components/Pages/Footer/Footer';
import Subscribe from './Components/Pages/Subscribe/Subscribe';
import AddNewProduct from './Components/Pages/AdminHome/AddNewProduct/AddNewProduct';
import Services from './Components/Pages/ClientHome/Services/Services';
import Pay from './Components/Pages/ClientHome/Pay/Pay';
import NotFound from './Components/Pages/NotFound/NotFound';
import SingleProduct from './Components/Pages/ClientHome/SingleProduct/SingleProduct';
import Checkout from "./Components/Pages/ClientHome/CheckOut/Checkout";
import AuthProvider from "./context/AuthProvider/AuthProvider";
import PrivateRoute from "./Components/Shared/Auth/PrivateRoute/PrivateRoute";
import MakeAdmin from "./Components/Pages/AdminHome/MakeAdmin/MakeAdmin";
import ManageAllOrders from "./Components/Pages/AdminHome/ManageAllOrders/ManageAllOrders";
import ManageProducts from "./Components/Pages/AdminHome/ManageProducts/ManageProducts";
import Cart from "./Components/Pages/ClientHome/Cart/Cart";
import OrderSummary from "./Components/Pages/ClientHome/OrderSummary/OrderSummary";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/register">
            <Registration></Registration>
          </Route>
          <Route path="/products">
            <Services></Services>
          </Route>
          <Route path="/product/:id">
            <SingleProduct></SingleProduct>
          </Route>
          <Route path="/cart">
            <Cart></Cart>
          </Route>
          <Route path="/order-summary">
            <OrderSummary></OrderSummary>
          </Route>
          <PrivateRoute path="/checkout">
            <Checkout></Checkout>
          </PrivateRoute>
          <PrivateRoute path="/pay">
            <Pay></Pay>
          </PrivateRoute>
          <PrivateRoute path="/manage-orders">
            <ManageAllOrders></ManageAllOrders>
          </PrivateRoute>
          <PrivateRoute path="/manage-products">
            <ManageProducts></ManageProducts>
          </PrivateRoute>
          <PrivateRoute path="/make-admin">
            <MakeAdmin></MakeAdmin>
          </PrivateRoute>
          <PrivateRoute path="/add-new-product">
            <AddNewProduct></AddNewProduct>
          </PrivateRoute>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Subscribe></Subscribe>
        <Footer></Footer>
      </Router>
    </AuthProvider>
  );
}

export default App;
