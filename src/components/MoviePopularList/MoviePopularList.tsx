import React, {FC, useEffect} from "react";
import {useLocation} from "react-router-dom";

import css from './MoviePopularList.module.css'
import {useAppDispatch, useAppSelector} from "../../hooks";
import {movieActions} from "../../redux";
import {MovieListCard} from "../MovieListCard/MovieListCard";
import {PaginationMovies} from "../PaginationMovies/PaginationMovies";
import {PaginationMoviesPopular} from "../PaginationMoviesPopular/PaginationMoviesPopular";

const MoviePopularList: FC = () => {

    let {movies,currentPage,total_pages,loading} = useAppSelector(state => state.movies);
    let dispatch = useAppDispatch();
    // const location = useLocation();

    // const searchParams = new URLSearchParams(location.search);
    // const pageFromURL = searchParams.get("page");
    // const page = pageFromURL ? +pageFromURL : currentPage;

    useEffect(() => {
        dispatch(movieActions.getPopularMovies(currentPage));
    }, [dispatch, currentPage])

    return (
        <div className={css.MoviePopularList}>
            <div className={css.MovieList}>{movies.map(movie => <MovieListCard key={movie.id} movie={movie}/>)}</div>
            <hr/>
            <PaginationMoviesPopular/>
        </div>
    );
};

export {MoviePopularList};