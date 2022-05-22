import { Component, createContext } from "react";

export const MoviesContext = createContext();

class MoviesContextProvider extends Component {
    state = {
        movies: 
        [
            {
                Title: "Guardians of the Galaxy Vol. 2",
                Genre: "Action, Adventure, Comedy",
                Actors: "Chris Pratt, Zoe Saldana, Dave Bautista",
                Director: "James Gunn",
                Language: "English",
                Country: "United States",
                BoxOffice: "$389,813,101",
                Released: "05 May 2017",
                Runtime: "136 min",
                Year: "2017",
                imdbRating: "7.6",
                Ratings: [
                    {Source: "Internet Movie Database",Value: "7.6/10"},
                    {Source: "Rotten Tomatoes",Value: "85%"},
                    {Source: "Metacritic",  Value: "67/100"}],
                Plot: "The Guardians struggle to keep together as a team while dealing with their personal family issues, notably Star-Lord's encounter with his father the ambitious celestial being Ego.",
                Poster: "https://m.media-amazon.com/images/M/MV5BNjM0NTc0NzItM2FlYS00YzEwLWE0YmUtNTA2ZWIzODc2OTgxXkEyXkFqcGdeQXVyNTgwNzIyNzg@._V1_SX300.jpg"
            },
            {
                Title: "Star Wars",
                Genre: "Action, Adventure, Fantasy",
                Actors: "Mark Hamill, Harrison Ford, Carrie Fisher",
                Director: "George Lucas",
                Language: "English",
                Country: "United States",
                BoxOffice: "$460,998,507",
                Released: "25 May 1977",
                Runtime: "121 min",
                Year: "1977",
                imdbRating: "8.6",
                Ratings: [
                    {Source: "Internet Movie Database",Value: "8.6/10"},
                    {Source: "Rotten Tomatoes",Value: "93%"},
                    {Source: "Metacritic",  Value: "90/100"}],
                Plot: "Luke Skywalker joins forces with a Jedi Knight, a cocky pilot, a Wookiee and two droids to save the galaxy from the Empire's world-destroying battle station, while also attempting to rescue Princess Leia from the mysterious Darth Vad",
                Poster: "https://m.media-amazon.com/images/M/MV5BNzVlY2MwMjktM2E4OS00Y2Y3LWE3ZjctYzhkZGM3YzA1ZWM2XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg"
            }
        ]
    };
    render() {
        return(
            <MoviesContext.Provider value={{...this.state}}>
                {this.props.children}
            </MoviesContext.Provider>
        );
    }
}

export default MoviesContextProvider;