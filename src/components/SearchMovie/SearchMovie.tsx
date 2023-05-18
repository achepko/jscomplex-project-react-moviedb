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


import { FC } from "react";
import {SubmitHandler, useForm} from "react-hook-form";

import {useAppDispatch} from "../../hooks";
import {movieActions} from "../../redux";


interface SearchFormData {
    query: string;
}

const SearchMovie: FC = () => {

    const { register, handleSubmit,reset } = useForm<SearchFormData>();
    const dispatch = useAppDispatch();

    const onSubmit:SubmitHandler<SearchFormData> = ({query}) => {
        dispatch(movieActions.setCurrentQuery(query));
        reset();
    };


    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input type="text" placeholder={'query'} {...register('query')} />
            <button type="submit" >Search</button>
        </form>
    );
};


export {SearchMovie}