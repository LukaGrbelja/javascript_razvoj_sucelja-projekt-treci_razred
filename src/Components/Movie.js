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
            <NavigationBar currentlyActive="filmovi"/>
            <div className="row p-5">
                <div className="col-sm-5">
                    <img src={movieparameters.Poster} style={{width: "-webkit-fill-available"}} alt="Nema slike"/>
                </div>
                <div className="col-sm-7">
                    <p style={{color:"white"}}>
                    Ime filma: {movieparameters.Title}<br/>
                    Žanrovi: {movieparameters.Genre}<br/>
                    Glumci: {movieparameters.Actors}<br/>
                    Direktor: {movieparameters.Director}<br/>
                    Duljina filma: {movieparameters.Runtime}<br/>
                    Datum izlaska: {movieparameters.Released}<br/>
                    Država: {movieparameters.Country}<br/>
                    Jezik: {movieparameters.Language}<br/>
                    Zarada: {movieparameters.BoxOffice}<br/>
                    IMDb ocjena: {movieparameters.Ratings[0].Value}<br/>
                    Rotten Tomatoes ocjena: {movieparameters.Ratings[1].Value}<br/>
                    Metacritic ocjena: {movieparameters.Ratings[2].Value}<br/>
                    Opis: {movieparameters.Plot}
                    </p>
                </div>
            </div>
        </>
    );
}

export default Movie;