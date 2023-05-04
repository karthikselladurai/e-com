import * as CHAT from '../../components/chat';
import {  useSelector } from 'react-redux';

const Chat = ()=>{
    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated)
    console.log("chat",isAuthenticated);
    return(
        <div>
            <h1>Chat components</h1>
            <CHAT.ChatList/>
            <CHAT.ChatMessage/>
        </div>
    )
}
export default Chat;