import type { NextPage } from "next";
import { useEffect } from "react";
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
	useEffect(async () => {
		const res = await axios.get(
			`https://api.github.com/orgs/jack-script/repos`
		);
		console.log(res.data);
	});

	return (
		<div>
			<Header></Header>
			<Container>
				<Row>
        <Col>
					<Card>
						<CardBody>
							<CardTitle tag="h5">Card title</CardTitle>
							<CardSubtitle className="mb-2 text-muted" tag="h6">
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


          </Col>

          <Col>
          <Card>
            <CardBody>
              <CardTitle tag="h5">Card title</CardTitle>
              <CardSubtitle className="mb-2 text-muted" tag="h6">
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

          
          </Col>

          <Col>
          <Card>
            <CardBody>
              <CardTitle tag="h5">Card title</CardTitle>
              <CardSubtitle className="mb-2 text-muted" tag="h6">
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

          
          </Col>
				</Row>
			</Container>
		</div>
	);
};

export default Home;
