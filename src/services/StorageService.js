import localStorage from 'localStorage';

const StorageService = {
    setToken(token){
        localStorage.setItem('Token',token)
    },
        getToken(){
        return localStorage.getItem('Token')
    },
    setUser(data){
        localStorage.setItem('User',data)
    },
    getUser(){
        return localStorage.getItem('User')
    }
        
}
export default StorageService;    