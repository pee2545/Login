import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Loginform from "./component/LoginFrom/Loginform";

import Homepage from "./component/page/home";
import Signup from "./component/page/signup";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<Loginform />} />
          <Route path="home" element={<Homepage />} />
          <Route path="signup" element={<Signup />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
