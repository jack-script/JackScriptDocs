import React, { useState, useEffect } from 'react';
// import "../../css/contents.scss";
// import Jackstring from "./jackstring";
import { Collapse, Button, CardBody, Card, Container, Row, Col } from 'reactstrap';

import Prism from 'prismjs';
import "../../css/prism(1).css";
import 'prismjs/components/prism-c';
import 'prismjs/components/prism-cpp';
import 'prismjs/components/prism-python';



const Contents = (props: any) => {
    const code = `var data = 1;`;
    // const html = Prism.highlight(code, Prism.languages.javascript, 'javascript');

    useEffect(()=>{
        Prism.highlightAll();
         Prism.plugins.NormalizeWhitespace.setDefaults({
            'remove-trailing': true,
            'remove-indent': true,
            'left-trim': true,
            'right-trim': true,
        });
    }, []);

    var styles = {
        padding: '0px'
    }

    console.log(Prism);

   

    return (
        <div>
        <Container>
            <Row>
                <Col md="12">
                    <h3>Installation</h3>
                    <p>Install jackscript using your terminal</p>
                    <pre>
                        <code className="language-python">
                            {`
                                pip install jackscriptpy
                            `}
                        </code>
                    </pre>    
                </Col>
            </Row>

            <Row>
                <Col>
                    
                </Col>
            </Row>


            <Row>
                <Col md="8" xs="12">
                    <p></p>

                  <pre  className=" additionalAttributes" style={styles}>
                      <code className="language-python" style={styles}>
                      {`
                        set1 = {2, 5, 6}
                        set2 = {2, 5, 6, 9}

                        answer = isSuperset(set2, set1) # returns True 
                        print(answer) # prints True
                      `}
                      </code>
                    </pre>
                </Col>
            </Row>
        </Container>

        <style>
            {`

            `}
        </style>

        </div>

    );
  }

export default Contents;