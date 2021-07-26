import React from "react";
import Router from "./Router";
import GlobalStyles from "./GlobalStyles";
import Footer from "./Footer";

function App() {
    return (
        <div className="App">
            <GlobalStyles />
            <Router />
            <Footer />
        </div>
    );
}

export default App;
