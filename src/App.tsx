import React from 'react';
import './css/app.scss';
import Header from './components/header';
import Footer from './components/footer';
import Contents from './components/documentation/contents';

function App() {
  return (
    <div className="App">
        <Header></Header>
        <Contents></Contents>
        <Footer></Footer>
    </div>
  );
}

export default App;