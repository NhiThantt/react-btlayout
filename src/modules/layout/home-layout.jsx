import React, { Component } from 'react'
import Header from './header'
import Body from './body'
import Footer from './footer'
export default class HomeLayout extends Component {
    render() {
        return (
            <div>
                <Header />
                <Body />
                <Footer />
            </div>
        )
    }
}
