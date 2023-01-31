import { Route, Routes } from "react-router-dom";

//Components
import Layout from "./views/Layout";
import Home from "./views/Home";
import HamburgerMenu from "./views/HamburgerMenu";

//Style
import "./App.css"

const App = () => {
  return (
    <div className="App">
       <Routes>
        <Route path="/" element={<Layout />} >
          <Route index element={<Home />} />
          <Route path="ham" element={<HamburgerMenu />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
