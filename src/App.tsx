import React from 'react';
import './css/app.scss';
import Header from './components/header';
import Footer from './components/footer';
import Contents from './components/documentation/contents';
import Prism from 'prismjs';

function App() {
	// The code snippet you want to highlight, as a string
	const code = `var data = 1;`;

	// Returns a highlighted HTML string
	const html = Prism.highlight(code, Prism.languages.javascript, 'javascript');
	
	return (
		<div className="App">
			<Header></Header>
			<Contents></Contents>
			<Footer></Footer>
		</div>
	);
}

export default App;