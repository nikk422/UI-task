import "./App.css";
import Header from "./Componants/Header/Header";
import Sidebar from "./Componants/SideBar/Sidebar";
import Home from "./pagess/Home";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="main-contain">
        <Sidebar />
        <Home />
      </div>
    </div>
  );
}

export default App;
