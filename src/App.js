import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router } from "react-router-dom";
import Sidebar from "./components/Sidebar/Sidebar";

function App() {
  return (
    <Router>
      <Sidebar />
      <Navbar />
    </Router>
  );
}

export default App;
