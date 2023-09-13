import './App.scss';
import {
  BrowserRouter as Router,
  Routes as Switch,
  Route,
} from 'react-router-dom';
import {
  Footer,
  Navbar
} from './Components';
import {
  About,
  Contact,
  Home,
  Login,
  Pricing
} from './Pages';

function App() {
  return (
    <Router>
      <div className='app-wrapper'>
        <Navbar />

        <Switch>
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/login' element={<Login />} />
          <Route path='/pricing' element={<Pricing />} />
          <Route path='/' element={<Home />} />
        </Switch>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
