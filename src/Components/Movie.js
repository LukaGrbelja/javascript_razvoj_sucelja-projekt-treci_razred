import { useParams } from "react-router-dom";
import { MoviesContext } from "../Context/MoviesContext";
import { useContext } from "react";
import NavigationBar from "./ViewComponents/NavigationBar";

function Movie() {
    const {moviekey} = useParams();
    const {movies} = useContext(MoviesContext);
    const movieparameters = movies[moviekey];
    return(
        <>
            <NavigationBar currentlyActive="link"/>
            <div className="row p-5">
                <div className="col-sm-5">
                    <img src={movieparameters.Poster} style={{width: "-webkit-fill-available"}} alt="Nema slike"/>
                </div>
                <div className="col-sm-7">
                    <p>
                    Ime filma: {movieparameters.Title}<br/>
                    Zanrovi: {movieparameters.Genre}<br/>
                    Glumci: {movieparameters.Actors}<br/>
                    Direktor: {movieparameters.Director}<br/>
                    Duljina filma: {movieparameters.Runtime}<br/>
                    Datum izlaska: {movieparameters.Released}<br/>
                    Drzava: {movieparameters.Country}<br/>
                    Jezik: {movieparameters.Language}<br/>
                    Zarada: {movieparameters.BoxOffice}<br/>
                    IMDb ocjena: {movieparameters.Ratings[0].Value}<br/>
                    Rotten Tomatoes ocjena: {movieparameters.Ratings[1].Value}<br/>
                    Metacritic ocjena: {movieparameters.Ratings[2].Value}<br/>
    Plot: "Luke Skywalker joins forces with a Jedi Knight, a cocky pilot, a Wookiee and two droids to save the galaxy from the Empire's world-destroying battle station, while also attempting to rescue Princess Leia from the mysterious Darth Vad"
                    </p>
                </div>
            </div>
        </>
    );
}

export default Movie;