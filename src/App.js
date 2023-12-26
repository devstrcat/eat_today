import React from "react";
import Intro from "./pages/Intro";
import Index from "./pages/Index";
import { Wrap } from "./styles/basic";
import { Route, Routes } from "react-router";
import RecipeMore from "./pages/RecipeMore";
import NotFound from "./pages/NotFound";
import RecipeWrite from "./pages/RecipeWrite";
import BookMark from "./pages/BookMark";
import RecipeEdit from "./pages/RecipeEdit";
import Member from "./pages/Member";

const App = () => {
  return (
    <Wrap width={320} minh={100}>
      <Routes>
        <Route path="/" element={<Intro />} />
        <Route path="/meal" element={<Index />}></Route>
        <Route path="/meal/write" element={<RecipeWrite />}></Route>
        <Route path="/meal/more/:imeal" element={<RecipeMore />} />
        <Route path="/meal/bookmark" element={<BookMark />}></Route>
        <Route path="/meal/member" element={<Member />}></Route>
        <Route path="/meal/edit/:imeal" element={<RecipeEdit />}></Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Wrap>
  );
};

export default App;
