import './App.css';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Login from './components/Login/Login';
import Home from './components/Home/Home'

function App() {
  

  return (
    <div className="App">
      <Router>
      <Routes>
          <Route exact path="/login" element={<Login/>}/>
          <Route exact path="/home" element={<Home/>}/>
          <Route path="/" element={<Login />} />
        </Routes>

        </Router>
        {/* <Login /> */}
    </div>
  );
}

export default App;
