import { Component, createContext } from "react";

export const ChatContext = createContext();

class ChatContextProvider extends Component {
    state = {
        posts: 
        [
            {
                Text: "Molimo budite pristojni u chatu!",
                User: "Admin",
                Date: new Date(2022, 5, 17, 12, 24)
            }
        ]
    };
    render() {
        return(
            <ChatContext.Provider value={{...this.state}}>
                {this.props.children}
            </ChatContext.Provider>
        );
    }
}

export default ChatContextProvider;