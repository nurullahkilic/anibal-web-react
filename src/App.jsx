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
import Careers from "./views/Careers";

//Style
import "./App.css";
import { useEffect, useState } from "react";
import Loading from "./components/Loading";

const App = () => {
  const [isFontsReady, setIsFontReady] = useState(false);
  useEffect(() => {
    document.fonts.ready
      .then(() => {
        setIsFontReady(true);
        console.log("Fonts are loaded!!!");
      })
      .catch(() => {
        setIsFontReady(true);
        console.log("Error");
      });
  }, []);

  if (!isFontsReady) return <Loading />;

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="services" element={<Services />} />
          <Route path="agency" element={<Agency />} />
          <Route path="contact" element={<Contact />} />
          <Route path="works" element={<Work />} />
          <Route path="careers" element={<Careers />} />
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
