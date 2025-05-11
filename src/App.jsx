import React from "react";

import { Route,Routes } from "react-router";
import Callback from "./Component/Callback";
import CreatePlaylist from "./Component/CreatePlaylist";
import Home from "./Component/Home";

const App = () => {
 

  return (
    <div
     
    >
  
<Routes>
  <Route path="/callback" element={<Callback/>}></Route>
  <Route path="/" element={<Home/>}></Route>
  <Route path="/playlist-create" element={<CreatePlaylist/>}></Route>

</Routes>

    </div>
  );
};




export default App
