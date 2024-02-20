import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
    return (
        <Routes>
			<Route path="/" element={<Header />} />
			<Route path="/admin" element={<Footer />} />
		</Routes>
    )
}

export default App
