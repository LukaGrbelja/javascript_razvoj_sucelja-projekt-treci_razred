import { useState, useContext } from "react";
import NavigationBar from "./ViewComponents/NavigationBar";
import { NewsContext } from "../Context/NewsContext";
import { LogInContext } from "../Context/LogInContext";

function PostArticles() {

    const {addArticle} = useContext(NewsContext);
    const {user} = useContext(LogInContext);

    const [article,setArticle] = useState({
        Title: "",
        URL: "",
        Date: new Date(Date.now()),
        Description: "",
        User: user.username,
        FullText: ""
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        addArticle(article);
    }

    return(
        <>
            <NavigationBar currentlyActive="filmovi"/>
            <div className="row p-5">
                <div className="col-3"/>
                <div className="col-6" style={{color:"white"}}>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label className="form-label">Naslov clanka</label>
                            <input required type="text" className="form-control" onChange={(e)=>{setArticle({...article,Title: e.target.value})}}/>
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Izvor clanka</label>
                            <input required type="text" className="form-control" onChange={(e)=>{setArticle({...article,URL: e.target.value})}}/>
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Opis</label>
                            <input required type="text" className="form-control" onChange={(e)=>{setArticle({...article,Description: e.target.value})}}/>
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Puni tekst</label>
                            <textarea required type="text" className="form-control" onChange={(e)=>{setArticle({...article,FullText: e.target.value})}}/>
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>
        </>
    );

}

export default PostArticles;