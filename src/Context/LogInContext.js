import { createContext,Component } from "react";

export const LogInContext = createContext();

class LogInContextProvider extends Component {
    state = {
        user: {
            userName: null
        }
    }
    logIn = (username) => {
        this.setState({user:{username: username}});
    }
    render() {
        return(
            <LogInContext.Provider value={{...this.state, logIn: this.logIn}}>
                {this.props.children}
            </LogInContext.Provider>
        );
    }
}

export default LogInContextProvider;