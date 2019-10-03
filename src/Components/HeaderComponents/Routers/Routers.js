import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';

import Home from "../../PageComponents/Home";
import Contact from '../../PageComponents/Contact';
import Header from "../HeaderComponent";
import Footer from "../../FooterComponents/FooterComponent";
import NotFoundPage from '../../ErrorComponents/NotFoundPage';
import Helper from '../../HelperComponents/Helper';

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route path='/' component={Home} exact={true} />
                <Route path='/help' component={Helper} />
                 <Route path='/contact' component={Contact} />
                <Route component={NotFoundPage} />
            </Switch>
            <Footer/>
        </div>
    </BrowserRouter>
);

export default AppRouter;