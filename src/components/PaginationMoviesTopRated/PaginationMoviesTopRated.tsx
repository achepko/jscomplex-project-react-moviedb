import {FC} from "react";
import {Pagination} from "@mui/material";

import {useAppDispatch, useAppSelector} from "../../hooks";
import {movieActions} from "../../redux";
import css from './PaginationMoviesTopRated.module.css'

const PaginationMoviesTopRated: FC = () => {

    const {currentPage, total_pages} = useAppSelector(state => state.movies);

    const dispatch = useAppDispatch();

    return (
        <div className={css.PaginationMoviesTopRated}>
            <Pagination
                count={total_pages}
                page={currentPage}
                shape="rounded"
                size="large"
                variant="outlined" color="primary"
                onChange={(_, page: number) => {
                    dispatch(movieActions.changePage(page))
                    // navigate(`?page=${page}`);
                }}/>
        </div>
    );
};

export {PaginationMoviesTopRated};

