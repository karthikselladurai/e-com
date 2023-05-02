import { React, useEffect } from 'react';
import { NavLink, Navigate } from "react-router-dom";
import * as ROUTE from '../../constants/Routers';
import StorageService from '../../services/StorageService'
import { useNavigate } from 'react-router-dom';
import * as views from '../../views/index'


const Navigation = () => {
    const navigate = useNavigate();
    useEffect(()=>{
        const user = StorageService.getUser()
        if(user === null){
            Navigate('/signin');

        }

    },[])
    // const user = StorageService.getUser()
    // console.log(user);
    // if (user === null) {
    //     return (        
    //         <Navigate to={{pathname:'/signin' }}
    //         />
    //         )
    // }
    // const { pathname } = useLocation();
    console.log(">>>>>>>>>>>>> Navigation");
    return (
        <div>
            <ul>
                {/* <li><NavLink exact to={ROUTE.HOME}>Home</NavLink></li> */}
                <li>2</li>
                <li>3</li>
                <li>4</li>
                <li>5</li>
                <li>6</li>
            </ul>
        </div>
    )
}
export default Navigation;