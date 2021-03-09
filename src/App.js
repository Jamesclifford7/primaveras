import { Route, withRouter } from 'react-router-dom'
import './App.css';
import Intro from './components/Intro/Intro'
import Home from './components/Home/Home'
import Watch from './components/Watch/Watch'
import Listen from './components/Listen/Listen'
import Connect from './components/Connect/Connect'

function App() {
  return (
    <div className="App">
      {/* <Route exact path="/" component={Intro}/> */}
      <Route
      exact path="/"
      render={(props) => (
        <Intro {...props} />
      )} />
      <Route 
      path="/home"
      component={Home}/>
      <Route 
      path="/watch"
      component={Watch}/>
      <Route 
      path="/listen"
      component={Listen}/>
    </div>
  );
}

export default withRouter(App);
