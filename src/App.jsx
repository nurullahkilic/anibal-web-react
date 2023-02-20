import { Route, Routes } from "react-router-dom";

//Components
import Layout from "./views/Layout";
import Home from "./views/Home";
import Work from "./views/Work";
import SingleWork from "./views/SingleWork";
import Agency from "./views/Agency";
import Services from "./views/Services";
import NotFound from "./views/NotFound";
import Contact from "./views/Contact";

//Style
import "./App.css";
import { useEffect } from "react";

const App = () => {
  useEffect(() => {
    document.fonts.ready
      .then(() => {
        console.log("Fonts are loaded!!!");
      })
      .catch(() => {
        console.log("Error");
      });
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="services" element={<Services />} />
          <Route path="agency" element={<Agency />} />
          <Route path="contact" element={<Contact />} />
          <Route path="work">
            <Route index element={<Work />} />
            <Route path=":slug" element={<SingleWork />} />
          </Route>
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default App;
