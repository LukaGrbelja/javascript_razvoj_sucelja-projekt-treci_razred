import { Component, createContext } from "react";

export const NewsContext = createContext();

class NewsContextProvider extends Component {
    state = {
        news: 
        [
            {
                Title: "Naslov vijesti",
                URL: "https://www.index.hr",
                Date: new Date(2022, 5, 17, 12, 24),
                Description: "Lorem ipsum dolor sit amet.",
                User: "Admin",
                FullText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            },
            {
                Title: "Naslov druge vijesti",
                URL: "https://www.index.hr/sport",
                Date: new Date(2022, 5, 22, 17, 59),
                Description: "Vestibulum rhoncus est pellentesque elit.",
                User: "Admin",
                FullText: "Vestibulum rhoncus est pellentesque elit. Ut consequat semper viverra nam libero justo. Aliquet sagittis id consectetur purus ut faucibus pulvinar. Congue nisi vitae suscipit tellus mauris a diam. Urna nec tincidunt praesent semper feugiat nibh sed. Egestas sed tempus urna et pharetra pharetra. Lacus vestibulum sed arcu non. Tincidunt praesent semper feugiat nibh. Ultrices in iaculis nunc sed augue lacus viverra vitae. Ut tellus elementum sagittis vitae et. Turpis egestas integer eget aliquet. Nunc faucibus a pellentesque sit amet porttitor eget. Lectus vestibulum mattis ullamcorper velit sed ullamcorper morbi tincidunt ornare. Arcu felis bibendum ut tristique. Consequat semper viverra nam libero justo laoreet sit amet cursus."
            }
        ]
    };
    addArticle = (article) => {
        this.setState({...this.state,news: [...this.state.news,article]});
    }
    render() {
        return(
            <NewsContext.Provider value={{...this.state,addArticle:this.addArticle}}>
                {this.props.children}
            </NewsContext.Provider>
        );
    }
}

export default NewsContextProvider;