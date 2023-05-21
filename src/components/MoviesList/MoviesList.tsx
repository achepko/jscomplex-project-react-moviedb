import React, {FC, useEffect} from "react";
import {useLocation} from "react-router-dom";

import {useAppDispatch, useAppSelector} from "../../hooks";
import css from './MoviesList.module.css'
import {movieActions, searchActions} from "../../redux";
import {MovieListCard} from "../MovieListCard";
import {Header} from "../Header";
import {Footer} from "../Footer";
import {PaginationMovies} from "../PaginationMovies";
import {SearchMovieAdvanced} from "../SearchMovieAdvanced";

const MoviesList: FC = () => {
    const { movies, currentPage, currentQuery } = useAppSelector(state => state.movies);
    const {with_genres,sort_by} = useAppSelector(state => state.search);

    console.log(with_genres,'in movise');
    const dispatch = useAppDispatch();
    const location = useLocation();

    const searchURLParams = new URLSearchParams(location.search);
    const pageFromURL = searchURLParams.get('page');
    const queryFromURL = searchURLParams.get('query');
    const query = currentQuery || queryFromURL;
    const page = pageFromURL ? +pageFromURL : currentPage;

    useEffect(() => {
        if (!query) {
            dispatch(movieActions.getMovies({page,sort_by,with_genres}));
        }else {
            dispatch(movieActions.searchMovies([query, page]));

        }
        return () => {
            dispatch(movieActions.resetPage())
            dispatch(searchActions.resetFilter())
        }
    }, [dispatch, page,query,sort_by,with_genres]);

    return (
        <div>
            <Header/>
            <div className={css.MovieList_container}>
                <SearchMovieAdvanced/>
                <div className={css.MovieList}>
                    {movies.map(movie => <MovieListCard key={movie.id} movie={movie}/>)}
                </div>
                <PaginationMovies query={query} sort_by={sort_by} with_genres={with_genres}/>
            </div>
            <Footer/>
        </div>
    );
};

export {MoviesList};



