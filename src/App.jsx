import { BrowserRouter, Routes, Route } from "react-router-dom";

import Body from "./components/Body";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Profile from "./components/Profile";
import Connections from "./components/Connections";
import Requests from "./components/Requests";
function App() {
  return (
    <>
      <BrowserRouter basename="/">
        <Routes>
          <Route path="/" element={<Body />}>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/connections" element={<Connections />} />
            <Route path="/requests" element={<Requests />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <Navbar />
      <div className="text-3l font-bold">hello</div>
    </>
  );
}

export default App;
