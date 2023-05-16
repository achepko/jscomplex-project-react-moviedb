import {FC, useEffect} from "react";

import {useAppDispatch, useAppSelector} from "../../hooks";
import {movieActions} from "../../redux";
import {useParams} from "react-router-dom";
import {Header} from "../Header/Header";
import {Footer} from "../Footer/Footer";


interface IParam {
    [key: string]: string | undefined;
    id: string;
}

const MovieInfo: FC = () => {

    let {movieInfo} = useAppSelector(state => state.movies);
    let {id} = useParams<IParam>();
    let dispatch = useAppDispatch();
    console.log(movieInfo)

    useEffect(()=>{
        if (id){
        dispatch(movieActions.getMovieById({id}))
        }
    },[id])

    return (

            <div>
                <Header/>
                {movieInfo &&  (
                    <div>
                        {movieInfo.title && <h2>{movieInfo.title}</h2>}
                        {movieInfo.overview && <p>{movieInfo.overview}</p>}
                        {movieInfo.release_date && <p>{movieInfo.release_date}</p>}
                    </div>
                )}
                <Footer/>
            </div>

    );
};

export {MovieInfo};