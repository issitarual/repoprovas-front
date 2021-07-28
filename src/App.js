import { Route, Switch, BrowserRouter } from "react-router-dom";
import GlobalStyles from "./styles/GlobalStyles";

import Home from "./components/Home/Home";
import TestList from "./components/TestList";
import TestTypes from "./components/TestTypes";
import Submit from "./components/Submit";
import Contact from "./components/Contact";
import Header from "./components/communs/Header/Header";

export default function App(){
    return(
        <BrowserRouter>
            <GlobalStyles />
            <Header/>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/:test" exact component={TestTypes} />
                <Route path="/:test/:id" exact component={TestList} />
                <Route path="/submit" exact component={Submit} />
                <Route path="/contact" exact component={Contact} />
            </Switch>
        </BrowserRouter>
    )
}