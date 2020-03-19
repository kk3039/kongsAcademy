import React from 'react';
import Header from './components/header';
import Footer from './components/footer';
import Routing from './components/routing.tsx';

function App() {
    return (
        <div className="App">
            <Header />
            <Routing />
            <Footer />
        </div>
    );
}

export default App;
