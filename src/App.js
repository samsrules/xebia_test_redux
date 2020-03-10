import React from 'react';
import Leftcorner from './component/Leftcorner';
import Content from './component/Content';
import Login from './component/Login';
import Reg from './component/Reg';
import Home from './component/Home';
import Footer from './component/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, withRouter, browserHistory, Switch, Route, Link, Redirect, useHistory, useLocation } from "react-router-dom";



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { loggedInStatus:"", users: "check", handleLoggin: null }
    //localStorage.setItem('Logged_In',"Loggged_In");

  }

  render() {
    const handleLoggin = localStorage.getItem('Logged_In');
    console.log(handleLoggin+'sfdsfdf');
    console.log(handleLoggin);
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path={"/"} render={
            props => ( (handleLoggin == 'Loggged_In') ? <Redirect to="/content" /> :
              <Home {...props} loggedInStatus={this.state.loggedInStatus} />
            )
          } />
          <Route exact path="/content" component={Content} />
          <Route exact path="/app" component={App} />
          <Route exact path="/reg" component={Reg} />
          <Route exact path="/footer" component={Footer} />
        </Switch>
      </BrowserRouter>

    );
  }
}







export default App;