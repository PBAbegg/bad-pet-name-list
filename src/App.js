import React, {Component} from 'react';
import{
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from 'react-router-dom';
import {
  Nav,
  Navbar
 } from 'reactstrap';
import './App.css';
import Page from './components/Page';
import Home from './pages/Home';
import Cat from './pages/Cat';
import UpdateCat from './pages/UpdateCat'
import Dog from './pages/Dog';
import Fish from './pages/Fish';


class App extends Component{
  constructor(props)
  {
    super(props);
  }
  render ()
  {
    return(
      <Router>
        <h1 className="App">Home for Bad Pet Names</h1>
        <Nav className="Link">
            <Link to="/">Home</Link>
            <Link to="/cat">Cat Names</Link>
            <Link to="/dog">Dog Names</Link>
            <Link to="/fish">Fish Names</Link>
        </Nav>

        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/cat" component={Cat} />
          <Route exact path="/updatecat" component={UpdateCat} />
          <Route path="/dog" component={Dog} />
          <Route path="/fish" component={Fish} />
        </Switch>
      </Router>
    );
  };
}

export default App;
