import React from "react";
import { useState } from "react";
import ReactDOM from "react-dom/client";

function FileUpload() {
	const [file, setFile] = useState();

	function handleFile(event) {
		setFile(event.target.files[0]);
		// console.log(event.target.files[0]);
	}

	function handleSubmit() {
		const formData = new FormData();
		formData.append("file", file);
	}

	return (
		<div>
			<h3>Upload audio file</h3>
			<form onSubmit={handleSubmit}>
				<input
					type='file'
					name='file'
					id='inputAudioId'
					onChange={handleFile}
					accept='mediaFormats/*'
				/>
				<button id='uploadButtonId'>Upload</button>
			</form>
		</div>
	);
}
export default FileUpload;
