import React, {FC, useEffect} from "react";
import {useAppDispatch, useAppSelector} from "../../hooks";

import css from './MovieList.module.css'
import {movieActions} from "../../redux";
import {MovieListInfo} from "../MovieListInfo/MovieListInfo";
import {Header} from "../Header/Header";
import {Footer} from "../Footer/Footer";
import {PaginationNumbers} from "../Pagination/Pagination";

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
            <Header/>
            <hr/>
            <div className={css.MovieList}>{movies.map(movie => <MovieListInfo key={movie.id} movie={movie}/>)}</div>
            <hr/>
            <PaginationNumbers/>
            <Footer/>
        </div>
    );
};

export {MovieList};