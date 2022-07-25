import { Routes, Route } from "react-router-dom";

import Home from "./Pages/Home/Home";
import TopBar from "./components/TopBar/TopBar";
import Single from "./Pages/Single/Single";
import Write from "./components/Write/Write";
import Settings from "./components/Settings/Settings";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
// import Post from "./components/Post/Post";

function App() {
  let user = false
  return (
    <>
     <TopBar />
    <Routes>
     <Route path="/" element={<Home />} />
     <Route path="/register" element={user ? <Home /> : <Register />} />
     <Route path="/write" element={user ? <Write /> : <Register />} />
     <Route path="/settings" element={user ? <Settings /> : <Register />} />
     <Route path="/login" element={user ? <Home /> : <Login />} />
     <Route path="/post/:postId" element={<Single />} />

    </Routes>
    </>
  );
}

export default App;
