import React, {FC, useEffect} from "react";
import {useLocation} from "react-router-dom";

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
    const location = useLocation();

    const searchParams = new URLSearchParams(location.search);
    const pageFromURL = searchParams.get("page");
    const page = pageFromURL ? +pageFromURL : currentPage;

    useEffect(() => {
        dispatch(movieActions.getMovies(page));
    }, [dispatch, page])

    return (
        <div>
            <Header/>
            <GenreList/>
            <p> hided - filtered by genre/date/rate</p>
            <hr/>
            <div className={css.MovieList}>{movies.map(movie => <MovieListCard key={movie.id} movie={movie}/>)}</div>
            <hr/>
            <PaginationNumbers/>
            <Footer/>
        </div>
    );
};

export {MoviesList};

// const {page} = useParams<page:string>();

// const location = useLocation()
//
// const searchParams = new URLSearchParams(location.search);
// const pageFromURL = searchParams.get('page');

// useEffect(()=>{
//     let selectedGenres='dasd'
//     let sortedBy='das'
//     dispatch(movieActions.getAll({currentPage,selectedGenres,sortedBy}))
// },[dispatch])

// let selectedGenres='dasd'
// let sortedBy='das'


// key={page} pageNew={pageNew}

// const {page} = useParams<{page:string}>();
//
// const pageNew = page ? +page : 1
// console.log(pageNew)
//
// useEffect(()=>{
//
//
//     pageNew && dispatch(movieActions.getMovies(+pageNew))
// },[dispatch,pageNew])