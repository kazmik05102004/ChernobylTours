import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Main from './components/Main';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import ExcursionGeneral from './components/ExcursionGeneral';
import ExcursionChoose from './components/ExcursionChoose';
import Checkout from './components/Checkout';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Main}/>
        <Route path="/signIn" component={SignIn}/>
        <Route path="/signUp" component={SignUp}/>
        <Route exact path="/excursionGeneral" component={ExcursionGeneral}/>
        <Route exact path="/excursionGeneral/excursionChoose" component={ExcursionChoose}/>
        <Route path="/excursionGeneral/excursionChoose/order/:id" component={Checkout}/>
      </Switch>
    </Router> 
);}

export default App;
