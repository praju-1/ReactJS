// import './App.css';
// import { MemoryRoute } from './Routing/MemoryRoute';

// // import Dependencies from './bootstrap/Dependencies';

// // import { useState, React } from 'react';
// // import { ContextApi } from './components/ContextApi';
// // import Mycomponent from './components/Mycomponent';
// // import { Routes, Route } from 'react-router-dom';
// // import { Home } from './Routing/Home';
// // import { About } from './Routing/About';
// // import { NavBar } from './Routing/NavBar';




// function App() {
//   // const [text, setText] = useState(" ");
//   return (
//     <>
//       <div className='App'>
//         <>
//           {/* <NavBar/> */}
//           {/* <Routes>
//             <Route path='/home' element={<Home />}></Route>
//             <Route path='/about' element={<About/>}></Route>
//           </Routes> */}
//         </>


//         {/* <Dependencies /> */}

       
//       </div>
//     </>
//   );
// }

// export default App;


// import logo from './logo.svg';
import './App.css';

import React from "react";
import { MemoryRouter as Router, Route, Link, Routes } from "react-router-dom";
import Home from './Routing/Home';
import About from './Routing/About';
import Contact from './Routing/Contact';

// import "./App.css";

function App() {
  return (
  
    <div className="App">
     
      <Router>
        <div className="App">
          {/* Navigation Links */}
          <ul className="App-header">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <Link to="/contact">Contact Us</Link>
            </li>
          </ul>

          {/* Route Switch */}
          {/* <Switch> */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
