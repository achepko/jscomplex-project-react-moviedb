import {FC} from "react";

import {posterURL} from "../../constants";
import css from './MoviePoster.module.css'

interface IMoviePosterProps {
    src: string,
    genre_ids: number[],
    alt: string,
    adult:boolean
}

const MoviePoster: FC<IMoviePosterProps> = ({src,alt,genre_ids,adult}) => {
    return (
        <div className={css.MoviePoster}>
            <img src={`${posterURL}/${src}`} alt={`${alt}`}/>
        </div>
    );
};

export {MoviePoster};