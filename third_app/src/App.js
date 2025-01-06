import './App.css';
import { DataProvider } from './components/contextUseCases/AccesingData/DataContext';
import DisplayData from './components/contextUseCases/AccesingData/DisplayData';
// import HomePage from './components/contextUseCases/Multilingual_support/HomePage';
// import { LangProvider } from './components/contextUseCases/Multilingual_support/LangContext';
// import { AuthProvider } from './components/contextUseCases/Authentication/AuthContext';
// import Home from './components/contextUseCases/Authentication/Home';
// import ThemeButton from './components/contextUseCases/Theming/ThemeButton';
// import { ThemeProvider } from './components/contextUseCases/Theming/ThemeContext';
// import { MemoryRoute } from './Routing/MemoryRoute';

// import Dependencies from './bootstrap/Dependencies';

// import { useState, React } from 'react';
// import { ContextApi } from './components/ContextApi';
// import Mycomponent from './components/Mycomponent';
// import { Routes, Route } from 'react-router-dom';
// import { Home } from './Routing/Home';
// import { About } from './Routing/About';
// import { NavBar } from './Routing/NavBar';



function App() {
  // const [text, setText] = useState(" ");
  return (
    <>
      <div className='App'>
        <>
        {/* execution of contextAPI */}
        {/* <ContextApi.Provider value={{text, setText}}>
           <Mycomponent/>
        </ContextApi.Provider> */}

        {/* execution of contextAPI themeing */}

        {/* <ThemeProvider>
          <div style={{padding: '20px', textAlign:'center'}}>
            <h1>Theme Switcher</h1>
            <ThemeButton/>
          </div>
        </ThemeProvider> */}

            {/* execution of contextAPI Authentication */}

                {/* <AuthProvider>
                  <Home/>
                </AuthProvider> */}

                {/* execution of contextAPI Authentication */}
          {/* <LangProvider>
              <HomePage/>
          </LangProvider> */}


  {/* execution of contextAPI Accesing Data From External Source */}

            <DataProvider>
              <DisplayData/>
            </DataProvider>


          {/* <NavBar/> 
           <Routes>
            <Route path='/home' element={<Home />}></Route>
            <Route path='/about' element={<About/>}></Route>
          </Routes> */}
        </>


        {/* <Dependencies /> */}

       
      </div>
    </>
  );
}

export default App;




// Below App is created for different types of Routing
// import logo from './logo.svg';
// import './App.css';

// import React from "react";
// import { MemoryRouter as Router, Route, Link, Routes } from "react-router-dom";
// // import { HashRouter as Router, Route, Link, Routes } from "react-router-dom";
// import Home from './Routing/Home';
// import About from './Routing/About';
// import Contact from './Routing/Contact';

// // import "./App.css";

// function App() {
//   return (
  
//     <div className="App">
     
//       <Router>
//         <div className="App">
//           {/* Navigation Links */}
//           <ul className="App-header">
//             <li>
//               <Link to="/">Home</Link>
//             </li>
//             <li>
//               <Link to="/about">About Us</Link>
//             </li>
//             <li>
//               <Link to="/contact">Contact Us</Link>
//             </li>
//           </ul>

//           {/* Route Switch */}
//           {/* <Switch> */}
//           <Routes>
//             <Route path="/" element={<Home />} />
//             <Route path="/about" element={<About />} />
//             <Route path="/contact" element={<Contact />} />
//           </Routes>
//         </div>
//       </Router>
//     </div>
//   );
// }

// export default App;
