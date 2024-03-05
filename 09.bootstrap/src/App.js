import './App.css';
import { Button, Navbar, Container, Nav } from 'react-bootstrap';
import logo from './logo.svg';
import Footer from './common/Footer';
import Header from './common/Header';

function App() {
  return (
    <div className="App">
      <Header/>
      <section>
        <img src={logo} className='App-logo' alt='logo'/>
      </section>
      <Footer/>
    </div>
  );
}

export default App;
