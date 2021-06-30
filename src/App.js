import { useState } from "react";
import "./App.css";
//Compenents
import ImgLink from "./components/ImgLink";
import Links from "./components/Links";
function App() {
	const [linksArray, setLinksArray] = useState([]);
	const [LinkInput, setLinkInput] = useState("");
	return (
		<div className="App">
			<ImgLink
				linksArray={linksArray}
				LinkInput={LinkInput}
				setLinkInput={setLinkInput}
				setLinksArray={setLinksArray}
			/>
			<Links linksArray={linksArray} setLinksArray={setLinksArray} />
		</div>
	);
}

export default App;
