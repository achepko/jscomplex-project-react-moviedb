import React, {FC, useEffect} from "react";
import {useAppDispatch, useAppSelector} from "../../hooks";

import css from './MoviesList.module.css'
import {movieActions} from "../../redux";
import {MovieListCard} from "../MovieListCard/MovieListCard";
import {Header} from "../Header/Header";
import {Footer} from "../Footer/Footer";
import {PaginationNumbers} from "../PaginationNumbers/PaginationNumbers";
import {GenreList} from "../GenreList/GenreList";

const MoviesList: FC = () => {

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
        dispatch(movieActions.getMovies({currentPage}))
    },[dispatch])


    return (
        <div>
            <Header/>
            <GenreList/>
            <p> hided - filtes by genre/date/rate</p>
            <hr/>
            <div className={css.MovieList}>{movies.map(movie => <MovieListCard key={movie.id} movie={movie}/>)}</div>
            <hr/>
            <PaginationNumbers/>
            <Footer/>
        </div>
    );
};

export {MoviesList};