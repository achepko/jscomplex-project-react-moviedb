import {FC} from "react";

import {Header} from "../components/Header/Header";
import {MovieOfDay} from "../components/MovieOfDay/MovieOfDay";
import {MovieListNew} from "../components/MovieListNews/MovieListNew";
import {Footer} from "../components/Footer/Footer";
import {GenreList} from "../components/GenreList/GenreList";


const MainPage: FC = () => {
    return (
        <div>
            <Header/>
            <MovieOfDay/>
            <GenreList/>
            <p> hided - filtes by genre/date/rate</p>
            <MovieListNew/>
            <Footer/>
        </div>
    );
};

export {MainPage};