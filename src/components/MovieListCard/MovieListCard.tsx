import {FC} from "react";
import {Link} from "react-router-dom";

import {IMovie} from "../../interfaces";
import {PosterPreview} from "../PosterPreview/PosterPreview";
import css from './MovieListCard.module.css'
import {StarsRating} from "../StarsRating/StarsRating";

interface IProps {
    movie: IMovie
}

const MovieListCard: FC<IProps> = ({movie}) => {

    let {id, title, genre_ids, poster_path, vote_average,vote_count, release_date, adult} = movie;

    return (
        <div className={css.MovieListCard}>
            <Link to={`/discover/movie/${id}`}>
                <div className={css.poster}><PosterPreview src={poster_path!} alt={title} genre_ids={genre_ids} adult={adult}/></div>
                <h4>{title}</h4>
            </Link>
            <div>{adult && <img src="/18+.png" alt="Only 18+" width="50" height="50"/>} </div>
            <div>{new Date(release_date).getFullYear()}</div>
            <StarsRating key={id} vote_average={vote_average} vote_count={vote_count} />
        </div>
);
};

export {MovieListCard};