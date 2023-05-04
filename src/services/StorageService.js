import localStorage from 'localStorage';

const StorageService = {
    setToken(token){
        localStorage.setItem('Token',token)
    },
    getToken(){
        return localStorage.getItem('Token')
    },
    removeToken(){
        localStorage.removeItem('Token')
    },
    setUser(data){
        localStorage.setItem('User',data)
    },
    getUser(){
        return localStorage.getItem('User')
    },
    removeUser(){
        localStorage.removeItem('User')
    },
    removeAll(){
        localStorage.clear()
    }
        
}
export default StorageService;    