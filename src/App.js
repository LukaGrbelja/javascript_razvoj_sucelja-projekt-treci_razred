import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Movies from "./Components/Movies";
import Movie from "./Components/Movie";
import MoviesContextProvider from "./Context/MoviesContext";

function App() {
	return (
		<div className="container-fluid">
			<MoviesContextProvider>
				<Router>
					<Routes>
						<Route path="/" element={<Movies/>}/>
						<Route path="/film/:moviekey" element={<Movie/>}/>
					</Routes>
				</Router>
			</MoviesContextProvider>
		</div>
	);
}

export default App;
