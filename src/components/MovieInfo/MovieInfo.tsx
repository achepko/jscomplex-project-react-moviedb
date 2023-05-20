import {FC, useEffect} from "react";

import {useAppDispatch, useAppSelector} from "../../hooks";
import {movieActions} from "../../redux";
import {useParams} from "react-router-dom";
import {Header} from "../Header/Header";
import {Footer} from "../Footer/Footer";
import {posterURL} from "../../constants";
import {StarsRating} from "../StarsRating/StarsRating";
import {MovieInfoTrailer} from "../MovieInfoTrailer/MovieInfoTrailer";
import {MovieInfoSimilar} from "../MovieInfoSimilar/MovieInfoSimilar";
import css from './MovieInfo.module.css'


interface IParam {
    [key: string]: string;
    id: string;
}

const MovieInfo: FC = () => {

    let {movieInfo} = useAppSelector(state => state.movies);
    let {id} = useParams<IParam>();
    let dispatch = useAppDispatch();
    const {vote_average, vote_count} = movieInfo;

    useEffect(() => {
        if (id) {
            dispatch(movieActions.getMovieById(id))
            dispatch(movieActions.resetKey)
        }
    }, [dispatch, id])

    return (
        <div>
            <Header/>
            <hr/>
            {movieInfo && (
                <div>
                    <div className={css.poster_info}>
                        <div>
                            <img src={movieInfo.poster_path && `${posterURL}/${movieInfo.poster_path}`} alt={movieInfo.title} width='300'/>
                            <StarsRating key={id} vote_average={vote_average} vote_count={vote_count}/>
                        </div>

                        <div>
                            {movieInfo.title && <h1>{movieInfo.title}</h1>}
                            {movieInfo.original_title && <p>{movieInfo.original_title}</p>}
                            {movieInfo.release_date && (
                                <p>Date of release: {new Date(movieInfo.release_date).toLocaleDateString('en-US', { day: 'numeric', month: 'long', year: 'numeric' })}</p>
                            )}
                            {movieInfo.production_countries && (
                                <p>
                                    Countries:{" "}
                                    {movieInfo.production_countries.map((country, index) => (
                                        <span key={country.iso_3166_1}>{index > 0 && ", "}
                                            {country.name}</span>
                                    ))}
                                </p>
                            )}
                            {movieInfo.genres && (
                                <p>
                                    Genres:{" "}
                                    {movieInfo.genres.map((genre, index) => (
                                        <span key={genre.id}>{index > 0 && " / "}
                                            {genre.name}</span>
                                    ))}
                                </p>
                            )}
                            {movieInfo.runtime && <p>Duration: {movieInfo.runtime} min.</p>}
                            {movieInfo.overview && <p>{movieInfo.overview}</p>}
                            <button>Add to Wish List</button>
                        </div>
                    </div>
                </div>
            )}
            <hr/>
            <MovieInfoTrailer key={id} id={id}/>
            <hr/>
            <MovieInfoSimilar key={id} id={id}/>
            <Footer/>
        </div>

    );
};

export {MovieInfo};