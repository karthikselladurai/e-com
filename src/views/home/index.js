import { Link } from "react-router-dom";
import { HOME } from "../../constants/RouteConstant";
import { Navigation } from '../../components/common'
import { useEffect } from "react";
import { Outlet } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import Main from '../../components/main'

const Home = () => {

    const isAuth = useSelector((state) => state.auth.isAuth)
    console.log(isAuth);
    useEffect(() => {
        // const isAuthenticated = useSelector((state) => state.auth.isAuthenticated)
        console.log(isAuth);
    }, [isAuth])
    return (
        <div>
            <h1>Home {isAuth}</h1>
            <Navigation />
            {/* <Main/> */}
            <Outlet />

        </div>
    )
}

export default Home;