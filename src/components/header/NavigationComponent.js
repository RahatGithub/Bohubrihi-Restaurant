import React from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';

const NavigationComponent = () => {
    return (
        <Navbar color="dark" dark>
            <NavbarBrand href="/">B-Restaurant</NavbarBrand>
        </Navbar>
    )
}

export default NavigationComponent;