import { Link } from "react-router-dom";
import { HOME} from "../../constants/Routers";

const Home = ()=>{
    console.log(HOME);
    return(
        <div>
            <h1>Home</h1>
            <Link to={HOME}>sgfgfsdg</Link>
        </div>
    )   
}

export default Home;