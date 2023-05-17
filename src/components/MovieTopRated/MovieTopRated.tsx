import {FC} from "react";

import css from './MovieTopRated.module.css'

const MovieTopRated: FC = () => {
    return (
        <div className={css.MovieTopRated}>
            <h3>Top Rated --- ?MovieOfDay</h3>
        </div>
    );
};

export {MovieTopRated};