import { MoviesContext } from "../Context/MoviesContext";
import { LogInContext } from "../Context/LogInContext";
import { useContext } from "react";
import { Link } from "react-router-dom";
import NavigationBar from "./ViewComponents/NavigationBar";

function Movies() {
    const {movies} = useContext(MoviesContext);
    const {user} = useContext(LogInContext);
    let index = 0;
    movies.forEach(element => {
        element.Key = index;
        index++;
    });
    return(
        <>
            <NavigationBar currentlyActive="filmovi"/>
            <div className="row p-5">
                <div className="col-12 text-center mb-4">
                    {
                        user.username == null ? 
                        <button type="submit" className="btn btn-primary" onClick={()=>{window.alert("Prijavite se da bi mogli dodavati filmove")}}>Dodaj film</button>
                        :
                        <Link to={"/film/dodaj"}>
                            <button type="submit" className="btn btn-primary">Dodaj film</button>
                        </Link>
                    }
                </div>
                {movies.map((movie) => {
                    return(
                        <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3 mb-5" key={movie.Key}>
                            <Link to={`/film/${movie.Key}`}>
                                <div className="card" style={{width: "match-parent",background:"black"}}>
                                    <img src={movie.Poster} style={{height: "20rem"}} className="card-img-top" alt="Nema slike"/>
                                    <div className="card-body">
                                        <h5 className="card-title">{movie.Title}</h5>
                                    </div>
                                    <ul className="list-group list-group-flush">
                                        <li className="list-group-item" style={{background:"black",color: "white",width: "match-parent"}}>Žanr: {movie.Genre}</li>
                                        <li className="list-group-item" style={{background:"black",color: "white",width: "match-parent"}}>Glumci: {movie.Actors}</li>
                                        <li className="list-group-item" style={{background:"black",color: "white",width: "match-parent"}}>IMDb ocjena: {movie.imdbRating}</li>
                                    </ul>
                                </div>
                            </Link>
                        </div>
                    );
                })}
            </div>
        </>
    );
}

export default Movies;