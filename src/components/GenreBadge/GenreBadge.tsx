// import {FC} from "react";
// import {Badge} from "@mui/material";
//
// import {useAppSelector} from "../../hooks";
// import {IGenre} from "../../interfaces";
//
// interface IProps {
//     genre_ids: number[]
// }
//
// const GenreBadge: FC<IProps> = ({genre_ids}) => {
//
//     const {genres} = useAppSelector(state => state.genres);
//
//     const genresOfMovie: IGenre[] = [];
//     const MovieGenreBadge = () => {
//         const genresArray = genres ? genres : [];
//         genresArray.map(genre => {
//             if (genre_ids.includes(genre.id)) {
//                 return (genresArray.push(genre))
//             }
//             return genresArray
//         })
//         return genresOfMovie
//     }
//
//     MovieGenreBadge();
//
//     return (
//         <div>
//             {genresOfMovie.map(genre => (
//                 <Badge key={genre.id} color="primary" badgeContent={genre.name}/>
//             ))}
//         </div>
//     );
// };
//
// export {GenreBadge};

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
            <div className={css.GenreBadge}>
                {genresArray.map((genre) => {
                    if (genre_ids.includes(genre.id)) {
                        return  (<Badge
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


// import { FC } from "react";
// import { Badge } from "@mui/material";
//
// import { useAppSelector } from "../../hooks";

//
// interface IProps {
//     genre_ids: number[];
// }
//
// const GenreBadge: FC<IProps> = ({ genre_ids }) => {
//     const { genres } = useAppSelector((state) => state.genres);
//
//     const MovieGenreBadge = () => {
//         const genresArray = genres ? genres : [];
//         return (
//             <>
//                 {genresArray.map((genre) => {
//                     if (genre_ids.includes(genre.id)) {
//                         return (
//                             <Badge
//                                 key={genre.id}
//                                 badgeContent={genre.name}
//                                 color="secondary"
//                                 overlap="circular"
//
//                             />
//                         );
//                     }
//                     return null;
//                 })}
//             </>
//         );
//     };
//
//     return (
//         <div className={css.GenreBadge}>
//             {MovieGenreBadge()}
//         </div>
//     );
// };
//
// export { GenreBadge };
