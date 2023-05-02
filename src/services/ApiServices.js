
import axios from 'axios';
const API_URL = 'http://localhost:4000/api/ ';
const apiService = axios.create({
    baseURL: API_URL,
});
const ApiServices = {
    get(endpoint, config = {}) {
        return apiService.get(endpoint, config);
    },
    post(endpoint, data, config = {}) {
        return apiService.post(endpoint, data, config);
    },
    put(endpoint, data, config = {}) {
        return apiService.put(endpoint, data, config);
    },
    delete (endpoint, config = {}) {
        return apiService.delete(endpoint, config);
    }
}
export default ApiServices;