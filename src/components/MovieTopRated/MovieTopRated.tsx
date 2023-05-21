import React, {FC, useEffect} from "react";

import css from './MovieTopRated.module.css'
import {useAppDispatch, useAppSelector} from "../../hooks";
import {movieActions} from "../../redux";
import {MovieListCard} from "../MovieListCard";
import {PaginationMoviesTopRated} from "../PaginationMoviesTopRated";

const MovieTopRated: FC = () => {

    let {topRatedMovies,currentPage,ifGenreSelected,movies} = useAppSelector(state => state.movies);
    const {genres} = useAppSelector((state) => state.genres);
    let dispatch = useAppDispatch();

    useEffect(() => {
        if (!ifGenreSelected){
        dispatch(movieActions.getTopRatedMovies(currentPage));
        }
        else {
        dispatch(movieActions.getMoviesByGenreId({id: +ifGenreSelected,page:currentPage}))
        }

    }, [dispatch, currentPage,ifGenreSelected])

    const getGenreName = () => {
        const genre = genres.find((genre) => genre.id === +ifGenreSelected);
        return genre ? genre.name.toUpperCase() : "";
    };

    return (
        <div>
            {!ifGenreSelected && <div className={css.MovieTopRated_container}>
                <div className={css.MovieTopRated_top}><h1>TOP RATED MOVIES</h1></div>
                <div className={css.MovieTopRated}>
                    {topRatedMovies.map(movie => <MovieListCard key={movie.id} movie={movie}/>)}
                </div>
                <PaginationMoviesTopRated/>
            </div>}

            {ifGenreSelected && <div className={css.MovieTopRated_container}>
                <div className={css.MovieTopRated_top}><h1>{`${getGenreName()} MOVIES`}</h1></div>
                <div className={css.MovieTopRated}>
                    {movies.map(movie => <MovieListCard key={movie.id} movie={movie}/>)}
                </div>
                <PaginationMoviesTopRated/>
            </div>}
        </div>
    );
};

export {MovieTopRated};