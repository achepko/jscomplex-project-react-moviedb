import {FC} from "react";
import css from "../MovieListCard/MovieListCard.module.css";
import {Rating} from "@mui/material";

interface IProps {
    vote_average: number
    vote_count: number
}

const StarsRating: FC<IProps> = ({vote_average,vote_count}) => {

    const movieRating = vote_average ? Math.round(vote_average) / 2 : 0

    return (
        <div>
            <div className={`${css.rating}`}><Rating
                name='movie_rating'
                readOnly
                size='small'
                defaultValue={movieRating}
                precision={0.5}
                max={5}
            /> {vote_average}{vote_count}</div>
        </div>
    );
};

export {StarsRating};