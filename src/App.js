import React from "react";
import { BrowserRouter as Router, Route} from "react-router-dom";
import Header from "./components/Header";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
  function App() {

    return (
        <Router basename={`${process.env.PUBLIC_URL}/`}>

            <Header />
            <Route exact path="/" component={About} />
            <Route exact path="/about" component={About} />
            <Route exact path="/portfolio" component={Portfolio} />
            <Route exact path="/contact" component={Contact} />
            <Footer />
        </Router>
    )
  }

  export default App;
