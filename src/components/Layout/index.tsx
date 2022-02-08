import React from 'react';
import { Outlet } from 'react-router-dom';
import {Container, InfoContainer, QRContainer, Wrapper} from "./Layout.styles";
import {Button} from "../../index.styles";

const Layout = () => {
    return (
        <Container>
            <Wrapper>
                <Outlet />
            </Wrapper>
            <InfoContainer>
                <Button to={'/'} pd={{x: 1, y: .5}} color={"black"}>X</Button>
                <QRContainer>
                    <p>
                        Сканируйте QR-код ДЛЯ ПОЛУЧЕНИЯ ДОПОЛНИТЕЛЬНОЙ ИНФОРМАЦИИ
                    </p>
                    <img src="/assets/QR.png" alt=""/>
                </QRContainer>
            </InfoContainer>
        </Container>
    );
};

export default Layout;
