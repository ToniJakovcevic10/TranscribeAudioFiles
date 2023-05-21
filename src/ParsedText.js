import React from "react";
import ReactDOM from "react-dom/client";

function ParsedText() {
	return (
		<div>
			<h3>This is parsed text:</h3>
			{/* <textarea className='parsedTextTextArea' rows={5} cols={40}>
				...
			</textarea> */}
			<p className='parsedTextParagraph'>here will parsed text be...</p>
		</div>
	);
}
export default ParsedText;
