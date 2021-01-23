import React, { useState, useEffect } from 'react';
import "./contents.scss";

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
       
    }, []);

    var styles = {
        borderRadius: '0px',
    }

    return (
        <div>
        <Container>
            <Row>
                <Col md="12">
                    <h2 className="headerPerSection">Getting started</h2>
                    <p>This library was written on python version 3.6 . To ue this library install the <a href="https://docs.python.org/3/">latest stable python version</a></p>
                    <p>This library makes use of python sets from the standard library. Thsi library does not create its own data structure so it is heavily dependent on pythons sets datastructre</p>
                    <p>See <a href="https://docs.python.org/3.8/tutorial/datastructures.html#sets">python sets Documentation</a> </p>    
                </Col>
            </Row>

            <Row>
                <Col md="12">
                    <h2 className="headerPerSection">Installation</h2>
                    <p>Install jackscript using your terminal</p>
                    <pre>
                        <code className="language-python">
                            {`  pip install jackscriptpy`}
                        </code>
                    </pre>    
                </Col>
            </Row>

            <Row>
                <Col>
                    
                </Col>
            </Row>

            {/*Sets documentation row*/}
            <Row>
                <Col md="12" xs="12">
                <h2 className="headerPerSection">Importing the library and using it</h2>
                    
                  <pre  className=" additionalAttributes" style={styles}>
                      <code className="language-python" style={styles}>
                    
                      {`    from jackscriptpy import * # import the entire library
    # or 
    from jackscriptpy import Dom,Range # will import the Dom() and Range() functions`}
                      </code>
                    </pre>
                </Col>

                <Col md="12" xs="12">
                    <h4 className="libraryFunctionHeader">How to create a set:</h4>
                    <p>Sets are created how you would normally create your set in python; as said earlier This library consnist of a set of functions and doesnt make any new data structures. 
                    Therefore all set methods from the python standard library will work like usual</p>
                    <pre  className=" additionalAttributes" style={styles}>
                        <code className="language-python" style={styles}>
                        {`      mySet = set()`}
                      </code>
                    </pre>

                    <hr />
                    <h4 className="libraryFunctionHeader">How to create coordinates:</h4>
                    
                    <p>Coordinates are created lik so:</p>
                    <pre  className=" additionalAttributes" style={styles}>
                        <code className="language-python" style={styles}>
                      {`    mycoordinate = coord(1, 2) # this sets x to 1 and y to 2
                        
    # add a coordinate to a set, using the coordinate created above:
    myset.add(mycoordinate);

    # as expected, the standard library methods will work as usual
    myset.clear()
    print(myset)  # returns set()`}
                      </code>
                    </pre>
                </Col>

                <br />
                
                <hr />
                <Col md="12" xs="12">
                <h4 id="#isSubset()" className="libraryFunctionHeader">isSubset() function</h4>
                <p>isSubset() checks whether a set is a subset of another; returns true if parameter one is the subset of paramter two</p>
                  <pre  className=" additionalAttributes" style={styles}>
                      <code className="language-python" style={styles}>
{`   # declare 2 sets
    set1 = {2, 5, 6}
    set2 = {2, 5, 6, 9} 

    answer = isSubset(set1, set2) # returns True 
    print(answer) # prints True `}
                      </code>
                    </pre>

                    <hr />

                    <h4 className="libraryFunctionHeader">isSuperset() function</h4>
                        <p>simmilary to isSubset() , this function returns true if parameter one is a superset of parameter two</p>
                        
                        <pre  className=" additionalAttributes" style={styles}>
                        <code className="language-python" style={styles}>
                          {`    set1 = {2, 5, 6}
    set2 = {2, 5, 6, 9}
                            
    answer = isSuperset(set2, set1) # returns True 
    print(answer) # prints True`}
                        </code>
                        </pre>

                        <hr></hr>
                        {/*isRelation Section*/}
                        <h4 className="libraryFunctionHeader">isRelation() function</h4>
                        <p></p>
                        
                        <pre  className=" additionalAttributes" style={styles}>
                            <code className="language-python" style={styles}>
                            {`  """ 
		first create a cartesian product from sets:
	 	there are obviously multiple ways of creating cartesianProducts; we'll use more complicated route to demonstrate the use:
	"""
	# Create a couple of normal sets
	normalset1 = {2, 3, 4} # another way would be: normalset1 = Set([2,3,4])
	normalset2 = {2, 3, 4}
	normalset3 = {2, 3}

	cartesian1 = createCartesian(normalset1, normalset2);
    cartesian2 = createCartesian(normalset1, normalset3); 
    
    `}
                            </code>
                        </pre>   

                        <p>as u can see above; we used <code>normalset1</code> and <code>normalset3</code> to create a <code>cartesian2</code></p>
                        <p>so technically, <code>cartesianProduct2</code> should be a relation of <code>cartesian1</code>. We test this theory in the function below, in continuation of the above code.</p>     
                        <pre>
                        <code className="language-python" style={styles}>
                            {`  print(isRelation(cartesian2, cartesian1)); # returns true`}
                            </code>
                        </pre>  
                </Col>
            </Row>{/*End of sets documentation row*/}

            {/*Properties of sets Row*/}
            <Row>
                <Col md="12">
                    <h2 className="headerPerSection">Properties of Relations</h2>
                    <p>Relations <b>R</b> are the subset of <b>A&sup2;</b>; we can call this relation a subset from <b>A</b> to <b>A</b>  </p>
                    <p>This section describes the functions you can use to test relations on sets.</p>
                    <pre>
                        <code className="language-python">
                            {`  print()`}
                        </code>
                    </pre>    
                </Col>
            </Row>{/*End of properties of sets Row*/}


            {/*Conclusion Row*/}
            <Row>
                <Col md="12">
                    <h2 className="headerPerSection">Conclusion</h2>
                    <p>To uninstall jackscriptpy <a href="https://pip.pypa.io/en/stable/reference/pip_uninstall/">read these docs</a> on how to uninstall pip packages</p>
                    <pre>
                        <code className="language-python">
                            {`  pip uninstall jackscriptpy `}
                        </code>
                    </pre>    
                </Col>
            </Row>{/*End of conclusion Row*/}
        </Container> {/*End of main container*/ }
        </div>
    );
  }

export default Contents;