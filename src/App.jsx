import { Route, Routes } from "react-router-dom";

//Components
import Layout from "./views/Layout";
import Home from "./views/Home";
import Work from "./views/Work";
import Agency from "./views/Agency";
import Services from "./views/Services";

//Style
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="services" element={<Services />} />
          <Route path="agency" element={<Agency />} />
          <Route path="work">
            <Route index element={<Work />} />
            <Route path=":workSlug" element={<Work />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
};

export default App;
