import logo from './logo.svg';
import './App.css';
import Home from './Pages/Home';
import About from './Pages/About';
import Profile from './Pages/Profile';
import {Usercontext} from './Context/Usercontext'
import {Route,Routes}  from 'react-router-dom'
import {useState } from "react"
import {Swiggy} from './Utils/Dummydata'


function App() {
  const [data, setData] = useState(Swiggy);
  return (
    <div>
     <Usercontext.Provider value={{ data, setData }}>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/profile" element={<Profile/>}></Route>
      </Routes>
     </Usercontext.Provider>
        
    </div>
  );
}

export default App;
