import React from "react";
import Navbar from "./Shared/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

//Pages
const Home = React.lazy(() => import("./Pages/Home"));
const LogIn = React.lazy(() => import("./Pages/Login"));
const PageNotFound = React.lazy(() => import("./Utils/PageNotFound"));
const App = () => {
  const [loader, setLoader] = React.useState(true);
  React.useEffect(() => {
    setTimeout(() => {
      setLoader(false);
    }, 1000);
  }, []);
  return (
    <BrowserRouter>
      <div className={loader ? "loader" : "loaderNone"}>
        <div id="loading" title="Walid">
          Walid
        </div>
      </div>
      <React.Suspense fallback={<div>...load</div>}>
        <Navbar />
      </React.Suspense>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/log" element={<LogIn />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
