import React, { useState, useEffect } from 'react';
// import "../../css/contents.scss";
// import Jackstring from "./jackstring";
import { Collapse, Button, CardBody, Card, Container, Row, Col } from 'reactstrap';

import Prism from 'prismjs';
import "../../css/prism.css";
import 'prismjs/components/prism-c';
import 'prismjs/components/prism-cpp';



const Contents = (props: any) => {
    const code = `var data = 1;`;
    // const html = Prism.highlight(code, Prism.languages.javascript, 'javascript');

    useEffect(()=>{
        Prism.highlightAll();
    }, []);


    return (
        <div>
        <Container>
            <Row>
                <Col md="10" xs="12">
                  <pre className="line-numbers">
                      <code className="language-cpp">
                      {`
                        
                          #include <iostream>
                          #include <string>;

                          class Myclass{
                              Myclass(std::string data, int sum){
                                  this.data = data;
                                  this.sum = sum;
                              }
                          }

                        int main(){
                            return 0;
                        }
                      `}
                      </code>
                    </pre>
                </Col>
            </Row>
        </Container>

        <pre className="line-numbers">
                      <code className="language-cpp">
                      {`
                        
                          #include <iostream>
                          #include <string>;

                          class Myclass{
                              Myclass(std::string data, int sum){
                                  this.data = data;
                                  this.sum = sum;
                              }
                          }

                        int main(){
                            return 0;
                        }
                      `}
                      </code>
                    </pre>

        </div>

    );
  }

export default Contents;