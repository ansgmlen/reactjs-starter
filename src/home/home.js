import React, { Component } from 'react';


class Home extends Component {

  constructor(props) {
    super(props); //super allows you to access the constructor method of the parent class. The only reason to include props is to access this.props inside of your constructor.
    this.state = {
      date: new Date()
    };
  }
  componentDidMount() {
		console.log("home loaded");
	}
	openView(_viewName) {
		//window.open(CONFIG.currentEnv.endpoint + _viewName, '_self', false); //open home
	}
  render() {
    return (
      <div>
        <div>
          <h2>This is home</h2>
          <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
        </div>
      </div>
    );
  }
}


export default Home;
