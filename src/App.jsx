import React from 'react';
import styles from "./App.module.css";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { Navbar } from './components/Navbar/Navbar';
import { Home } from './components/Home/Home';
import { About } from './components/About/About';
import { Services } from './components/Services/Services';
import { Contact } from './components/Contact/Contact';

// const App = () => {
//   return (
//     <div className={styles.App}>
//       <Router>
//         <Navbar />
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/about" element={<About />} />
//           <Route path="/services" element={<Services />} />
//           <Route path="/contact" element={<Contact />} />
//         </Routes>
//       </Router>
//     </div>
//   );  
// };

const App = () => {
  return (
    <div className={styles.App}>
        <Navbar />
        <Home />
        <Services />
        <About />
        <Contact />
    </div>
  );  
};

export default App;