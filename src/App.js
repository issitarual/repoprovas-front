import { Route, Switch, BrowserRouter } from "react-router-dom";
import GlobalStyles from "./styles/GlobalStyles";

import Home from "./components/Home/Home";
import TestList from "./components/TestList";
import TestTypes from "./components/TestTypes";

export default function App(){
    return(
        <BrowserRouter>
            <GlobalStyles />
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/:test" exact component={TestTypes} />
                <Route path="/:test/:id" exact component={TestList} />
            </Switch>
        </BrowserRouter>
    )
}