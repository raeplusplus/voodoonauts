import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
// import AlumniPage from "./pages/Alumni";
import SigninPage from "./pages/Signin";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" component={Home} exact />
        <Route path="/signin" component={SigninPage} exact />
      </Routes>
    </Router>
  );
}

export default App;
