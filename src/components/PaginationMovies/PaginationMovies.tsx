import {FC} from "react";
import {Pagination} from "@mui/material";
import {useNavigate} from "react-router-dom";

import {useAppDispatch, useAppSelector} from "../../hooks";
import {movieActions} from "../../redux";
import css from './PaginationMovies.module.css'


interface IProps {
    query:string|null
}
const PaginationMovies: FC<IProps> = ({query}) => {

    const {currentPage, total_pages} = useAppSelector(state => state.movies);

    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    return (
        <div className={css.PaginationMovies}>
            <Pagination
                count={total_pages}
                page={currentPage}
                size="large"
                variant="outlined" color="primary"
                onChange={(_, page: number) => {
                    dispatch(movieActions.changePage(page));
                    query &&  navigate(`/search/movie?query=${query}&page=${page}`);
                    console.log(page)
                    !query && navigate(`?page=${page}`);
                }}/>
        </div>
    );
};

export {PaginationMovies};

