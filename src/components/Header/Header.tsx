import {FC} from "react";
import {useNavigate} from "react-router-dom";

import css from './Header.module.css'
import {useAppDispatch} from "../../hooks";
import {movieActions} from "../../redux";
import {ThemeSwitcher} from "../ThemeSwitcher/ThemeSwitcher";
import {SearchMovie} from "../SearchMovie/SearchMovie";


const Header: FC = () => {

    let navigate = useNavigate();
    const dispatch = useAppDispatch();

    const handleMovieListClick = () => {
        dispatch(movieActions.resetPage());
        navigate("/discover/movie?page=1");
    };

    return (
        <div className={css.Header}>
            <h3>HEADER</h3>
            <ThemeSwitcher/>
            <div>LOGO</div>
            <button onClick={()=>navigate('/')}>Main page</button>
            <button onClick={handleMovieListClick}>MovieList</button>
            <div><SearchMovie/></div>
            <div>LOG IN</div>
        </div>
    );
};

export {Header};
