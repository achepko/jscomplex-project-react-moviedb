import {FC} from "react";
import {Link} from "react-router-dom";

import {IMovie} from "../../interfaces";
import {PosterPreview} from "../PosterPreview/PosterPreview";

interface IProps {
    movie: IMovie
}

const MovieListCard: FC<IProps> = ({movie}) => {

    let {id, title, genre_ids, poster_path, vote_average, release_date, adult} = movie;

    return (
        <div>
            <Link to={`${id}`}>
                {/*<PosterPreview src={poster_path} alt={title} genre_ids={genre_ids} adult={adult}/>*/}
                <div>title:{title}</div>
            </Link>
            <div>id:{id}</div>
            <div>genre_ids:{genre_ids}</div>
            <div>vote_average:{vote_average}</div>
            <div>release_date:{release_date}</div>
        </div>

    );
};

export {MovieListCard};