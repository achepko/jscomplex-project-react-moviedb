import React, {FC, useEffect} from "react";

import css from './MovieTopRated.module.css'
import {useAppDispatch, useAppSelector} from "../../hooks";
import {movieActions} from "../../redux";
import {MovieListCard} from "../MovieListCard";
import {PaginationMoviesTopRated} from "../PaginationMoviesTopRated";

const MovieTopRated: FC = () => {

    let {topRatedMovies,currentPage} = useAppSelector(state => state.movies);
    let dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(movieActions.getTopRatedMovies(currentPage));

    }, [dispatch, currentPage])

    return (
        <div className={css.MovieTopRated_container}>
            <div className={css.MovieTopRated_top}><h1>TOP RATED MOVIES</h1></div>
            <div className={css.MovieTopRated}>
                {topRatedMovies.map(movie => <MovieListCard key={movie.id} movie={movie}/>)}
            </div>
            <PaginationMoviesTopRated/>
        </div>
    );
};

export {MovieTopRated};