import React, {FC} from 'react';
import { Routes, Route } from 'react-router-dom';

import {GlobalStyles, Container, Content, BackgroundVideo} from "./index.styles";
import MainPage from "./pages/MainPage";
import Layout from "./components/Layout";

const App:FC = () => {
    return (
        <>
            <Container>
                <Content>
                    <Routes>
                        <Route index element={<MainPage/>}/>
                        <Route element={<Layout/>}>
                            <Route path="/form"/>
                            <Route path="/final"/>
                        </Route>
                    </Routes>
                </Content>
                <BackgroundVideo autoPlay muted loop preload="auto">
                    <source src="background.mp4" type="video/mp4"/>
                </BackgroundVideo>
            </Container>
            <GlobalStyles/>
        </>
    );
};

export default App;
