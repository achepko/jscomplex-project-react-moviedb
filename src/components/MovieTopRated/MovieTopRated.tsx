import React, {FC, useEffect} from "react";
import {useLocation} from "react-router-dom";

import css from './MovieTopRated.module.css'
import {useAppDispatch, useAppSelector} from "../../hooks";
import {movieActions} from "../../redux";
import {MovieListCard} from "../MovieListCard/MovieListCard";
import {PaginationMoviesTopRated} from "../PaginationMoviesTopRated/PaginationMoviesTopRated";

const MovieTopRated: FC = () => {

    let {topRatedMovies,currentPage,total_pages,loading} = useAppSelector(state => state.movies);
    let dispatch = useAppDispatch();
    // const location = useLocation();

    // const searchParams = new URLSearchParams(location.search);
    // const pageFromURL = searchParams.get("page");
    // const page = pageFromURL ? +pageFromURL : currentPage;


    useEffect(() => {
        dispatch(movieActions.getTopRatedMovies(currentPage));
    }, [dispatch,currentPage])

    return (
        <div>
            <div className={css.MovieTopRated}>{topRatedMovies.map(movie => <MovieListCard key={movie.id} movie={movie}/>)}</div>
            <hr/>
            <PaginationMoviesTopRated/>
        </div>
    );
};

export {MovieTopRated};