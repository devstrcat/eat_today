import React from "react";
import { Route, Routes } from "react-router";
import BookMark from "./pages/BookMark";
import Index from "./pages/Index";
import Intro from "./pages/Intro";
import Member from "./pages/Member";
import NotFound from "./pages/NotFound";
import NotFoundS from "./pages/NotFoundS";
import NotFoundSS from "./pages/NotFoundSS";
import RecipeEdit from "./pages/RecipeEdit";
import RecipeMore from "./pages/RecipeMore";
import RecipeWrite from "./pages/RecipeWrite";
import { Wrap } from "./styles/basic";
import User from "./pages/User";
import LogIn from "./pages/LogIn";

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
        <Route path="/meal/edit" element={<RecipeEdit />}></Route>
        <Route path="*" element={<NotFoundSS />} />
        <Route path="/meal/500" element={<NotFoundS />} />
        <Route path="/meal/400" element={<NotFound />} /> 
        <Route path="/meal/user" element={<User />} /> 
        <Route path="/meal/log" element={<LogIn/>}/>

   

      </Routes>
    </Wrap>
  );
};

export default App;
