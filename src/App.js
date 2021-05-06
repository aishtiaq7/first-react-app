import './App.css';
import About from './components/About'
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'

function App() {
  return (
    <Router>
        <Route path='/'  exact component={Navbar}></Route>
        <Route path='/about'  exact component={About}></Route>
    </Router>

  );
}

export default App;
