import {FC} from "react";
import Switch from '@mui/material/Switch';

import {useAppDispatch, useAppSelector} from "../../hooks";
import {themeActions} from "../../redux";
import css from './ThemeSwitcher.module.css';
import '../../styles/global.css';

const ThemeSwitcher: FC = () => {

    const dispatch = useAppDispatch();

    const {darkMode} = useAppSelector(state => state.theme);

    const handleSwitcher = () => {
        dispatch(themeActions.switcherTheme())
    };

    return (
        <div>
            <Switch
                checked={darkMode}
                onChange={handleSwitcher}
                color='primary'
                inputProps={{'aria-label':'toggle theme'}}
            />
        </div>
    );
};

export {ThemeSwitcher};