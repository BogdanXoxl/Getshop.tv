import React from 'react';
import { Outlet } from 'react-router-dom';
import {Container} from "./Layout.styles";

const Layout = () => {
    return (
        <Container>
            <Outlet />
        </Container>
    );
};

export default Layout;
