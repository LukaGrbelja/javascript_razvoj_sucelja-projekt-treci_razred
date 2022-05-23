import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Movies from "./Components/Movies";
import Movie from "./Components/Movie";
import News from "./Components/News";
import Article from "./Components/Article";
import CommunityChat from "./Components/CommunityChat";
import MoviesContextProvider from "./Context/MoviesContext";
import NewsContextProvider from "./Context/NewsContext";
import ChatContextProvider from "./Context/ChatContext";

function App() {
	return (
		<div className="container-fluid">
			<ChatContextProvider>
			<NewsContextProvider>
			<MoviesContextProvider>
				<Router>
					<Routes>
						<Route path="/" element={<Movies/>}/>
						<Route path="/novosti" element={<News/>}/>
						<Route path="/razgovor" element={<CommunityChat/>}/>
						<Route path="/film/:moviekey" element={<Movie/>}/>
						<Route path="/novosti/:articlekey" element={<Article/>}/>
					</Routes>
				</Router>
			</MoviesContextProvider>
			</NewsContextProvider>
			</ChatContextProvider>
		</div>
	);
}

export default App;
