import {FC} from "react";

import {Header} from "../components/Header/Header";
import {MovieNowPlaying} from "../components/MovieNowPlaying/MovieNowPlaying";
import {MovieTopRated} from "../components/MovieTopRated/MovieTopRated";
import {Footer} from "../components/Footer/Footer";


const MainPage: FC = () => {
    return (
        <div>
            <Header/>
            {/*<MovieNowPlaying/>*/}
            <MovieTopRated/>
            <Footer/>
        </div>
    );
};

export {MainPage};