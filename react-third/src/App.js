import './App.css';
import Home from './Home';
import About from './About';
import {BrowserRouter, Switch, Route, Link} from 'react-router-dom'
import {Navbar, Container, Nav} from 'react-bootstrap';
function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar>
      <Container>
        <Navbar.Brand>
          Hackerrank
        </Navbar.Brand>
        <Nav className="me-auto">
      <Nav.Link href="/">Home</Nav.Link>
      <Nav.Link href="/about">About</Nav.Link>
      </Nav>
      </Container>
    </Navbar>
    <nav>
          <ul>
            <li>
              {/* <a href="/">Home</a> */}
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </nav>
      <Switch>
        <Route path="/" exact component={Home}></Route>
        <Route path="/about" exact component={About}></Route>
      </Switch>
     </BrowserRouter>
    </>
  )
}

export default App;
