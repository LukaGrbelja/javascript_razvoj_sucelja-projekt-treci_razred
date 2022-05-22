import { useParams } from "react-router-dom";
import { NewsContext } from "../Context/NewsContext";
import { useContext } from "react";
import NavigationBar from "./ViewComponents/NavigationBar";

function Article() {
    const {articlekey} = useParams();
    const {news} = useContext(NewsContext);
    const newsparameters = news[articlekey];
    return(
        <>
            <NavigationBar currentlyActive="filmovi"/>
            <div className="row p-5">
                <div className="col-sm-12 mb-5">
                    <h1>{newsparameters.Title}</h1>
                    <span>{newsparameters.User}</span>
                </div>
                <div className="col-sm-12 mb-5">
                    <p>{newsparameters.FullText}</p>
                    <a href={newsparameters.URL} className="btn btn-secondary">Pogledaj izvor</a>
                </div>
            </div>
        </>
    );
}

export default Article;