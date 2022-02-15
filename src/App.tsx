import {
  BrowserRouter,
  Routes,
  Route,
  // Link
  Outlet
} from "react-router-dom";
import { Helmet } from "react-helmet";
import "./App.css";

import Home from "./Pages/Home/Home";
import Portfolio from "./Pages/Portfolio/Portfolio";
import Nav from "./Components/Nav/Nav";
import Theme from "./Components/Theme/Theme";
import NoPage from "./Components/NoPage/NoPage";

export default function App() {
  return (
    <>
      <Theme>
        <BrowserRouter>
          <Nav />
          <Routes>
              <Route index element={<Home />} />
              <Route path="portfolio" element={<Portfolio />} />
              <Route path="*" element={<NoPage />} />
          </Routes>
        </BrowserRouter>
      </Theme>
    </>
  );
}
