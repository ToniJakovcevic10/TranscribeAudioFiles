import "./App.css";
import ParsedText from "./components/ParsedText";
import FileUpload from "./components/FileUpload";

function App() {
	return (
		<div className='App'>
			<header className='App-header'>
				<FileUpload />
				<ParsedText />
			</header>
		</div>
	);
}

export default App;
