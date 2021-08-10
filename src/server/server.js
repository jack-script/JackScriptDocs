import express from "express";
import fs from 'fs'
import path from 'path'
import React from 'react'
import ReactDOMServer from 'react-dom/server'

import App from "../src/App";

const PORT = 5000;
const app = express();

app.use('^$', (req, res, next)=>{
	fs.readfile(path.resolve("./build/index.html"), "utf-8", (err, data)=>{
		if(err){
			console.log(err);
			return res.status(500).send("Some server error occured");
		}else{
			return res.send(
				data.replace(
					'<div id ="root"></div>',
					`<div id ="root">${ReactDOMServer.renderToString(<App/>)}</div>`
				)
			)	
		}
		
	})
});

app.use(express.static(path.resolve(__dirname, '..', 'build')))

app.listen(PORT, ()=>{
	console.log(`listening on port ${PORT}`);
})