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
    const { register, handleSubmit, reset, setValue, getValues } = useForm<SearchFormData>();
    const { genres, selectedGenres } = useAppSelector(state => state.genres);
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const location = useLocation();

    const searchURLParams = new URLSearchParams(location.search);
    const queryFromURL = searchURLParams.get("query");
    const query = queryFromURL || "";

    useEffect(() => {
        dispatch(genreActions.getGenres())
    }, [dispatch])

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
            <input type="text" placeholder={"query"} {...register("query")} />
            <h4>Genres</h4>

            {genres.map(genre => (
                <div key={genre.id}>
                    <input id={genre.name} value={genre.name} type='checkbox'{...register('with_genres')}/>
                    <label htmlFor={`genre_${genre.id}`}>{genre.name}</label>
                </div>
            ))}
            <button type="submit">Advanced Search</button>
        </form>
    );
};

export { SearchMovieAdvanced };

{/*    onChange={handleGenreChange}*/}
{/*    defaultChecked={selectedGenres.includes(genre)}*/}
{/*/>*/}

// const handleGenreChange = () => {
//     const selectedGenres = genres.filter(genre => getValues(`${genre.id}`));
//     dispatch(searchActions.setSelectedGenres(selectedGenres));
// };
// const handleGenreChange = () => {
//     const selectedGenreIds = genres
//         .filter(genre => getValues("with_genres").includes(String(genre.id)))
//         .map(genre => genre.id);
//     dispatch(searchActions.setSelectedGenres(selectedGenreIds));
// };

// import React, { FC, useEffect } from "react";
// import { SubmitHandler, useForm } from "react-hook-form";
// import { useAppDispatch, useAppSelector } from "../../hooks";
// import { movieActions, searchActions } from "../../redux";
// import { useLocation, useNavigate } from "react-router-dom";
// import css from "./SearchMovieAdvanced.module.css";
//
// interface SearchFormData {
//     query: string;
//     with_genres: string[];
//     sort_by:
//         | "vote_average.asc"
//         | "vote_average.desc"
//         | "primary_release_date.asc"
//         | "primary_release_date.desc";
// }
//
// const SearchMovieAdvanced: FC = () => {
//     const {
//         register,
//         handleSubmit,
//         reset,
//         setValue,
//         getValues,
//         control,
//     } = useForm<SearchFormData>();
//     const { genres, selectedGenres } = useAppSelector((state) => state.genres);
//     const dispatch = useAppDispatch();
//     const navigate = useNavigate();
//     const location = useLocation();
//
//     const searchURLParams = new URLSearchParams(location.search);
//     const queryFromURL = searchURLParams.get("query");
//     const query = queryFromURL || "";
//
//     useEffect(() => {
//         setValue("query", query);
//     }, [query, setValue]);
//
//     const onSubmit: SubmitHandler<SearchFormData> = (data: SearchFormData) => {
//         const { query } = data;
//         const page = 1;
//         dispatch(movieActions.setCurrentQuery(query));
//         navigate(`/search/movie?query=${query}&page=${page}`);
//         reset();
//     };
//
//     const handleGenreChange = () => {
//         const selectedGenreIds = genres
//             .filter((genre) => getValues("with_genres")?.includes(String(genre.id)))
//             .map((genre) => genre.id.toString());
//         dispatch(searchActions.setSelectedGenres(selectedGenreIds));
//     };
//
//     return (
//         <form onSubmit={handleSubmit(onSubmit)} className={css.SearchMovieAdvanced}>
//             <input type="text" placeholder={"query"} {...register("query")} />
//             <h4>Genres</h4>
//             {genres.map((genre) => (
//                 <div key={genre.id}>
//                     <input
//                         type="checkbox"
//                         id={`genre_${genre.id}`}
//                         {...register("with_genres")}
//                         value={genre.id}
//                         onChange={handleGenreChange}
//                         checked={selectedGenres
//                             .map((genre) => genre.id.toString())
//                             .includes(genre.id.toString())}
//                     />
//                     <label htmlFor={`genre_${genre.id}`}>{genre.name}</label>
//                 </div>
//             ))}
//             <button type="submit">Advanced Search</button>
//         </form>
//     );
// };
//
// export { SearchMovieAdvanced };
