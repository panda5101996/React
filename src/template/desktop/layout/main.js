import React, { Component } from 'react';
import Header from './header';
import Footer from './footer';
import Content from './content';
class main extends Component {
    render() {
        return (
            <div>
                <Header />
                <Content />
                <Footer />
            </div>
        );
    }
}

export default main;