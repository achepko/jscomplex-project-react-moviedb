import {FC} from "react";
import {Pagination} from "@mui/material";
import {useNavigate} from "react-router-dom";

import {useAppDispatch, useAppSelector} from "../../hooks";
import {movieActions} from "../../redux";
import css from './PaginationMovies.module.css'

const PaginationMovies: FC = () => {

    const {currentPage, total_pages} = useAppSelector(state => state.movies);

    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    return (
        <div className={css.PaginationMovies}>
            <Pagination
                count={total_pages}
                page={currentPage}
                shape="rounded"
                size="large"
                variant="outlined" color="primary"
                onChange={(_, page: number) => {
                    dispatch(movieActions.changePage(page))
                    navigate(`?page=${page}`);
                }}/>
        </div>
    );
};

export {PaginationMovies};

