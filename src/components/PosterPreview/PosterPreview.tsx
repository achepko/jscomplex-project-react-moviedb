import {FC} from "react";

import {posterURL} from "../../constants";
import css from './PosterPreview.module.css'

interface IMoviePosterProps {
    src: string,
    genre_ids: number[],
    alt: string,
    adult:boolean
}

const PosterPreview: FC<IMoviePosterProps> = ({src,alt,genre_ids,adult}) => {

    const noPoster = 'https://ranobehub.org/img/default.jpg';

    return (
        <div className={css.MoviePoster}>
            <img src={src ? `${posterURL}/${src}` : noPoster}
                 alt={`${alt}`}/>
        </div>
    );
};

export {PosterPreview};