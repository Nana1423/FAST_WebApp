import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Login from "./pages/Login";

function App() {
    return (
        <Routes>
			<Route path="/" element={<Header />} />
			<Route path="/Login" element={<Login />} />
		</Routes>
    )
}

export default App
