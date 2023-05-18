import {FC} from "react";

import css from './MovieNowPlaying.module.css'

const MovieNowPlaying: FC = () => {
    return (
        <div className={css.MovieNowPlaying}>
            <h3>MovieNowPlaying in theatre</h3>
        </div>
    );
};

export {MovieNowPlaying};