import {FC} from "react";
import {IMovie} from "../../interfaces";

interface IProps {
movie:IMovie
}

const MovieListInfo: FC<IProps> = ({movie}) => {
    
    let {id,title,genre_ids,poster_path,vote_average,release_date} = movie;
    
    return (
        <div>
            <div>id:{id}</div>
            <div>title:{title}</div>
            <div>genre_ids:{genre_ids}</div>
            <div>poster_path:{poster_path}</div>
            <div>vote_average:{vote_average}</div>
            <div>release_date:{release_date}</div>
        </div>
    );
};

export {MovieListInfo};