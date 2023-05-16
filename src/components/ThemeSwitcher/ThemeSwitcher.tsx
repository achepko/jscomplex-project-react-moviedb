import {FC} from "react";
import Switch from '@mui/material/Switch';

import {useAppDispatch, useAppSelector} from "../../hooks";
import {themeActions} from "../../redux/slices/theme.slice";
import css from './ThemeSwitcher.module.css';
import '../../styles/global.css';

const ThemeSwitcher: FC = () => {

    const dispatch = useAppDispatch();

    const {darkMode} = useAppSelector(state => state.theme);

    const handleSwitcher = () => {
        dispatch(themeActions.switcherTheme())
    };


    // const themeClass = darkMode ? css.darkTheme : css.lightTheme;

    return (
        <div className={css.themeSwitcher}>
            <Switch
                checked={darkMode}
                onChange={handleSwitcher}
                color='primary'
                inputProps={{'aria-label':'toggle theme'}}
            />
            {/*<span className={themeClass}>{darkMode ? 'Dark' : 'Light'}</span>*/}
        </div>
    );
};

export {ThemeSwitcher};