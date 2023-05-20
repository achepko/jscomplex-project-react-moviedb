import React, {FC, useEffect} from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay, Navigation, Pagination} from "swiper";

import css from './MovieInfoSimilar.module.css'
import {useAppDispatch, useAppSelector} from "../../hooks";
import {movieActions} from "../../redux";
import {MovieListCard} from "../MovieListCard/MovieListCard";

interface IProps {
    id?: string
}

const MovieInfoSimilar: FC<IProps> = ({id}) => {
    const dispatch = useAppDispatch();
    const {similarMovies} = useAppSelector(state => state.movies);

    useEffect(() => {
     if (id){
         dispatch(movieActions.getSimilarMoviesById(+id));
     }
    }, [dispatch,id])

    const similarShortMoviesList = similarMovies.slice(0, 5)

    return (
        <div className={css.MovieInfoSimilar}>
            {similarShortMoviesList.map(movie => <MovieListCard key={movie.id} movie={movie}/>)}
            {/*<Swiper*/}
            {/*    slidesPerView={1}*/}
            {/*    loop={true}*/}
            {/*    pagination={{*/}
            {/*        clickable: true,*/}
            {/*    }}*/}
            {/*    navigation={true}*/}
            {/*    modules={[Pagination, Navigation, Autoplay]}>*/}
            {/*    {*/}
            {/*        similarShortMoviesList && similarShortMoviesList.map(movie =>*/}
            {/*            <SwiperSlide key={movie.id}><MovieListCard key={movie.id} movie={movie}/></SwiperSlide>)*/}
            {/*    }*/}
            {/*</Swiper>*/}
        </div>
    );
};

export {MovieInfoSimilar};