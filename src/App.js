import { Route, Switch, BrowserRouter } from "react-router-dom";
import GlobalStyles from "./styles/GlobalStyles";

import Home from "./components/Home/Home";
import TestList from "./components/TestList";
import TestTypes from "./components/TestTypes";
import Submit from "./components/Submit/Submit";
import Contact from "./components/Contact/Contact";
import Header from "./components/communs/Header/Header";
import Footer from "./components/communs/Footer/Footer";

export default function App(){
    return(
        <BrowserRouter>
            <GlobalStyles />
            <Header/>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/test/:type" exact component={TestTypes} />
                <Route path="/test/:type/:id" exact component={TestList} />
                <Route path="/submit" exact component={Submit} />
                <Route path="/contact" exact component={Contact} />
            </Switch>
            <Footer/>
        </BrowserRouter>
    )
}