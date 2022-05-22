import { Link } from "react-router-dom";

function NavigationBar({currentlyActive}) {
    setTimeout(()=>{
        document.getElementById(currentlyActive).classList.add("active");
    },100);
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
                            <Link href="#" className="nav-link" to={"/novosti"}>
                                <div id="novostDi">
                                    Novosti
                                </div>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href="#" className="nav-link" to={"/novosti"}>
                                <div id="novostDvi">
                                    Novosti
                                </div>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default NavigationBar;