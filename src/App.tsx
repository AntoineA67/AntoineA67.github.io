import { Route, Routes } from "react-router-dom";
import { Game } from "./Game";
import HomePage from "./HomePage";


function App() {
	return (
		<Routes>
			<Route path='/' element={<HomePage/>}></Route>
			<Route path='/game' element={<Game/>}></Route>
		</Routes>
	);
}

export default App;
