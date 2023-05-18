import React from 'react';
import {Route, Routes} from "react-router-dom";

import {MainLayout} from "./layouts";
import {MainPage, MovieDetailsPage, MovieListPage} from "./pages";
import './styles/global.css'
import {SearchMovie} from "./components/SearchMovie/SearchMovie";

function App() {
  return (
    <Routes>
       <Route path={''} element={<MainLayout/>}>
           <Route index element={<MainPage/>}/>
           <Route path={'discover/movie'} element={<MovieListPage/>}/>
           <Route path={'discover/movie/:id'} element={<MovieDetailsPage/>}/>
           {/*<Route path={'search'} element={<SearchPage/>}/>*/}
           <Route path={'search/movie'} element={<MovieListPage/>} />
       </Route>
    </Routes>
  );
}

export default App;
