import React from 'react';
import { Route, withRouter } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import Watch from './components/Watch/Watch';
import Listen from './components/Listen/Listen';
import Connect from './components/Connect/Connect';
import Contact from './components/Contact/Contact';

class App extends React.Component {

  handleIntro = (event) => {
    event.preventDefault(); 
    this.props.history.push('/home'); 
  }

  render() {
    return (
      <div className="App">
        {/* <Route
        exact path="/"
        render={(props) => (
          <Intro {...props} handleIntro={this.handleIntro} />
        )} /> */}
        <Route 
        exact path="/"
        component={Home}/>
        <Route 
        path="/watch"
        component={Watch}/>
        <Route 
        path="/listen"
        component={Listen}/>
        <Route 
        path="/connect"
        component={Connect}/>
        <Route 
        path="/contact"
        component={Contact}/>
      </div>
    )
  }
}

export default withRouter(App);

