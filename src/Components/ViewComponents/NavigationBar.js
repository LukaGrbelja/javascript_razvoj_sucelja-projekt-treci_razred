function NavigationBar({currentlyActive}) {
    setTimeout(()=>{
        ///document.getElementById(currentlyActive).classList.add("active");
    },100);
    return(
        <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
                <a className="navbar-brand" id="navbar" href="#">Navbar</a>
                <div className="navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link" id="home" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" id="link" href="#">Link</a>
                        </li>
                    </ul>
                    <form className="d-flex" role="search">
                        <button className="btn btn-outline-success" type="submit">Log in</button>
                    </form>
                </div>
            </div>
        </nav>
    );
}

export default NavigationBar;