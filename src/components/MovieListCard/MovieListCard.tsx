import {FC} from "react";
import {Link} from "react-router-dom";
import {Rating} from "@mui/material";

import {IMovie} from "../../interfaces";
import {PosterPreview} from "../PosterPreview/PosterPreview";

interface IProps {
    movie: IMovie
}

const MovieListCard: FC<IProps> = ({movie}) => {

    let {id, title, genre_ids, poster_path, vote_average, release_date, adult} = movie;

    const movieRating = vote_average ? Math.round(vote_average)/2:0

    return (
        <div>
            <Link to={`${id}`}>
                {/*<PosterPreview src={poster_path} alt={title} genre_ids={genre_ids} adult={adult}/>*/}
                <div>title:{title}</div>
            </Link>
            <div>{adult && <img src="/18+.png" alt="Only 18+"width="50" height="50"/>} </div>
            <div>id:{id}</div>
            <div>genre_ids:{genre_ids}</div>
            <div>vote_average:{vote_average}</div>
            <div>release_date:{release_date}</div>
            <Rating
                name='movie_rating'
                readOnly
                size='small'
                defaultValue={movieRating}
                precision={0.5}
                max={5}
            />

        </div>

    );
};

export {MovieListCard};