import React from 'react';
import {Navigate, Route, Routes} from "react-router-dom";

import {MainLayout} from "./layouts";
import {MainPage, MovieListPage, SearchPage} from "./pages";
import {MovieInfo} from "./components";

function App() {
  return (
    <Routes>
       <Route path={''} element={<MainLayout/>}>
           <Route index element={<MainPage/>}/>
           <Route path={'discover/movie'} element={<MovieListPage/>}/>
           <Route path={'discover/movie:id'} element={<MovieInfo/>}/>
           <Route path={'search'} element={<SearchPage/>}/>

       </Route>
    </Routes>
  );
}

export default App;
