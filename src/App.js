
import './App.css';
import Nav from "./components/nav";
import Home from "./components/home";
import Admin from './components/admin';
import Employee from './components/employee';
import About from './components/about';
import "bootstrap/dist/css/bootstrap.css";
import{ Route, Switch, Redirect } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Nav/>
      <Switch>
        <Route path="/home" component={Home}/>
        <Route path="/admin" component={Admin}/>
        <Route path="/employee" component={Employee}/>
        <Route path="/about" component={About}/>
        <Redirect exact path="/" to={Home}/>
        </Switch>
    </div>
  );
}

export default App;