import { Route, Routes } from "react-router-dom";

//Components
import Layout from "./views/Layout";
import Home from "./views/Home";
import Menu from "./views/Menu";

//Style
import "./App.css"

const App = () => {
  return (
    <div className="App">
       <Routes>
        <Route path="/" element={<Layout />} >
          <Route index element={<Home />} />
          <Route path="ham" element={<Menu />} />
          <Route path="work" element={<Layout />} />
          <Route path="services" element={<Layout />} />
        </Route>
        {/* <Route path="/menu" element={<Menu />} /> */}
      </Routes>
    </div>
  );
};

export default App;
