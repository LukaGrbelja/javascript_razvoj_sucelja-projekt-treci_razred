import { Link } from "react-router-dom";
import { LogInContext } from "../../Context/LogInContext";
import { useContext } from "react";

function NavigationBar({currentlyActive}) {
    setTimeout(()=>{
        document.getElementById(currentlyActive).classList.add("active");
    },100);
    const {user,logIn} = useContext(LogInContext);
    return(
        <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
            <div className="container-fluid">
                <Link to={"/"}>
                    <div className="navbar-brand" id="filmovi">
                        Filmovi
                    </div>
                </Link>
                <button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbar">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="navbar-collapse collapse" id="navbar">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link href="#" className="nav-link" to={"/novosti"}>
                                <div id="novosti">
                                    Novosti
                                </div>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href="#" className="nav-link" to={"/razgovor"}>
                                <div id="chat">
                                    Razgovor
                                </div>
                            </Link>
                        </li>
                        <li className="nav-item">
                            {
                                user.username == null ?
                                <Link to={"/prijava"}>
                                    <button className="btn btn-outline-success" type="submit">Log in</button>
                                </Link>
                                :
                                <button className="btn btn-outline-success" type="submit" onClick={()=>{logIn(null)}}>Log out</button>
                            }
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default NavigationBar;