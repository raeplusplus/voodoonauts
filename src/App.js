import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/HomePage";
// import AlumniPage from "./pages/Alumni";
import SigninPage from "./pages/SigninPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" component={Home} exact />
        <Route path="/signin" component={SigninPage} />
      </Routes>
    </Router>
  );
}

export default App;
