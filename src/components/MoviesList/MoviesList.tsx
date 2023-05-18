// import React, {FC, useEffect} from "react";
// import {useLocation} from "react-router-dom";
//
// import {useAppDispatch, useAppSelector} from "../../hooks";
// import css from './MoviesList.module.css'
// import {movieActions} from "../../redux";
// import {MovieListCard} from "../MovieListCard/MovieListCard";
// import {Header} from "../Header/Header";
// import {Footer} from "../Footer/Footer";
// import {PaginationMovies} from "../PaginationMovies/PaginationMovies";
// import {GenreList} from "../GenreList/GenreList";
//
// const MoviesList: FC = () => {
//
//     let {movies,currentPage,currentQuery} = useAppSelector(state => state.movies);
//     let dispatch = useAppDispatch();
//     const location = useLocation();
//
//     const searchURLParams = new URLSearchParams(location.search);
//     const pageFromURL = searchURLParams.get('page');
//     const queryFromURL = searchURLParams.get('query')
//     const page = pageFromURL ? +pageFromURL : currentPage;
//
//     console.log(currentQuery);
//
//     useEffect(() => {
//         !queryFromURL && dispatch(movieActions.getMovies(page));
//         queryFromURL && dispatch(movieActions.searchMovies([queryFromURL,page]))
//     }, [dispatch, page,queryFromURL])
//
//     return (
//         <div>
//             <Header/>
//             <GenreList/>
//             <p> hided - filtered by genre/date/rate</p>
//             <hr/>
//             <div className={css.MovieList}>{movies.map(movie => <MovieListCard key={movie.id} movie={movie}/>)}</div>
//             <hr/>
//             <PaginationMovies query={queryFromURL}/>
//             <Footer/>
//         </div>
//     );
// };
//
// export {MoviesList};
//

import React, {FC, useEffect} from "react";
import {useLocation} from "react-router-dom";

import {useAppDispatch, useAppSelector} from "../../hooks";
import css from './MoviesList.module.css'
import {movieActions} from "../../redux";
import {MovieListCard} from "../MovieListCard/MovieListCard";
import {Header} from "../Header/Header";
import {Footer} from "../Footer/Footer";
import {PaginationMovies} from "../PaginationMovies/PaginationMovies";
import {GenreList} from "../GenreList/GenreList";

const MoviesList: FC = () => {
    const { movies, currentPage, currentQuery } = useAppSelector(state => state.movies);
    const dispatch = useAppDispatch();
    const location = useLocation();

    const searchURLParams = new URLSearchParams(location.search);
    const pageFromURL = searchURLParams.get('page');
    const queryFromURL = searchURLParams.get('query');
    const page = pageFromURL ? +pageFromURL : currentPage;

    useEffect(() => {
        if (!queryFromURL && !currentQuery) {
            dispatch(movieActions.getMovies(page));
        } else if (queryFromURL && !currentQuery) {
            dispatch(movieActions.searchMovies([queryFromURL, page]));
        }else {
            dispatch(movieActions.searchMovies([currentQuery, page]));
        }
    }, [dispatch, page, queryFromURL,currentQuery]);

    return (
        <div>
            <Header/>
            <GenreList/>
            <p> hided - filtered by genre/date/rate</p>
            <hr/>
            <div className={css.MovieList}>{movies.map(movie => <MovieListCard key={movie.id} movie={movie}/>)}</div>
            <hr/>
            <PaginationMovies query={queryFromURL}/>
            <Footer/>
        </div>
    );
};

export {MoviesList};

