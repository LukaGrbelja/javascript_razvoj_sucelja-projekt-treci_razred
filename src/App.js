import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Movies from "./Components/Movies";
import Movie from "./Components/Movie";
import News from "./Components/News";
import Article from "./Components/Article";
import MoviesContextProvider from "./Context/MoviesContext";
import NewsContextProvider from "./Context/NewsContext";

function App() {
	return (
		<div className="container-fluid">
			<NewsContextProvider>
			<MoviesContextProvider>
				<Router>
					<Routes>
						<Route path="/" element={<Movies/>}/>
						<Route path="/novosti" element={<News/>}/>
						<Route path="/film/:moviekey" element={<Movie/>}/>
						<Route path="/novosti/:articlekey" element={<Article/>}/>
					</Routes>
				</Router>
			</MoviesContextProvider>
			</NewsContextProvider>
		</div>
	);
}

export default App;
