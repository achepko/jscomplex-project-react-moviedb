import {FC} from "react";
import {Link} from "react-router-dom";
import {Rating} from "@mui/material";

import {IMovie} from "../../interfaces";
import {PosterPreview} from "../PosterPreview/PosterPreview";
import css from './MovieListCard.module.css'
import {GenreBadge} from "../GenreBadge/GenreBadge";
import {StarsRating} from "../StarsRating/StarsRating";

interface IProps {
    movie: IMovie
}

const MovieListCard: FC<IProps> = ({movie}) => {

    let {id, title, genre_ids, poster_path, vote_average,vote_count, release_date, adult} = movie;



    return (
        <div className={css.MovieListCard}>
            <Link to={`/discover/movie/${id}`}>
                {/*<PosterPreview src={poster_path!} alt={title} genre_ids={genre_ids} adult={adult}/>*/}
                <div>title:{title}</div>
            </Link>
            <div>{adult && <img src="/18+.png" alt="Only 18+"width="50" height="50"/>} </div>
            <div>id:{id}</div>
            <div><GenreBadge genre_ids={genre_ids}/></div>
            <div>release_date:{release_date}</div>
            <StarsRating key={id} vote_average={vote_average} vote_count={vote_count} />
        </div>
);
};

export {MovieListCard};