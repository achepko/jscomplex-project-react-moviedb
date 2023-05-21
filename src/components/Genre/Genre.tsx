import {FC} from "react";

import {IGenre} from "../../interfaces";

interface IProps {
genre:IGenre
}

const Genre: FC<IProps> = ({genre}) => {
    
    const {name} = genre;
    
    return (
        <div>
            <div>{name}</div>
        </div>
    );
};

export {Genre};