import React, { Component} from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default class BasePageComponent extends Component  { 
    constructor(props){
        super(props)
        this.state = {
        }
    }
    async componentDidMount () {}
   
    render(Page){
        return (
            <>
            <Header />
            {Page}
            <Footer />
            </>
        )
    }
}