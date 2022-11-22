import "./App.css";
import Login from "./component/Login";
import Interface from "./component/Interface";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      
      <Router>
        <Routes>
          <Route path="/" element={<Login />}/>
          <Route path="/chats" element={<Interface />}/> 
        </Routes>
      </Router>
    </div>
  );
}

export default App;
