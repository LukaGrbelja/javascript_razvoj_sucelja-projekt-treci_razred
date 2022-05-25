import { Component, createContext } from "react";

export const NewsContext = createContext();

class NewsContextProvider extends Component {
    state = {
        news: 
        [
            {
                Title: "Otvara se hrvatska web-stranica za ocjenjivanje filmova.",
                URL: "https://www.index.hr/vijest/hrvatska-web-stranica-za-filmove",
                Date: new Date(2022, 4, 17, 12, 24),
                Description: "Mladi programer iz Splita je počeo projekt u kojemu će se moći ocjenjivati i komentirati filmove. Projekt cilja hrvatsko društvo isključivo.",
                User: "Admin",
                FullText: "Mladi programer iz Splita je počeo projekt u kojemu će se moći ocjenjivati i komentirati filmove. Projekt cilja hrvatsko društvo isključivo. Nažalost, iz dobro provjerenih izvora saznajemo da projekt neće biti potpuno završen zbog malo vremena i lošeg raspoređivanja istog."
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