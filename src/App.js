import AuthProvider from "./contexts/AuthProvider";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import NoMatch from "./components/NoMatch/NoMatch";
import Login from "./components/Login/Login";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import OrderPlace from "./components/OrderPlace/OrderPlace";
import AddService from "./components/AddService/AddService";
import ManageAllOrders from "./components/ManageAllOrders/ManageAllOrders";
import MyOrders from "./components/MyOrders/MyOrders";
import ApprovedOrder from "./components/ApprovedOrder/ApprovedOrder";
import ContactForm from "./components/ContactForm/ContactForm";

function App() {
  return (
    <div className="App">
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
            <PrivateRoute path="/add/service">
              <AddService></AddService>
            </PrivateRoute>
            <PrivateRoute path="/order/:serviceId">
              <OrderPlace></OrderPlace>
            </PrivateRoute>
            <PrivateRoute path="/manageAllOrders">
              <ManageAllOrders></ManageAllOrders>
            </PrivateRoute>
            <PrivateRoute path="/myOrders">
              <MyOrders></MyOrders>
            </PrivateRoute>
            <PrivateRoute path="/approved/order">
              <ApprovedOrder></ApprovedOrder>
            </PrivateRoute>
            <PrivateRoute path="/contactUs">
              <ContactForm></ContactForm>
            </PrivateRoute>
            <Route path="*">
              <NoMatch></NoMatch>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
