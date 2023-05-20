import {FC, useEffect} from "react";

import css from './MovieInfoTrailer.module.css'
import {movieActions} from "../../redux";
import {useAppDispatch, useAppSelector} from "../../hooks";

interface IProps {
    id?: string;
}

const MovieInfoTrailer: FC<IProps> = ({id}) => {

    const {key} = useAppSelector(state => state.movies)
    const dispatch = useAppDispatch();

    const keyTrailer = key

    useEffect(() => {
        console.log(id, 'получили уже в трейлер')
        if (id) {
            dispatch(movieActions.getVideoById(+id))
            console.log(keyTrailer)
        }
    }, [id,keyTrailer])


    return (
        <div className={css.MovieInfoTrailer}>
            {id && <iframe
                width="960"
                height="540"
                src={keyTrailer && `https://www.youtube.com/embed/${keyTrailer}`}
                title="Movie Trailer"
                frameBorder="0"
                allowFullScreen
            ></iframe>}
        </div>
    );
};

export {MovieInfoTrailer};
