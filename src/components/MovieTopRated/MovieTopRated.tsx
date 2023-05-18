import React, {FC, useEffect} from "react";

import css from './MovieTopRated.module.css'
import {useAppDispatch, useAppSelector} from "../../hooks";
import {movieActions} from "../../redux";
import {MovieListCard} from "../MovieListCard/MovieListCard";
import {PaginationMoviesTopRated} from "../PaginationMoviesTopRated/PaginationMoviesTopRated";

const MovieTopRated: FC = () => {


    let {topRatedMovies,currentPage} = useAppSelector(state => state.movies);
    let dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(movieActions.getTopRatedMovies(currentPage));
    }, [dispatch,currentPage])

    return (
        <div>

            <div className={css.MovieTopRated}>
                <h4>TOP RATED</h4>
                {topRatedMovies.map(movie => <MovieListCard key={movie.id} movie={movie}/>)}
            </div>
            <hr/>
            <PaginationMoviesTopRated/>
        </div>
    );
};

export {MovieTopRated};