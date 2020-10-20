import React, { useState } from 'react';
import "../../css/contents.scss";
import Jackstring from "./jackstring";
import { Collapse, Button, CardBody, Card, Container, Row, Col } from 'reactstrap';


const Contents = (props: any) => {
    const [collapse, setCollapse] = useState(false);
    const [status, setStatus] = useState('Closed');
    const onEntering = () => setStatus('Opening...');
    const onEntered = () => setStatus('Opened');
    const onExiting = () => setStatus('Closing...');
    const onExited = () => setStatus('Closed');
    const toggle = () => setCollapse(!collapse);
  
    return (
        <Container>
            <Row>
                <Col md="2" xs="12">
                    <Button id="toggleShowButton" color={status=="Closed" ? "danger" : "primary"} onClick={toggle} style={{ marginBottom: '1rem' }}>JackScript String</Button>
                </Col>

                <Col md="10" xs="12">
                    <h5>JackScript-String</h5>
                    <Collapse
                    isOpen={collapse}
                    onEntering={onEntering}
                    onEntered={onEntered}
                    onExiting={onExiting}
                    onExited={onExited}
                    >
                    <Card>
                        <CardBody>
                        Anim pariatur cliche reprehenderit,
                        enim eiusmod high life accusamus terry richardson ad squid. Nihil
                        anim keffiyeh helvetica, craft beer labore wes anderson cred
                        nesciunt sapiente ea proident.
                        </CardBody>

                        <CardBody>
                           <Jackstring></Jackstring>
                        
                        </CardBody>
                    </Card>
                    </Collapse>
                </Col>
            </Row>
        </Container>

    );
  }

export default Contents;