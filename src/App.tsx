import { Route, Routes } from "react-router-dom";
import Game3D from "./components/game/Game3D";
import HomePage from "./HomePage";

function App() {
	return (
		<Routes>
			<Route path='/' element={<HomePage/>}></Route>
			<Route path='/game' element={<Game3D/>}></Route>
		</Routes>
	);
}

export default App;
