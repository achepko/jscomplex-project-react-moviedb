import React, {FC, useEffect} from "react";
import {SubmitHandler, useForm} from "react-hook-form";

import {useAppDispatch, useAppSelector} from "../../hooks";
import {movieActions} from "../../redux";
import {useLocation, useNavigate} from "react-router-dom";
import {GenreList} from "../GenreList/GenreList";
import css from './SearchMovieAdvanced.module.css'
import {Genre} from "../Genre/Genre";


interface SearchFormData {
    query: string;
    genresSelected: string[]
}

const SearchMovieAdvanced: FC = () => {

    const { register, handleSubmit,reset,setValue  } = useForm<SearchFormData>();
    const {genres,selectedGenres} = useAppSelector(state => state.genres);
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const location = useLocation();

    const searchURLParams = new URLSearchParams(location.search);
    const queryFromURL = searchURLParams.get('query');
    const query = queryFromURL || '';

    useEffect(() => {
        setValue('query', query);
    }, [query, setValue]);

    const onSubmit:SubmitHandler<SearchFormData> = (data:SearchFormData) => {
        const {query} = data;
        const page = 1;
        dispatch(movieActions.setCurrentQuery(query));
        navigate(`/search/movie?query=${query}&page=${page}`);
        reset();
    };

    const handleGenreChange = () => {
        const selectedGenres = genres.filter(genre => getValues(`genre_${genre.id}`));
        dispatch(movieActions.setSelectedGenres(selectedGenres));
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className={css.SearchMovieAdvanced}>
            <input
                type="text"
                placeholder={'query'}
                {...register('query')} />
            <h4>Genres</h4>
            {genres.map(genre => (
                <div key={genre.id}>
                    <input
                        type="checkbox"
                        id={`genre_${genre.id}`}
                        {...register(`genre_${genre.id}`)}
                        onChange={handleGenreChange}
                        defaultChecked={selectedGenres.includes(genre.id)}
                    />
                    <label htmlFor={`genre_${genre.id}`}>{genre.name}</label>
                </div>
            ))}
            <button type="submit" >Advanced Search</button>
        </form>
    );
};

export {SearchMovieAdvanced}



