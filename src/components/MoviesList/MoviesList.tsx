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
import {SearchMovie} from "../SearchMovie/SearchMovie";
import {SearchMovieAdvanced} from "../SearchMovieAdvanced/SearchMovieAdvanced";

const MoviesList: FC = () => {
    const { movies, currentPage, currentQuery } = useAppSelector(state => state.movies);
    const dispatch = useAppDispatch();
    const location = useLocation();

    const searchURLParams = new URLSearchParams(location.search);
    const pageFromURL = searchURLParams.get('page');
    const queryFromURL = searchURLParams.get('query');
    const query = currentQuery || queryFromURL;
    const page = pageFromURL ? +pageFromURL : currentPage;

    useEffect(() => {
        if (!query) {
            dispatch(movieActions.getMovies(page));
        }else {
            dispatch(movieActions.searchMovies([query, page]));
        }
    }, [dispatch, page,query]);

    return (
        <div>
            <Header/>
            <hr/>
            <SearchMovieAdvanced/>
            <GenreList/>
            <p> hided - filtered by genre/date/rate</p>
            <hr/>
            <div className={css.MovieList}>{movies.map(movie => <MovieListCard key={movie.id} movie={movie}/>)}</div>
            <hr/>
            <PaginationMovies query={query}/>
            <Footer/>
        </div>
    );
};

export {MoviesList};

