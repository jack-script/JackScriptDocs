import type { NextPage } from "next";
import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
	Card,
	CardBody,
	CardTitle,
	CardSubtitle,
	CardText,
	Button,
	Container,
	Row,
	Col,
} from "reactstrap";
import Header from "./components/Header";
import Footer from "./components/Footer";
import axios from "axios";

const Home: NextPage = () => {
	const [repos, setRepos] = useState();
	const [loading, setLoading] = useState(false);
	const [stuff, setStuff] = useState([1,2,3]);

	useEffect(async () => {
		setLoading(true);
		const res = await axios.get(
			`https://api.github.com/orgs/jack-script/repos`
		).then(function(res: any){
			setLoading(false);
			console.log(res.data);
			setRepos(res.data);
		}).catch(function (error: any) {
		    console.log(error);
		})

	});

	return (
		<div>
			<Header></Header>
			<Container>
				<Row>
					<Col>
					 {
			        	loading? (stuff.map(s => (
			        		
				        		<div key={s} class="card" aria-hidden="true">
								  <img src="..." class="card-img-top" alt=""/>
								  <div class="card-body">
								    <h5 class="card-title placeholder-glow">
								      <span class="placeholder col-6"></span>
								    </h5>
								    <p class="card-text placeholder-glow">
								      <span class="placeholder col-7"></span>
								      <span class="placeholder col-4"></span>
								      <span class="placeholder col-4"></span>
								      <span class="placeholder col-6"></span>
								      <span class="placeholder col-8"></span>
								    </p>
								    <a href="#" tabindex="-1" class="btn btn-primary disabled placeholder col-6"></a>
								  </div>
								</div>
							
			        		))
			        		
			        	):
			        	(<div></div>)
			        }

					{
						repos!= undefined ? repos.map( repo=> (
							<Card key ={repo.name}>
								<CardBody>
									<CardTitle tag="h5">Card title</CardTitle>
									<CardSubtitle
										className="mb-2 text-muted"
										tag="h6"
									>
										Card subtitle
									</CardSubtitle>
									<CardText>
										Some quick example text to build on the card
										title and make up the bulk of the card's
										content.
									</CardText>
									<Button>click</Button>
								</CardBody>
							</Card>

							)

						):(<div>It appear the projects are no longer available</div>)
					}
						

					</Col>
					
				</Row>
			</Container>
		</div>
	);
};

export default Home;
