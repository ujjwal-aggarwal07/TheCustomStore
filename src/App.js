import './App.css';
import LandingPage from './Component/LandingPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './Component/NavBar';
import { useState } from 'react';
import EditingPage from './Component/EditingPage';
import Login from './Component/Login';


function App() {

  const [type,setType] = useState(null);
  return (
 <>
 <Login/>
 <NavBar handleLogoClick={setType}/>
 {type == null && <LandingPage handleClick={setType}/>}
 {type === "shirt" && <EditingPage type="shirt"/>}
 {type === "mug" && <EditingPage type="mug"/>}

 </>
  );
}

export default App;
