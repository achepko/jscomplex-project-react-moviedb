import {FC} from "react";
import {useNavigate} from "react-router-dom";

import css from './Header.module.css'
import {useAppDispatch} from "../../hooks";
import {movieActions} from "../../redux";
import {ThemeSwitcher} from "../ThemeSwitcher";
import {SearchMovie} from "../SearchMovie";
import {GenreList} from "../GenreList";
import {Button} from "@mui/material";


const Header: FC = () => {

    let navigate = useNavigate();
    const dispatch = useAppDispatch();

    const handleMovieListClick = () => {
        dispatch(movieActions.resetPage());
        dispatch(movieActions.setCurrentQuery(''));
        navigate("/discover/movie?page=1");
    };

    return (
        <div className={css.Header}>
            <button onClick={()=>navigate('/')} className={css.home_button}>
                <img src='/logo okten.jfif' alt="oktenLogo" width="80" height="80" style={{ borderRadius: '50%' }}/>
            </button>
            <ThemeSwitcher/>
            <Button
                aria-controls="genre-menu"
                aria-haspopup="true"
                variant="contained"
                onClick={handleMovieListClick}>
                Movie List
            </Button>
            <GenreList/>
            <div><SearchMovie/></div>
            <div>
                <img src='/profile.avif' alt="userProfile" width="60" height="60" style={{ borderRadius: '50%' }}/>
            </div>
        </div>
    );
};
export {Header};
