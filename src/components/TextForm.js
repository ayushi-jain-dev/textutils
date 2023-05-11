import React, {useState} from "react";

export default function TextForm(props) {
	const [text, setText] = useState("");
	const [emails, setEmails] = useState([]);
	const handleUpClick = () => {

		let newText = text.toUpperCase();
		setText(newText);
		props.showAlert("Converted to Uppercase", "success");
	};
	const handleLoClick = () => {
		let newText = text.toLowerCase();

		setText(newText);
		props.showAlert("Converted to Lowercase", "success");
	};
	const handleClearText = () => {
		let newText = "";
		setText(newText);
		props.showAlert("Cleared Text", "success");
		setEmails([]);
	};

	const handleOnChange = (event) => {

		setText(event.target.value);
	};
	const validateEmail = (email) => {
		const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		return pattern.test(email);
	};
	const handleFetchEmail = () => {
		let wordsArray = text.split(/[,;:\s\-_\n]+/);
		const _emails = [];
		wordsArray.forEach((word) => {
			const isEmail = validateEmail(word);
			if (isEmail) {
				_emails.push(word);
			} // code to be executed for each element
		});
		console.log({_emails});
		setEmails(_emails);
		props.showAlert("Emails Fetched", "success");
	};
	const handleCopy = () => {
		let text = document.getElementById("myBox");
		text.select();
		navigator.clipboard.writeText(text.value);
		document.getSelection().removeAllRanges();
		props.showAlert("Copied to clipboard", "success");
	};

	const handleExtraSpaces = () => {
		let newText = text.split(/[ ]+/);
		setText(newText.join(" "));
		props.showAlert("Extra spaces removed", "success");
	};

	return (
		<>
			<div
				className="container"
				style={{color: props.mode === "dark" ? "white" : "#042743"}}
			>
				<h1 className= 'mb-4' style={{color: props.mode === "dark" ? "whitesmoke" : "#042743"}}>
					{props.heading}
				</h1>
				<div className="mb-3">
          <textarea
						className="form-control"
						value={text}
						onChange={handleOnChange}
						style={{
							backgroundColor: props.mode === "dark" ? "rgb(143 177 184)" : "white",
							color: props.mode === "dark" ? "white" : "#215b67",
							borderColor: 'black',
						}}
						id="myBox"
						rows="10"
					></textarea>
				</div>
				<button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>
					Convert to Uppercase
				</button>
				<button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>
					Convert to Lowercase
				</button>
				<button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleFetchEmail}>
					Fetch Email
				</button>
				<button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleClearText}>
					Clear Text
				</button>
				<button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCopy}>
					Copy Text
				</button>
				<button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>
					Remove Extra Spaces
				</button>
			</div>
			<div
				className="container my-2"
				style={{color: props.mode === "dark" ? "white" : "#042743"}}
			>
				<h2>Your text summary</h2>
				<p>
					{text.split(/\s+/).filter((element)=>{return element.length !== 0}).length} words, {text.length} characters
				</p>
				<p>{0.008 * text.split(" ").filter((element)=>{return element.length !== 0}).length} Minutes read</p>
				<h2>Preview</h2>
				<p>
					{text.length > 0
						? text
						: "Nothing to preview!"}
				</p>
				<h3>{text.length > 0 && "Number of Emails: " + emails.length}</h3>
				{emails.map((email) => (
					<p>{email}</p>
				))}
			</div>
		</>
	);
}
