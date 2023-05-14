import {FC, useEffect} from "react";

import {useAppDispatch, useAppSelector} from "../../hooks";
import {movieActions} from "../../redux";
import {useParams} from "react-router-dom";



const MovieDetails: FC = () => {

    let {id} = useParams<{ id: string }>();

    let {movieInfo} = useAppSelector(state => state.movies);

    let dispatch = useAppDispatch();

    useEffect(()=>{
        if (id){
        dispatch(movieActions.getMovieById({id}))
        }
    },[dispatch,id])

    return (
        <div>
                <div>
                    MovieDetails
                    {/*<div>id:{movieInfo.id}</div>*/}
                </div>
        </div>
    );
};

export {MovieDetails};