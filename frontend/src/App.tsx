import Login from "./pages/auth/login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Signup from "./pages/auth/sign-up";
import Home from "./pages/user/home";
import Profile from "./pages/user/profile";
import Layout from "./pages/layout";
import NewPost from "./pages/user/new-post";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" Component={Login} />
        <Route path="/sign-up" Component={Signup} />
        
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="profile" element={<Profile />} />
          <Route path="create-post" element={<NewPost />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
