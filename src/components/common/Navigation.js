import { React, useEffect } from 'react';
import { NavLink, Navigate } from "react-router-dom";
import * as ROUTE from '../../constants/RouteConstant';
import StorageService from '../../services/StorageService'
import { useNavigate } from 'react-router-dom';
import * as views from '../../views/index'


const Navigation = () => {
    const navigate = useNavigate();
    const noBullet = { listStyle: 'none' };
    const signOutHandler = () => {
        StorageService.removeAll()
    }
    return (
        <div>
            <ul style={noBullet}>
                <li><NavLink to='/home'>Home</NavLink></li>
                <li><NavLink to={ROUTE.HOME_CHAT}>Chat</NavLink></li>
                <li><NavLink to={ROUTE.HOME}>Add Post</NavLink></li>
                <li><NavLink to={ROUTE.HOME_ACTIVITIES}>Activities</NavLink></li>
                <li><NavLink to={ROUTE.HOME}>Search</NavLink></li>
                <li><NavLink to={ROUTE.HOME}>Profile</NavLink></li>
                <button onClick={signOutHandler}>Sign Out</button>

            </ul>
        </div>
    )
}
export default Navigation;