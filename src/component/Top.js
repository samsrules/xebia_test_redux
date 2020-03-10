import React from 'react';
import Content from './Content'
import {
  BrowserRouter as Router, withRouter, browserHistory, Switch, Route, Link, Redirect,
  useHistory, useLocation
} from "react-router-dom";
class Top extends React.Component {

  constructor(props) {
    super(props);
    this.logout = this.logout.bind(this);
  }


  logout(event) {
    console.log(this.props);
    this.props.history.push('./');
    this.setState({ loggedInStatus: "Not_Loggged_In" });
    localStorage.setItem('Logged_In',"Not_Loggged_In");
    console.log(localStorage.getItem('Logged_In'));
    localStorage.clear();


  }


  render() {
    return (
      <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
     <p>{localStorage.getItem("Logged_username")}</p>
        

        <ul className="navbar-nav ml-auto">
          <li className="nav-item dropdown no-arrow d-sm-none">
            <a className="nav-link dropdown-toggle" href="#" id="searchDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <i className="fas fa-search fa-fw"></i>
              <p>{localStorage.getItem("Logged_username")}</p>
            </a>
            
          </li>
        
         
          <div className="topbar-divider d-none d-sm-block"></div>
          <li className="nav-item dropdown no-arrow">
            <a className="nav-link dropdown-toggle" href="#" id="userDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    <span onClick={this.logout} className="mr-2 d-none d-lg-inline text-gray-600 small">Logout</span> <p></p>
            
            </a>
            <div className="dropdown-menu dropdown-menu-right shadow animated--grow-in" aria-labelledby="userDropdown">
              <a className="dropdown-item" href="#">
                <i className="fas fa-user fa-sm fa-fw mr-2 text-gray-400"></i>
                Profile
          </a>
              <a className="dropdown-item" href="#">
                <i className="fas fa-cogs fa-sm fa-fw mr-2 text-gray-400"></i>
                Settings
          </a>
              <a className="dropdown-item" href="#">
                <i className="fas fa-list fa-sm fa-fw mr-2 text-gray-400"></i>
                Activity Log
          </a>
              <div className="dropdown-divider"></div>
              <a className="dropdown-item" href="#" data-toggle="modal" data-target="#logoutModal">
                <i className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
                Logout
          </a>
            </div>
          </li>
        </ul>
      </nav>);
  }

}

export default Top;