import React, { Component } from 'react';
import {HeaderContainer} from './Header.style';

class Header extends Component {
    render() {
        return (
            
                <HeaderContainer>
                    <h1 style={{margin:0,paddingTop:30}}>NEWS NATION</h1>
                </HeaderContainer>
            
        );
    }
}

export default Header;