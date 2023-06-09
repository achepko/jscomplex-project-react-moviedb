import { FC } from "react";
import {SubmitHandler, useForm} from "react-hook-form";

import {useAppDispatch} from "../../hooks";
import {movieActions} from "../../redux";
import {useNavigate} from "react-router-dom";
import css from './SearchMovie.module.css'


interface SearchFormData {
    query: string;
}

const SearchMovie: FC = () => {

    const { register, handleSubmit,reset } = useForm<SearchFormData>();
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const onSubmit:SubmitHandler<SearchFormData> = (data:SearchFormData) => {
        const {query} = data;
        const page = 1;
        dispatch(movieActions.setCurrentQuery(query));
        navigate(`/search/movie?query=${query}&page=${page}`);
        reset();
    };


    return (
        <form onSubmit={handleSubmit(onSubmit)} className={css.SearchMovie}>
            <input type="text" placeholder={'Search your movie...'} {...register('query')} />
            <button type="submit" >SEARCH</button>
        </form>
    );
};


export {SearchMovie}