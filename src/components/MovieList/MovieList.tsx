import {FC, useEffect} from "react";
import {useAppDispatch, useAppSelector} from "../../hooks";

import {movieActions} from "../../redux";
import {MovieListInfo} from "../MovieListInfo/MovieListInfo";

const MovieList: FC = () => {

    let {movies,currentPage,total_pages,loading} = useAppSelector(state => state.movies);

    let dispatch = useAppDispatch();

    // useEffect(()=>{
    //     let selectedGenres='dasd'
    //     let sortedBy='das'
    //     dispatch(movieActions.getAll({currentPage,selectedGenres,sortedBy}))
    // },[dispatch])

    useEffect(()=>{
        let selectedGenres='dasd'
        let sortedBy='das'
        dispatch(movieActions.getAll({currentPage}))
    },[dispatch])


    return (
        <div>
            {movies.map(movie=> <MovieListInfo key={movie.id} movie={movie} />)}
        </div>
    );
};

export {MovieList};