import type { NextPage } from "next";
import "bootstrap/dist/css/bootstrap.min.css";
import {Container, Row, Col} from 'reactstrap';
import Header from "./components/Header"
import Footer from "./components/Footer"

const Home: NextPage = () => {
  return (
    <div>
    <Header></Header>
    <Container>
     hellow home page
    </Container>
    </div>
  );
};

export default Home;
