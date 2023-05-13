import {FC} from "react";
import {Outlet} from "react-router-dom";

interface IProps {

}

const MainLayout: FC<IProps> = () => {
    return (
        <div>
            MainLayout
            <hr/>
            <Outlet/>
        </div>
    );
};

export {MainLayout};