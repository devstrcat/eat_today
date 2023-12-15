import React from "react";
import Intro from "./pages/Intro";
import Index from "./pages/Index";
import { Wrap } from "./styles/basic";
import { Route, Routes } from "react-router";
import RecipeMore from "./pages/RecipeMore";
import NotFound from "./pages/NotFound";

const App = () => {
  return (
    <Wrap width={320} minh={100}>
      <Routes>
        <Route path="/" element={<Intro />} />
        <Route path="/meal" element={<Index />}></Route>
        <Route path="/meal/more" element={<RecipeMore />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Wrap>
  );
};

export default App;
