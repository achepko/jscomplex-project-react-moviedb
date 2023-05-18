import {FC} from "react";

import {Header} from "../components/Header/Header";
import {MovieNowPlaying} from "../components/MovieNowPlaying/MovieNowPlaying";
import {MovieTopRated} from "../components/MovieTopRated/MovieTopRated";
import {Footer} from "../components/Footer/Footer";
import {GenreList} from "../components/GenreList/GenreList";


const MainPage: FC = () => {
    return (
        <div>
            <Header/>
            <MovieNowPlaying/>
            <GenreList/>
            <p> hided - filtes by genre/date/rate</p>
            <MovieTopRated/>
            <Footer/>
        </div>
    );
};

export {MainPage};