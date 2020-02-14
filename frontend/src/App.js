import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {
	const [text, setText] = useState("");
	const [count, setCount] = useState(-1); // -1 = loading

	const fetchTextCount = async () => {
		setCount(-1);
		const result = await axios.get(`/word_count?text=${text}`);
		setCount(result.data.count);
	};

	useEffect(() => {
		fetchTextCount();
	}, [text]);

	return (
		<div>
			123
			<input value={text} onChange={e => setText(e.target.value)} />
			<h3>{count == -1 ? "Loading..." : "Count: " + count}</h3>
		</div>
	);
}

export default App;
