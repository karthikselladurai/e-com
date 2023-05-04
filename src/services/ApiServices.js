
import axios from 'axios';
import api from './Interceptore';

const ApiServices = {
    get(endpoint, config = {}) {
        return api.get(endpoint, config).catch(errorHandler);
    },
    post(endpoint, data, config = {}) {
        return api.post(endpoint, data, config).catch(errorHandler);
    },
    put(endpoint, data, config = {}) {
        return api.put(endpoint, data, config).catch(errorHandler);
    },
    delete(endpoint, config = {}) {
        return api.delete(endpoint, config).catch(errorHandler);
    }
}
const errorHandler = (err) => {
    if(err.response.message){
        console.log("error >>>>>>>>>>> ",err.response.data.message);
    }
    return err.response
}
export default ApiServices;