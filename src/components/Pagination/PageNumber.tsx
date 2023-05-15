import {FC} from "react";

import {useAppDispatch} from "../../hooks";
import {movieActions} from "../../redux";

interface IProps {
    pageNumber: number,
    isActive: boolean,
}

const PageNumber: FC<IProps> = ({pageNumber,isActive}) => {

    const dispatch = useAppDispatch();
    const handleClick = () => {
        dispatch(movieActions.getAll({ currentPage: pageNumber }));
    };


    return (
        <button
            style={{ fontWeight: isActive ? "bold" : "normal" }} onClick={handleClick}>
            {pageNumber}
        </button>
    );
};

export {PageNumber};