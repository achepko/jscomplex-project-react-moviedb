import {FC, useEffect} from "react";
import {Pagination} from "@mui/material";

import {useAppDispatch, useAppSelector} from "../../hooks";
import {movieActions} from "../../redux";
import css from './Pagination.module.css'
import {useNavigate, useParams} from "react-router-dom";


interface IProps {

}

const PaginationNumbers: FC<IProps> = () => {

    const {currentPage, total_pages} = useAppSelector(state => state.movies);

    const dispatch = useAppDispatch();
    const navigate = useNavigate();


    return (
        <div className={css.Pagination}>
            <Pagination
                count={total_pages}
                page={currentPage}
                shape="rounded"
                size="large"
                variant="outlined" color="primary"
                onChange={(_, page: number) => {
                    dispatch(movieActions.changePage(page))
                    navigate(`?page=${page}`);
                }}

            />
        </div>
    );
};

export {PaginationNumbers};


// const {page} = useParams<{page:string}>();
//
// const pageNew = page ? +page : 1
// console.log(pageNew)

// const {page} = useParams<{page:string}>();

// /discover/movie