import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'

function App() {
  return (
    <Router>
        <Navbar/>
        <Route path='/' to='/'  exact component={Home}></Route>
        <Route path='/about' to='/about' exact component={About}></Route>
        <Route path='/contact' to='/contact' exact component={Contact}></Route>
    </Router>

  );
}

export default App;
