import "./App.css";
import ParsedText from "./ParsedText";
import FileUpload from "./FileUpload";

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
