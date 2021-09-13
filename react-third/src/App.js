import './App.css';
import Home from './Home';
import About, {ContactUs} from './About';
import {Header} from './components/Header'
import {BrowserRouter, Switch, Route, Link} from 'react-router-dom'
import Charting from './components/Charting'
function App() {
  return (
    <>
    <BrowserRouter>
    <Header></Header>
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
        <Route path="/chart" exact component={Charting}></Route>
      </Switch>
     </BrowserRouter>
    </>
  )
}

export default App;
