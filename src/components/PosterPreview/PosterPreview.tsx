import {FC} from "react";

import {posterURL} from "../../constants";
import css from './PosterPreview.module.css'
import {GenreBadge} from "../GenreBadge/GenreBadge";

interface IMoviePosterProps {
    src: string,
    genre_ids: number[],
    alt: string,
    adult:boolean
}

const PosterPreview: FC<IMoviePosterProps> = ({src,alt,genre_ids,adult}) => {

    const noPoster = 'https://ranobehub.org/img/default.jpg';

    return (
        <div className={css.PosterPreview}>
            <img src={src ? `${posterURL}/${src}` : noPoster}
                 alt={`${alt}`}/>
            <div className={css.badges}><GenreBadge genre_ids={genre_ids}/></div>
        </div>
    );
};

export {PosterPreview};