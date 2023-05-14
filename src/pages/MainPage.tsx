import {FC} from "react";

import {Header} from "../components/Header/Header";
import {MovieOfDay} from "../components/MovieOfDay/MovieOfDay";
import {MovieListNew} from "../components/MovieListNews/MovieListNew";
import {Footer} from "../components/Footer/Footer";


const MainPage: FC = () => {
    return (
        <div>
            <Header/>
            <MovieOfDay/>
            <MovieListNew/>
            <Footer/>
        </div>
    );
};

export {MainPage};