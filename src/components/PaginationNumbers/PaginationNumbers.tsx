import {FC, useEffect} from "react";
import {Pagination} from "@mui/material";

import {useAppDispatch, useAppSelector} from "../../hooks";
import {movieActions} from "../../redux";
import css from './Pagination.module.css'
import {useNavigate} from "react-router-dom";

const PaginationNumbers: FC = () => {

    const {currentPage, total_pages} = useAppSelector(state => state.movies);

    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    useEffect(()=>{
        dispatch(movieActions.getMovies({currentPage }));
    },[dispatch,currentPage])

    return (
        <div className={css.Pagination}>
            <Pagination
                count={total_pages}
                page={currentPage}
                shape="rounded"
                size="large"
                variant="outlined" color="primary"
                onChange={(_,page: number)=>{
                    dispatch(movieActions.changePage(page))
                    navigate(`/discover/movie?page=${page}`);
                }}

            />
        </div>
    );
};

export {PaginationNumbers};
