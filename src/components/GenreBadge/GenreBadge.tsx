import {FC} from "react";
import {Badge} from "@mui/material";

import {useAppSelector} from "../../hooks";
import css from './GenreBadge.module.css'

interface IProps {
    genre_ids: number[];
}

const GenreBadge: FC<IProps> = ({genre_ids}) => {

    const {genres} = useAppSelector((state) => state.genres);

    const MovieGenreBadge = () => {
        const genresArray = genres ? genres : [];
        return (
            <div className={css.badge}>
                {genresArray && genresArray.map((genre) => {
                    if (genre_ids.includes(genre.id)) {
                        return  (<Badge className={css.genre}
                            key={genre.id}
                            color="primary"
                            overlap="circular">
                            {genre.name}
                        </Badge>)
                    }
                    return null;
                })}
            </div>
        );
    };

    return <div>{MovieGenreBadge()}</div>;
};


export {GenreBadge};

