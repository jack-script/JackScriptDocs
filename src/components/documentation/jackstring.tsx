import React, { useEffect, useState } from 'react';
import marked from "marked";

const JackString = (props: any) => {
    const [state, setState] = useState("");

    useEffect(()=>{
        const readmePath = require("./Readme.md");
      
        fetch(readmePath)
          .then(response => {
            return response.text()
          })
          .then(text => {
            setState(marked(text))
          })
    }, []);
  
    return (
        
        <div>
            <section>
                <article dangerouslySetInnerHTML={{__html: state}}></article>
                </section>
        </div>
    );
  }

export default JackString;

