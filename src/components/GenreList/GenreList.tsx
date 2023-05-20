import {FC, useEffect} from "react";

import {useAppDispatch, useAppSelector} from "../../hooks";
import {genreActions} from "../../redux";
import {Genre} from "../Genre/Genre";
import css from './GenreList.module.css'


const GenreList:FC = () => {

    const  dispatch = useAppDispatch();
    const {genres} = useAppSelector(state => state.genres);

    useEffect(() => {
        dispatch(genreActions.getGenres())
    }, [dispatch])

    return (
    < div className = {css.GenreList} >
        {genres.map(genre => <Genre key = {genre.id}genre = {genre}
    />)}
</div>
)
    ;
}
    ;

    export {GenreList};