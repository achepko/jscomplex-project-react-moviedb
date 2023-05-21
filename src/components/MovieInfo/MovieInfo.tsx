import {FC, useEffect, useState} from "react";
import {useParams} from "react-router-dom";

import {Header} from "../Header";
import {Footer} from "../Footer";
import {posterURL} from "../../constants";
import {StarsRating} from "../StarsRating";
import {MovieInfoTrailer} from "../MovieInfoTrailer";
import {MovieInfoSimilar} from "../MovieInfoSimilar";
import css from './MovieInfo.module.css'
import {IMovieDetails} from "../../interfaces";
import {movieService} from "../../services";


const MovieInfo: FC = () => {

    const [movieInfo,setMovieInfo] = useState<IMovieDetails>({} as IMovieDetails);
    const {id} = useParams<{ id: string }>();

    useEffect(() => {
              movieService.getMovieById(id!.toString()).then(value => value.data).then(value => setMovieInfo(value))
    }, [id])

    return (
        <div>
            <Header/>
            {movieInfo && (
                <div className={css.MovieInfo_container}>
                    <div className={css.poster_info}>
                        <div className={css.poster}>
                            <img src={movieInfo.poster_path && `${posterURL}/${movieInfo.poster_path}`} alt={movieInfo.title} width='300'/>
                            <StarsRating key={id} vote_average={movieInfo.vote_average} vote_count={movieInfo.vote_count}/>
                        </div>
                        <div className={css.movie_info}>
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
                        </div>
                    </div>
                </div>
            )}
            <div className={css.trailer_similar}>
                <MovieInfoTrailer/>
                <MovieInfoSimilar/>
            </div>
            <Footer/>
        </div>

    );
};

export {MovieInfo};

