import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Movies from "./Components/Movies";
import Movie from "./Components/Movie";
import News from "./Components/News";
import Article from "./Components/Article";
import LogInComponent from "./Components/LogInComponent";
import CommunityChat from "./Components/CommunityChat";
import MoviesContextProvider from "./Context/MoviesContext";
import NewsContextProvider from "./Context/NewsContext";
import ChatContextProvider from "./Context/ChatContext";
import LogInContextProvider from "./Context/LogInContext";

function App() {
	return (
		<div className="container-fluid">
			<LogInContextProvider>
			<ChatContextProvider>
			<NewsContextProvider>
			<MoviesContextProvider>
				<Router>
					<Routes>
						<Route path="/" element={<Movies/>}/>
						<Route path="/novosti" element={<News/>}/>
						<Route path="/razgovor" element={<CommunityChat/>}/>
						<Route path="/prijava" element={<LogInComponent/>}/>
						<Route path="/film/:moviekey" element={<Movie/>}/>
						<Route path="/novosti/:articlekey" element={<Article/>}/>
					</Routes>
				</Router>
			</MoviesContextProvider>
			</NewsContextProvider>
			</ChatContextProvider>
			</LogInContextProvider>
		</div>
	);
}

export default App;
