import Landing from './components/Landing/landing';
import './App.css';
import Nav from './components/Nav/nav';
// import { Nav } from 'react-bootstrap';

function App() {
  return (
    <>
      <div>
        <Nav></Nav>
        <Landing></Landing>
      </div>
      <div>
        {/* <Footer /> */}
      </div>  
    </>    
  );
}

export default App;
