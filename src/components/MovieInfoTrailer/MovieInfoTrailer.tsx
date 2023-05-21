import {FC, useEffect, useState} from "react";
import {useParams} from "react-router-dom";

import css from './MovieInfoTrailer.module.css'
import {movieService} from "../../services";
import {IVideo} from "../../interfaces/video.interface";


const MovieInfoTrailer: FC = () => {

    const [ketTrailer,setKeyTrailer] = useState<IVideo>();
    const {id} = useParams<{ id: string }>();

    useEffect(() => {
        if (id) {
            movieService.getVideoById(+id).then(value => value.data)
                .then(value => setKeyTrailer(value.results.find((item) => item.type === 'Trailer')))
        }
    }, [id])

    return (
        <div className={css.MovieInfoTrailer}>
            {ketTrailer?.key && <iframe
                width="960"
                height="540"
                src={ketTrailer?.key && `https://www.youtube.com/embed/${ketTrailer?.key}`}
                title="Movie Trailer"
                frameBorder="0"
                allowFullScreen
            ></iframe>}
        </div>
    );
};

export {MovieInfoTrailer};

