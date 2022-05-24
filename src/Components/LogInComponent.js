import NavigationBar from "./ViewComponents/NavigationBar";
import { LogInContext } from "../Context/LogInContext";
import { useContext,useState,useEffect,useRef } from "react";

function LogInComponent() {
    const {user,logIn} = useContext(LogInContext);
    const ref = useRef();
    const [userNameInput,setUserNameInput] = useState("");
    const [finalUserName,setFinalUserName] = useState(null);
    useEffect(()=>{ref.current.focus()},[]);
    const handleSubmit = (event) => {
        event.preventDefault();
        setFinalUserName(userNameInput);
    }
    useEffect(()=>{
        logIn(finalUserName);
    },[finalUserName]);
    return (
        <>
            <NavigationBar currentlyActive={"chat"}/>
            <div className="row p-5">
                <div className="col-12 text-center">
                    <form className="row g-3" onSubmit={handleSubmit}>
                        <label className="form-label">Unesi korisnicko ime</label>
                        <input ref={ref} required type="text" className="form-control mb-5" onChange={(e) => {setUserNameInput(e.target.value)}}/>
                        <button type="submit" className="btn btn-primary mb-3">Log in</button>
                    </form>
                </div>
                {finalUserName == null ? true : "Prijavljeni ste kao " + user.username}
            </div>
        </>
    );
}

export default LogInComponent;