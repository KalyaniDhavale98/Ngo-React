
import './App.css';
import Nav from "./components/nav";
import Home from "./components/home";
import Admin from './components/admin';
import About from './components/about';
import DonateNow from './components/donatenow';
import Footer from "./components/footer";
import Needy from "./components/needy/needypeople";
import AddNeedyPerson from './components/needy/addneedyperson';
import UpdateNeedyPerson from './components/needy/updateneedyperson';
import Address from './components/needy/address';
import Employee from './components/employee/employee';
import AddEmployee from './components/employee/addemployee';
import UpdateEmployee from './components/employee/updateemployee';
import EmployeeAddress from './components/employee/employeeaddress';
import "bootstrap/dist/css/bootstrap.css";
import{ Route, Switch, Redirect } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Nav/>
      <Switch>
        <Route path="/home" component={Home}/>
        <Route path="/donatenow" component={DonateNow}/>
        <Route path="/admin" component={Admin}/>
        <Route path="/about" component={About}/>
        <Route path="/footer" component={Footer}/>
        <Route path="/needypeople/add" component={AddNeedyPerson} />
        <Route path="/needypeople/address/:addressId" component={Address} />
        <Route path="/needypeople/update/:id" component={UpdateNeedyPerson} />
        <Route path="/needypeople" component={Needy} />
        <Route path="/employee/update/:employeeId" component={UpdateEmployee}/>
        <Route path="/employee/add" component={AddEmployee} />
        <Route path="/employee/get/address/:addressId" component={EmployeeAddress}/>
        <Route path="/employee" component={Employee} />

        
         <Redirect exact path="/" to={Home}/>
        </Switch>
    </div>
  );
}

export default App;