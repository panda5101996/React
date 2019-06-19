import React, { Component } from 'react';
import {Route} from "react-router";
import Home from "./page/home";
import Category from "./page/category";
import CategoryBiemHoa from "./page/category-biem-hoa";
import CategoryVideo from "./page/category-video";
import Detail from "./page/detail";
import DetailVideo from "./page/detail-video";
import Profile from "./page/profile";
import User from "./page/user";

class Content extends Component {
    render() {
        return (
            <div>
                <Route exact path="/" component={Home}/>
                <Route path="/tin-tuc" component={Category}/>
                <Route path="/biem-hoa" component={CategoryBiemHoa}/>
                <Route path="/video" component={CategoryVideo}/>
                <Route path="/ttc/tin-tuc/:slug/:date/:tslug/:id.html" component={Detail}/>
                <Route path="/ttc/video/:date/:tslug/:id.html" component={DetailVideo}/>
                <Route path="/nhan-vat/:author/:id.html" component={Profile}/>
                <Route path="/user.html" component={User}/>
            </div>
        );
    }
}

export default Content