import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, createContext } from "react";
import { Home } from "./pages/Home";
import { Profile } from "./pages/Profile";
import { Contact } from "./pages/Contact";
import { Navbar } from "./pages/Navbar";

export const AppContext = createContext();
function Class8() {
  const [username, setUsername] = useState("Nazeer");
    return (
      <div>
        <AppContext.Provider value={{username, setUsername}}>
          <Router>
            <Navbar />
            <Routes>
              <Route path="/" element={<Home/>} />
              <Route path="/profile" element={<Profile/>}/>
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<h1>Page not found</h1>} />
            </Routes>
          </Router>
        </AppContext.Provider>
      </div>
    );
}

export default Class8;
