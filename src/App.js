import React, {Component} from 'react';
import{
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from 'react-router-dom';
import { Nav } from 'reactstrap';
import './App.css';
import Page from './components/Page';
import Home from './pages/Home';
import Cat from './pages/Cat';
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
          <h1>Home for Bad Pet Names</h1>
          <p>home info</p>
        <Nav>
          <p>pet names</p>
          <Link to="/cat">All The Cat Names</Link>
          <Link to="/dog">All The Dog Names</Link>
          <Link to="/fish">All The Fish Names</Link>
        </Nav>

        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/cat" component={Cat} />
          <Route path="/dog" component={Dog} />
          <Route path="/fish" component={Fish} />
        </Switch>
      </Router>
    );
  };
}

export default App;
