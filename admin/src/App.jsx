
import Sidebar from "./components/Sidemenu";
import Topbar from "./components/Topbar";
import Dashboard from "./components/Dashboard";
import Login from "./components/login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Login />}/>
          <Route path='/dash' element={<Dashboard/>}/>
        </Routes>
    </Router>
    </>
  );
}

export default App;
