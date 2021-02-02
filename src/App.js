import './components/Button/button.scss';
import './components/components.css';
import './App.css';
import SignIn from './components/SignIn/SignIn';
import SignUp from './components/SignUp/SignUp';
import { HashRouter as Router, Route, NavLink, Switch, Redirect } from 'react-router-dom';

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/sign-in" component={SignIn}></Route>
          <Route path="/sign-up" component={SignUp}></Route>
          <Route path="/" exact render={() => <Redirect to="/sign-in" />} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;