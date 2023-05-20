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
        dispatch(movieActions.setCurrentQuery(''))
        navigate("/discover/movie?page=1");
    };

    return (
        <div className={css.Header}>
            <div> <img src='/logo okten.jfif' alt="oktenLogo" width="80" height="80" style={{ borderRadius: '50%' }}/></div>
            <ThemeSwitcher/>
            <button onClick={()=>navigate('/')}>Main page</button>
            <button onClick={handleMovieListClick}>MovieList</button>
            <div><SearchMovie/></div>
            <div>
                <img src='/profile.avif' alt="userProfile" width="60" height="60" style={{ borderRadius: '50%' }}/>
                <br/>
                <span>UserProfile</span>
            </div>
        </div>
    );
};
export {Header};
