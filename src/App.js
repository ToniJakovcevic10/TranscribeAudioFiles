import "./App.css";
import ParsedText from "./ParsedText";

function App() {
	return (
		<div className='App'>
			<header className='App-header'>
				<button className='uploadAudioButton'>Upload Audio</button>
				<ParsedText />
			</header>
		</div>
	);
}

export default App;
