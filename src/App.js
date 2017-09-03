import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
//https://reacttraining.com/react-router/web/guides/quick-start
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import Home from './home/home';
import Login from './login/login';

/*
class NoMatch extends Component {
  render() {
    return (
      <div>error</div>
    );
  }
}
class SideMenu extends Component {
  render() {
    return (
      <div>SideMenu</div>
    );
  }
}
*/

class Header extends Component {
  render() {
    return (
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Welcome to React</h2>
      </div>
    );
  }
}



class App extends Component {
  constructor(props) {
    super(props); //super allows you to access the constructor method of the parent class. The only reason to include props is to access this.props inside of your constructor.
    this.state = {
      date: new Date(),
      isLoggedIn:false,
    };
  }
  componentDidMount() {
		console.log("App loaded");
    this.auth();
	}
  auth(){
    this.setState({isLoggedIn:false});
  }
  openView(_history){
    _history.push('/login');
    //window.open("http://localhost:3000/", '_self', false); //open home

  }

  render() {

    const isLoggedIn = this.state.isLoggedIn;

    return (
      <Router>

        <div className="App">
        <Header />
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/login">Login</Link></li>
        </ul>
        <hr/>

        <Route exact path="/" component={Home}/>
        <Route path="/login" component={Login}/>

        <Route render={ ({history}) => (
          <button type='button' onClick={() => this.openView(history)} >
          Click Me!
          </button>
        )} />

        <Route render={({ history}) => (
          <button type='button' onClick={() => { history.push('/') }} >
             Click Me2!
          </button>
        )} />


        </div>
      </Router>
    );
  }
}

export default App;
