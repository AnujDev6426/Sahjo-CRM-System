import Sidebar from "./components/Sidemenu";
import Topbar from "./components/Topbar";
import Dashboard from "./components/Dashboard";
function App() {
  return (
    <>
      <Topbar />
      <Sidebar>
        <Dashboard />
      </Sidebar>
    </>
  );
}

export default App;
