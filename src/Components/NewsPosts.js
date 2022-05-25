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
        FullText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
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
                <div className="col-6">
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
                            <textarea required type="text" className="form-control" onChange={(e)=>{setArticle({...article,Director: e.target.value})}}/>
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>
        </>
    );

}

export default PostArticles;