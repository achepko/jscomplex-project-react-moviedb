import {ChangeEvent, FC, useEffect} from "react";
import {Pagination} from "@mui/material";

import {useAppDispatch, useAppSelector} from "../../hooks";
import {movieActions} from "../../redux";
import css from './Pagination.module.css'



const PaginationNumbers: FC = () => {

    const {currentPage, total_pages} = useAppSelector(state => state.movies);

    const dispatch = useAppDispatch();

    useEffect(()=>{
        dispatch(movieActions.getAll({currentPage }));
    },[dispatch,currentPage])

    const handlePageChange = (event: ChangeEvent<unknown>,page: number) => {
        dispatch(movieActions.changePage(page))
    };


    return (
        <div className={css.Pagination}>
            <Pagination
                count={total_pages}
                page={currentPage}
                shape="rounded"
                size="large"
                variant="outlined" color="primary"
                onChange={handlePageChange}

            />
        </div>
    );
};

export {PaginationNumbers};

// import {ChangeEvent, FC} from "react";
// import {Pagination} from "@mui/material";
//
// import {useAppDispatch, useAppSelector} from "../../hooks";
// import {movieActions} from "../../redux";
// import css from './Pagination.module.css'
//
//
//
// const PaginationNumbers: FC = () => {
//
//     const {currentPage, total_pages} = useAppSelector(state => state.movies);
//
//     const dispatch = useAppDispatch();
//
//
//     const handlePageChange = (event: ChangeEvent<unknown>,page: number) => {
//         dispatch(movieActions.getAll({ currentPage: page }));
//
//     };
//
//     return (
//         <div className={css.Pagination}>
//             <Pagination
//                 count={total_pages}
//                 page={currentPage}
//                 shape="rounded"
//                 size="large"
//                 variant="outlined" color="primary"
//                 onChange={handlePageChange}
//
//             />
//         </div>
//     );
// };
//
// export {PaginationNumbers};