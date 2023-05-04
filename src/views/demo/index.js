import {React} from 'react';
import { NavLink } from 'react-router-dom';
import * as ROUTES from '../../constants/RouteConstant'
const Demo = () =>{
    
    return(
        <div>
            <NavLink exact="true" to={ROUTES.SIGNIN}>Sign In</NavLink>
        </div>
    )
}
export default Demo;