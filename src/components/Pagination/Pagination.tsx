import {FC} from "react";
import {useAppDispatch, useAppSelector} from "../../hooks";
import {movieActions} from "../../redux";
import {PageNumber} from "./PageNumber";

interface IProps {

}

const Pagination: FC<IProps> = () => {

    const {currentPage, total_pages} = useAppSelector(state => state.movies);

    const dispatch = useAppDispatch();

    const handlePrevClick = () => {
        if (currentPage > 1) {
            dispatch(movieActions.getAll({currentPage: currentPage - 1}))
        }
    };
    const handleNexClick = () => {
        if (currentPage < total_pages) {
            dispatch(movieActions.getAll({currentPage: currentPage + 1}))
        }
    };

    // const handlePageClick = (pageNumber: number) => {
    //     dispatch(movieActions.getAll({ currentPage: pageNumber}));
    // };

    const getPageNumbers =()=>{
        const maxPageNumbersToShow = 10;
        const currentPageNumber = currentPage;
        const totalPagesNumber = total_pages;
        const half = Math.floor(maxPageNumbersToShow / 2);

        if (totalPagesNumber <= maxPageNumbersToShow){
            return Array.from({length:totalPagesNumber},(_,i)=>i+1);
        }else if (currentPageNumber <= half){
            return Array.from({length:maxPageNumbersToShow},(_,i)=>i+1)
        }else if (currentPageNumber >= totalPagesNumber - half) {
            return Array.from(
                { length: maxPageNumbersToShow },
                (_, i) => totalPagesNumber - maxPageNumbersToShow + i + 1
            );
    } else {
            return Array.from(
                { length: maxPageNumbersToShow },
                (_, i) => currentPageNumber - half + i
            );
        }
    };


    return (
        <div>
            <button disabled={currentPage === 1} onClick={handlePrevClick}>Prev</button>
            {getPageNumbers().map((pageNumber) => (
                <PageNumber
                    key={pageNumber}
                    pageNumber={pageNumber}
                    isActive={pageNumber === currentPage}
                />))}
            <button disabled={currentPage < total_pages}>...</button>
            <button>{total_pages}</button>
            <button disabled={currentPage === total_pages} onClick={handleNexClick}>Next</button>
        </div>
    );
};

export {Pagination};



