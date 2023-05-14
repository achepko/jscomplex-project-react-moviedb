import {FC} from "react";
import {useNavigate} from "react-router-dom";

import css from './Header.module.css'

const Header: FC = () => {

    let navigate = useNavigate();

    return (
        <div className={css.Header}>
            <h3>HEADER</h3>
            <div>LOGO</div>
            <button onClick={()=>navigate('/')}>MAIN page</button>
            <button onClick={()=>navigate('/discover/movie')}>MovieList</button>
            <div>SEARCH</div>
            <div>LOG IN</div>
        </div>
    );
};

export {Header};
