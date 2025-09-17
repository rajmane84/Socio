import Login from "./pages/auth/login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Signup from "./pages/auth/sign-up";
import Home from "./pages/user/home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" Component={Login} />
        <Route path="/sign-up" Component={Signup} />
        <Route path="/" Component={Home} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
