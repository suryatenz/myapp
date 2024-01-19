import React from "react";
import Home from "./pages/Home";
import Data from "./pages/Data";

import {
  BrowserRouter,
  Routes,
  Route,
}from "react-router-dom";
function App() {
   return (
   <>
        <BrowserRouter>
        <Routes>
          <Route  path = "/"
            element = {<Home/>}/>
          <Route path="/Home"
            element = {<Home/>}/>    
          <Route
            path = "/Aboutus"
            element = {<Data/>}/>
        </Routes>
        </BrowserRouter>
   </>
  );
}

export default App;
