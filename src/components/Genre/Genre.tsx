import {FC} from "react";
import {Link} from "react-router-dom";

import {IGenre} from "../../interfaces";


interface IProps {
genre:IGenre
}

const Genre: FC<IProps> = ({genre}) => {
    
    const {id,name} = genre;
    
    return (
        <div>
            <div>{name}</div>
        </div>
    );
};

export {Genre};