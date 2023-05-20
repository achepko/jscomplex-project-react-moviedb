import React, {FC, useEffect} from "react";

import css from './MovieInfoSimilar.module.css'
import {useAppDispatch, useAppSelector} from "../../hooks";
import {movieActions} from "../../redux";
import {MovieListCard} from "../MovieListCard/MovieListCard";

interface IProps {
    id?: string
}

const MovieInfoSimilar: FC<IProps> = ({id}) => {
    const dispatch = useAppDispatch();
    const {similarMovies} = useAppSelector(state => state.movies);

    useEffect(() => {
     if (id){
         dispatch(movieActions.getSimilarMoviesById(+id));
     }
    }, [dispatch,id])

    return (
        <div className={css.MovieInfoSimilar}>
            <h4>MovieInfoSimilar</h4>
            {similarMovies.map(movie => <MovieListCard key={movie.id} movie={movie}/>)}
        </div>
    );
};

export {MovieInfoSimilar};