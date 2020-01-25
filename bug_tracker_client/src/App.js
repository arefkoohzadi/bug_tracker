import React from "react";
import { ToastContainer } from "react-toastify";
import { Route, Redirect, Switch } from "react-router-dom";
import Bugs from "./components/bugs";
import Ticket from "./components/ticket";
import NavBar from "./components/navBar";
import ProtectedRoute from "./components/common/protectedRoute";
import BugForm from "./components/bugForm";
import RegisterForm from "./components/registerForm";
import LoginForm from "./components/loginForm";
import Logout from "./components/logout";
import Footer from "./components/footer";
import NotFound from "./components/notFound";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

function App() {
  return (
    <div className="App">
      <React.Fragment>
        <ToastContainer />
        <NavBar />
        <main className="container-fluid">
          <Switch>
            <ProtectedRoute path="/bugs/:id" component={BugForm} />
            <Route path="/bugs" component={Bugs} />
            <Route path="/ticket" component={Ticket} />
            <Route path="/register" component={RegisterForm} />
            <Route path="/logout" component={Logout} />
            <Route path="/login" component={LoginForm} />
            <Route path="/notFound" component={NotFound} />
            <Redirect from="/" exact to="/bugs" />
            <Redirect from="/" exact to="/bugs" />
            <Redirect to="/notFound" />
          </Switch>
        </main>
        <Footer />
      </React.Fragment>
    </div>
  );
}

export default App;
