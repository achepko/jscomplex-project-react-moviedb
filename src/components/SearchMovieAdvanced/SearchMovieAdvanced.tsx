// import { FC, useState } from "react";
// import { useForm } from "react-hook-form";
//
// interface SearchFormData {
//     onSearch: (query: string) => void;
// }
//
// const SearchMovie: FC = ({onSearch}) => {
//     const { register, handleSubmit } = useForm<SearchFormData>();
//
//     const onSubmit = (data: SearchFormData) => {
//         onSearch(query);
//     };
//
//     return (
//         <form onSubmit={handleSubmit(onSubmit)}>
//             <input type="text" placeholder={'query'} {...register('query')} />
//             <button type="submit">Поиск</button>
//         </form>
//     );
// };


import {FC, useEffect} from "react";
import {SubmitHandler, useForm} from "react-hook-form";

import {useAppDispatch, useAppSelector} from "../../hooks";
import {movieActions} from "../../redux";
import {useLocation, useNavigate} from "react-router-dom";


interface SearchFormData {
    query: string;
}

const SearchMovieAdvanced: FC = () => {

    const { register, handleSubmit,reset,setValue  } = useForm<SearchFormData>();
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


    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input
                type="text"
                placeholder={'query'}
                {...register('query')} />
            <button type="submit" >Advanced Search</button>
        </form>
    );
};


export {SearchMovieAdvanced}



// import { FC, useState } from "react";
// import { useForm } from "react-hook-form";
//
// interface SearchFormData {
//     onSearch: (query: string) => void;
// }
//
// const SearchMovie: FC = ({onSearch}) => {
//     const { register, handleSubmit } = useForm<SearchFormData>();
//
//     const onSubmit = (data: SearchFormData) => {
//         onSearch(query);
//     };
//
//     return (
//         <form onSubmit={handleSubmit(onSubmit)}>
//             <input type="text" placeholder={'query'} {...register('query')} />
//             <button type="submit">Поиск</button>
//         </form>
//     );
// };


// import { FC } from "react";
// import {SubmitHandler, useForm} from "react-hook-form";
//
// import {useAppDispatch, useAppSelector} from "../../hooks";
// import {movieActions} from "../../redux";
// import {useLocation, useNavigate} from "react-router-dom";
//
//
// interface SearchFormData {
//     query: string;
// }
//
// const SearchMovieAdvanced: FC = () => {
//
//     const { register, handleSubmit,reset } = useForm<SearchFormData>();
//     const dispatch = useAppDispatch();
//     const navigate = useNavigate();
//     const location = useLocation();
//
//     const searchURLParams = new URLSearchParams(location.search);
//     const queryFromURL = searchURLParams.get('query');
//     const query = queryFromURL || '';
//
//     const textFromSearch = query
//
//     const onSubmit:SubmitHandler<SearchFormData> = (data:SearchFormData) => {
//         const {query} = data;
//         const page = 1;
//         dispatch(movieActions.setCurrentQuery(query));
//         navigate(`/search/movie?query=${query}&page=${page}`);
//         reset();
//     };
//
//
//     return (
//         <form onSubmit={handleSubmit(onSubmit)}>
//             <input
//                 type="text"
//                 placeholder={'query'}
//                 defaultValue={textFromSearch}
//                 {...register('query')} />
//             <button type="submit" >Advanced Search</button>
//         </form>
//     );
// };
//
//
// export {SearchMovieAdvanced}