import NavigationBar from "./ViewComponents/NavigationBar";
import { ChatContext } from "../Context/ChatContext";
import { useContext } from "react";

function CommunityChat() {
    const {posts} = useContext(ChatContext);
    let index = 0;
    posts.forEach(element => {
        element.Key = index;
        index++;
    });
    return(
        <>
            <NavigationBar currentlyActive={"chat"}/>
            <div className="row p-5">
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
                                    {post.Date.getHours()}:{post.Date.getMinutes()} {post.Date.getDate()}/{post.Date.getMonth()}/{post.Date.getFullYear()}
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