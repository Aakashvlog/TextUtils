import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
// import About from './components/About';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  const [mode, setMode] = useState('light');
  const toggle = () => {
    mode === 'light' ? setMode('dark') : setMode('light');
  };
  return (
    // <>
    //   <Router>
    //     <div className={`container bg-${mode}`}>
    //       <Navbar mode={mode} toggle={toggle} />
    //       <Routes>
    //         <Route path="/about" element={<About />} />

    //         <Route
    //           path="/"
    //           element={<TextForm heading="Enter text here.." mode={mode} />}
    //         />
    //       </Routes>

    //       <About />
    //     </div>
    //   </Router>
    // </>
    <>
      <div className={`container bg-${mode}`}>
        <Navbar mode={mode} toggle={toggle} />

        <TextForm heading="Enter text here.." mode={mode} />
      </div>
    </>
  );
}

export default App;
