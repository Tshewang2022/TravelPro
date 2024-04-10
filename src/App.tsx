// import React from "react";
import { Routes, Route } from "react-router-dom";
import {
  AboutUs,
  Blog,
  Contacts,
  Destinations,
  Home,
  Tours,
} from "./roots/pages";
import RootLayouts from "./roots/RootLayouts";
const App = () => {
  return (
    <div>
      <Routes>
        <Route element={<RootLayouts />}>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/tours" element={<Tours />} />
          <Route path="/destinations" element={<Destinations />} />
          <Route path="/contactus" element={<Contacts />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
