import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import "./App.css";

import Nav from "./Components/Nav/Nav";
import Theme from "./Components/Theme/Theme";
import NoPage from "./Components/NoPage/NoPage";
import Home from "./Pages/Home/Home";
import Portfolio from "./Pages/Portfolio/Portfolio";
import Github from "./Pages/Github/Github";
import ThreeJS from "./Pages/ThreeJS/ThreeJS";
import Discord from "./Pages/Discord/Discord";
import Config from "./Pages/Config/Config";

export default function App() {
  return (
    <>
      <Theme>
        <BrowserRouter>
          <Nav />
          <Routes>
              <Route index element={<Home />} />
              <Route path="portfolio" element={<Portfolio />} />
              <Route path="github" element={<Github />} />
              <Route path="threejs" element={<ThreeJS />} />
              <Route path="discord" element={<Discord />} />
              <Route path="config" element={<Config />} />
              <Route path="*" element={<NoPage />} />
          </Routes>
        </BrowserRouter>
      </Theme>
    </>
  );
}
