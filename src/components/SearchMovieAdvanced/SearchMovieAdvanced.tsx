import React, { FC, useEffect } from "react";

import { SubmitHandler, useForm } from "react-hook-form";
import { useAppDispatch, useAppSelector } from "../../hooks";
import {genreActions, movieActions, searchActions} from "../../redux";
import { useLocation, useNavigate } from "react-router-dom";
import css from "./SearchMovieAdvanced.module.css";

interface SearchFormData {
    query: string;
    with_genres: string[];
    sort_by: 'popularity.asc'|'popularity.desc'|
        'vote_average.asc' | 'vote_average.desc' |
        'primary_release_date.asc' | 'primary_release_date.desc';
}

const SearchMovieAdvanced: FC = () => {
    const { register, handleSubmit, reset, setValue } = useForm<SearchFormData>();
    const { genres} = useAppSelector(state => state.genres);
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const location = useLocation();

    const searchURLParams = new URLSearchParams(location.search);
    const queryFromURL = searchURLParams.get("query");
    const query = queryFromURL || "";

    useEffect(() => {
        setValue("query", query);
    }, [query, setValue]);

    const onSubmit: SubmitHandler<SearchFormData> = (data: SearchFormData) => {
        console.log(data);
        const { query,sort_by,with_genres } = data;

        const page = 1;

        dispatch(searchActions.setFilter(with_genres))

        dispatch(movieActions.setCurrentQuery(query));
        navigate(`/search/movie?query=${query}&page=${page}`);
        reset();
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className={css.SearchMovieAdvanced}>
            <input type="text" placeholder={'Search your movie...'} {...register("query")} />
            <div className={css.search_button}>
                <button type="submit" >Search</button>
            </div>
            <div className={css.all_genres}>
                {genres.map(genre => (
                    <div key={genre.id} className={css.genre}>
                        <input id={genre.name} value={genre.name} type='checkbox'{...register('with_genres')}/>
                        <label htmlFor={`genre_${genre.id}`}>{genre.name}</label>
                    </div>
                ))}</div>
        </form>
    );
};

export { SearchMovieAdvanced };
