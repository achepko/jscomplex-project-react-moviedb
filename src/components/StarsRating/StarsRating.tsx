import {FC} from "react";
import {Rating} from "@mui/material";

import css from "../MovieListCard/MovieListCard.module.css";

interface IProps {
    vote_average: number
    vote_count: number
}

const StarsRating: FC<IProps> = ({vote_average, vote_count}) => {

    const movieRating = vote_average ? Math.round(vote_average) / 2 : 0

    return (
        <div>
            <div className={css.rating}><Rating
                name='movie_rating'
                readOnly
                size='small'
                value={movieRating}
                precision={0.5}
                max={5}
            /> {movieRating} / {vote_count}</div>
        </div>
    );
};

export {StarsRating};