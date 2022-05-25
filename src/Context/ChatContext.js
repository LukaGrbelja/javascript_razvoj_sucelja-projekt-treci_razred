import { Component, createContext } from "react";

export const ChatContext = createContext();

class ChatContextProvider extends Component {
    state = {
        posts: 
        [
            {
                Text: "Molimo budite pristojni u chatu!",
                User: "Admin",
                Date: new Date(2022, 4, 17, 12, 24)
            }
        ]
    };
    addPosts = (obj) => {
        this.setState({posts:[...this.state.posts,obj]});
    }
    render() {
        return(
            <ChatContext.Provider value={{...this.state,addPost: this.addPosts}}>
                {this.props.children}
            </ChatContext.Provider>
        );
    }
}

export default ChatContextProvider;