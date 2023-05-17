import {FC} from "react";

import {Header} from "../components/Header/Header";
import {MovieTopRated} from "../components/MovieTopRated/MovieTopRated";
import {MoviePopularList} from "../components/MoviePopularList/MoviePopularList";
import {Footer} from "../components/Footer/Footer";
import {GenreList} from "../components/GenreList/GenreList";


const MainPage: FC = () => {
    return (
        <div>
            <Header/>
            <MovieTopRated/>
            <GenreList/>
            <p> hided - filtes by genre/date/rate</p>
            <MoviePopularList/>
            <Footer/>
        </div>
    );
};

export {MainPage};