import React, {FC, useEffect} from "react";
import {useParams} from "react-router-dom";


import css from './MovieInfoSimilar.module.css'
import {useAppDispatch, useAppSelector} from "../../hooks";
import {movieActions} from "../../redux";
import {MovieListCard} from "../MovieListCard";

const MovieInfoSimilar: FC = () => {
    const dispatch = useAppDispatch();
    const {similarMovies} = useAppSelector(state => state.movies);

    const {id} = useParams<{ id: string }>();

    useEffect(() => {
     if (id){
         dispatch(movieActions.getSimilarMoviesById(+id));

     }
    }, [dispatch,id])

    const similarShortMoviesList = similarMovies.slice(0, 5)

    return (
        <div className={css.MovieInfoSimilar}>
            {similarShortMoviesList && similarShortMoviesList && similarShortMoviesList.map(movie =>
                <MovieListCard key={movie.id.toString()} movie={movie}/>
            )}
        </div>
    );
};

export {MovieInfoSimilar};
