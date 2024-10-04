import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../redux/Home";
import Card from "../redux/Card";
import Navbar from "./components/Navbar";
import { Provider } from "react-redux";
import { Store } from "../redux/Store";
 

function App() {
  return (
     <Provider store={Store}>
     <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path="/"  element={<Home/>}/>  
        <Route path="/card"  element={<Card/>}/>  
      </Routes>
    </BrowserRouter>

     </Provider>
  );
}

export default App;