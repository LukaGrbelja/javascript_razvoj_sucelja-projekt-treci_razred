import NavigationBar from "./ViewComponents/NavigationBar";
import { ChatContext } from "../Context/ChatContext";
import { LogInContext } from "../Context/LogInContext";
import { useContext,useState } from "react";

function CommunityChat() {
    const {posts,addPost} = useContext(ChatContext);
    const {user} = useContext(LogInContext);
    const [input,setInput] = useState("");
    let index = 0;
    posts.forEach(element => {
        element.Key = index;
        index++;
    });
    const handleSubmit = (e) => {
        e.preventDefault();
        if(user.username != null) {
            addPost(
                {
                    Text: input,
                    User: user.username,
                    Date: new Date(Date.now())
                }
            );
        }
        else {
            window.alert("Ulogiraj se kako bi mogao objavljivati");
        }
    }
    return(
        <>
            <NavigationBar currentlyActive={"chat"}/>
            <div className="row p-5">
                <div className="col-12">
                    <div className="container container-fluid">
                        <div className="row p-5 mb-4 rounded-3 bg-secondary">
                            <div className="col-sm-0 col-md-3"/>
                            <div className="col-sm-12 col-md-6">
                                <form onSubmit={handleSubmit}>
                                    <div className="mb-3">
                                        <label className="form-label">Upisi tekst</label>
                                        <textarea type="text" className="form-control" rows="5" onChange={(e)=>{setInput(e.target.value)}}/>
                                    </div>
                                    <button type="submit" className="btn btn-primary">Submit</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                {posts.map((post) => {
                    return(
                        <div className="col-xs-12 mb-5" key={post.Key}>
                            <div className="card">
                                <div className="card-header">
                                    {post.User}
                                </div>
                                <div className="card-body">
                                    <p className="card-text">{post.Text}</p>
                                </div>
                                <div className="card-footer text-muted">
                                    {post.Date.getHours()}:{post.Date.getMinutes()} {post.Date.getDate()}/{post.Date.getMonth()+1}/{post.Date.getFullYear()}
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </>
    );
}

export default CommunityChat;