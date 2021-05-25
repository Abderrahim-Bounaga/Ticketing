import {BrowserRouter as Router,Route,Switch} from "react-router-dom"
import './App.css';
import Login from './pages/login'
import DashBordAdmin from './pages/Dashbord'
import NavBar from './components/navbar'
import ShowProfile from './pages/folderUser/showProfile'
import AddTicket from './pages/folderUser/addTicket'
// import Sidebar from './components/Sidebar'


function App() {
  return (
    <Router>
      <Switch> 
        <Route exact path="/" component={Login}/>
        <NavBar/>
        {/* <Sidebar/> */}
      </Switch>
    <Switch>
      <Route exact path="/dashAdmin" component={DashBordAdmin}/>
      <Route exact path="/showProfile" component={ShowProfile}/>
      <Route exact path="/addTicket" component={AddTicket}/>
      
     
      
    </Switch>
  </Router>
  );
}

export default App;
