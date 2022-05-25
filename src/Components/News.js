import { NewsContext } from "../Context/NewsContext";
import { LogInContext } from "../Context/LogInContext";
import { useContext } from "react";
import { Link } from "react-router-dom";
import NavigationBar from "./ViewComponents/NavigationBar";

function News() {
    const {news} = useContext(NewsContext);
    const {user} = useContext(LogInContext);
    let index = 0;
    news.forEach(element => {
        element.Key = index;
        index++;
    });
    return(
        <>
            <NavigationBar currentlyActive="novosti"/>
            <div className="row p-5">
                <div className="col-12 text-center mb-4">
                    {
                        user.username == null ? 
                        <button type="submit" className="btn btn-primary" onClick={()=>{window.alert("Prijavite se da bi mogli objavljivati novosti")}}>Dodaj clanak</button>
                        :
                        <Link to={"/novosti/dodaj"}>
                            <button type="submit" className="btn btn-primary">Dodaj novost</button>
                        </Link>
                    }
                </div>
                {news.map((article) => {
                    return(
                        <div className="col-sm-12 mb-5" key={article.Key}>
                            <div className="card text-center">
                                <div className="card-header">
                                    {article.User}
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title">{article.Title}</h5>
                                    <p className="card-text">{article.Description}</p>
                                    <Link to={`/novosti/${article.Key}`}>
                                        <button type="button" className="btn btn-primary mb-2">Saznaj više</button>
                                    </Link><br/>
                                    <a href={article.URL} className="btn btn-secondary btn-outline-primary">Pogledaj izvor</a>
                                </div>
                                <div className="card-footer text-muted">
                                    {article.Date.getHours()}:{article.Date.getMinutes()} {article.Date.getDate()}/{article.Date.getMonth()}/{article.Date.getFullYear()}
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </>
    );
}

export default News;