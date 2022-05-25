import { useState, useContext } from "react";
import NavigationBar from "./ViewComponents/NavigationBar";
import { MoviesContext } from "../Context/MoviesContext";

function PostMovies() {

    const {addMovie} = useContext(MoviesContext);

    const [movie,setMovie] = useState({
        Title: "",
        Genre: "",
        Actors: "",
        Director: "",
        Language: "",
        Country: "",
        BoxOffice: "",
        Released: "",
        Runtime: "",
        imdbRating: "",
        Ratings: [],
        Plot: "",
        Poster: ""
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        addMovie(movie);
    }

    return(
        <>
            <NavigationBar currentlyActive="filmovi"/>
            <div className="row p-5">
                <div className="col-3"/>
                <div className="col-6" style={{color:"white"}}>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label className="form-label">Ime filma</label>
                            <input required type="text" className="form-control" onChange={(e)=>{setMovie({...movie,Title: e.target.value})}}/>
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Zanr filma</label>
                            <input required type="text" className="form-control" onChange={(e)=>{setMovie({...movie,Genre: e.target.value})}}/>
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Glumci</label>
                            <input required type="text" className="form-control" onChange={(e)=>{setMovie({...movie,Actors: e.target.value})}}/>
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Direktor filma</label>
                            <input required type="text" className="form-control" onChange={(e)=>{setMovie({...movie,Director: e.target.value})}}/>
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Jezik filma</label>
                            <input required type="text" className="form-control" onChange={(e)=>{setMovie({...movie,Language: e.target.value})}}/>
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Drzava</label>
                            <input required type="text" className="form-control" onChange={(e)=>{setMovie({...movie,Country: e.target.value})}}/>
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Zarada</label>
                            <input required type="text" className="form-control" onChange={(e)=>{setMovie({...movie,BoxOffice: e.target.value})}}/>
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Datum izlaska</label>
                            <input required type="text" className="form-control" onChange={(e)=>{setMovie({...movie,Released: e.target.value})}}/>
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Duljina filma</label>
                            <input required type="text" className="form-control" onChange={(e)=>{setMovie({...movie,Runtime: e.target.value})}}/>
                        </div>
                        <div className="mb-3">
                            <label className="form-label">IMDb ocjena</label>
                            <input required type="text" className="form-control" onChange={(e)=>{setMovie({...movie,imdbRating: e.target.value,Ratings:[...movie.Ratings,{Source: "Internet Movie Database",Value: e.target.value}]})}}/>
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Rotten Tomatoes ocjena</label>
                            <input required type="text" className="form-control" onChange={(e)=>{setMovie({...movie,Ratings:[...movie.Ratings,{Source: "Rotten Tomatoes",Value: e.target.value}]})}}/>
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Metacritic ocjena</label>
                            <input required type="text" className="form-control" onChange={(e)=>{setMovie({...movie,Ratings:[...movie.Ratings,{Source: "Metacritic",  Value: e.target.value}]})}}/>
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Opis</label>
                            <textarea required type="text" className="form-control" onChange={(e)=>{setMovie({...movie,Plot: e.target.value})}}/>
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Slika url</label>
                            <input required type="text" className="form-control" onChange={(e)=>{setMovie({...movie,Poster: e.target.value})}}/>
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>
        </>
    );

}

export default PostMovies;