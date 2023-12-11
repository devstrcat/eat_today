import React from "react";
import Intro from "./pages/Intro";
import Index from "./pages/Index";
import { Wrap } from "./styles/basic";
import { Route, Routes } from "react-router";
import RecipeMore from "./pages/RecipeMore";

const App = () => {
  return (
    <Wrap maxw={390} minw={320} minh={640}>
      <Routes>
        <Route path="/" element={<Intro />}></Route>
        <Route path="/meal" element={<Index />}></Route>
        <Route path="/meal/more" element={<RecipeMore />}></Route>
      </Routes>
    </Wrap>
  );
};

export default App;
