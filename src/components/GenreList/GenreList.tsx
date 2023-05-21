import {FC, useEffect, useState} from "react";
import {Button, Menu, MenuItem} from "@mui/material";

import {useAppDispatch, useAppSelector} from "../../hooks";
import {genreActions, movieActions} from "../../redux";
import {Genre} from "../Genre";
import css from "./GenreList.module.css";
import {useNavigate} from "react-router-dom";

const GenreList: FC = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const {genres} = useAppSelector((state) => state.genres);
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleGenreOnClick = (genreId: number) => {
        dispatch(movieActions.resetPage())
        dispatch(movieActions.setGenre(genreId))
        setAnchorEl(null);
        navigate('/')
    };


    useEffect(() => {
        dispatch(genreActions.getGenres());
    }, [dispatch]);

    return (
        <div className={css.GenreList}>
            <Button
                aria-controls="genre-menu"
                aria-haspopup="true"
                variant="contained"
                onClick={handleClick}
                className={css.button_genre_list}>
                Genre List
            </Button>
            <Menu
                id="genre-menu"
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                {genres.map((genre) => (
                    <MenuItem key={genre.id} onClick={() => handleGenreOnClick(genre.id)}>
                        <Genre genre={genre}/>
                    </MenuItem>
                ))}
            </Menu>
        </div>
    );
};

export {GenreList};
