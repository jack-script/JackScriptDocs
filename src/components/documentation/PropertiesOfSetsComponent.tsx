import React from 'react';
import {Row, Col} from 'reactstrap';

const PropertiesOfSets = () =>{
    return(
        <div>
            {/*Properties of sets Row*/}
            <Row>
                <Col md="12">
                    <h2 className="headerPerSection">Properties of Relations</h2>
                    <p>Relations <b>R</b> are the subset of <b>A&sup2;</b> we can call this relation a subset from <b>A</b> to <b>A</b>  </p>
                    <p>This section describes the functions you can use to test relations on sets.</p>
                </Col>

                <hr></hr>

                <Col md="12">
                    <h4 className="libraryFunctionHeader">isReflexive() function</h4>
                    <p>Takes in 2 parameters: <code>isReflexive(ReflexiveSetOfCoords, SuperSet)</code> where the first param is the a set of Coords and the second is a normal set</p>
                    <p>isReflexive() tests whether or not the set of coordinaes is reflexive against the SuperSet</p>
                    <p>Rules: In order for a set to be reflexive, it needs to be a relation on the product of the SuperSet meaning <b>R</b> &sub; <b>A&sup2;</b>. The function will NOT check the type of any of the sets in params,</p>
                    <p>and as a result, will return a ValueError if ReflexiveSetOfCoords is not a relation of SuperSet. And will return a ValueError if ReflexiveSetOfCoords is not reflexive on SuperSet</p>
                    <pre>
                        <code className="language-python">
                            {`    normalset1 = {2, 3, 4}
    normalset2 = {2, 3, 4}
    normalset3 = {2, 3, 4, 5}
    
    cartesian1 = createCartesian(normalset1, normalset2);
    cartesian2 = createCartesian(normalset1, normalset3);
    
    print(isReflexive(cartesian2, normalset1)); # will return True`}
                        </code>
                    </pre> 
                </Col>
            </Row>{/*End of properties of sets Row*/}

            <hr></hr>

            <Row>
                <Col md="12">
                    <h4 className="libraryFunctionHeader">isIrreflexive() function</h4>
                    <p>Takes in 2 parameters: <code>isReflexive(IR, SuperSet)</code> where the first param is the a set of Coords and the second is a normal set</p>
                    <p>Pretty much almost the reverse of isReflexive(); isIrreflexive() returns true if there are no Coords in <b>IR</b> that are related pairs of SuperSet   </p>
                    <p>E.g  if <code>let A = &#123; 2,3,5 &#125;</code> then <code> R = &#123; (3,2), (2,5), (3,5)&#125; </code> is irreflexive since no member of is related to itself </p>
                    <pre>
                        <code className="language-python">
                            {`  print()`}
                        </code>
                    </pre> 
                </Col>
            </Row>{/*End of properties of sets Row*/}

        </div>
    );
}

export default PropertiesOfSets
