import Navbar from "./components/Navbar";
import "./App.css";
import TextForm from "./components/TextForm";
import {useState} from "react";
import Alert from "./components/Alert";
import About from "./components/About";
import React from "react";

import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

function App() {
	const [mode, setMode] = useState("light"); //whether dark mode is enabled or not
	const [alert, setAlert] = useState(null);

	const showAlert = (message, type) => {
		setAlert({
			msg: message,
			type: type,
		});
		setTimeout(() => {
			setAlert(null);
		}, 1500);
	};

	const toggleMode = () => {
		if (mode === "light") {
			setMode("dark");
			document.body.style.backgroundColor = "#0e3154";
			showAlert("Dark mode has been enabled", "success");
			// document.title = "TextUtils - Dark mode";
		} else {
			setMode("light");
			document.body.style.backgroundColor = "white";
			showAlert("Light mode has been enabled", "success");
			// document.title = "TextUtils - Light mode";
		}
	};
	return (
		<>
			<Router>
				<Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
				<Alert alert={alert}/>
				<div className="container my-3">
					<Routes>
						<Route exact path="/about" element={<About mode = {mode}/>}/>
						<Route exact path="/"
									 element={<TextForm showAlert={showAlert} heading="Try TextUtils - Word Counter, Character Counter, Remove Extra Spaces" mode={mode}/>}/>
					</Routes>
				</div>
			</Router>
		</>
	);
}

export default App;
