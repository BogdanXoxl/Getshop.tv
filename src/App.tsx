import React, {FC, useRef} from 'react';
import { Routes, Route } from 'react-router-dom';

import {GlobalStyles, Container, Content, BackgroundVideo} from "./index.styles";
import MainPage from "./pages/MainPage";
import Layout from "./components/Layout";

const App:FC = () => {
    const vidRef = useRef<HTMLVideoElement>(null);

    const stop = () => vidRef.current?.pause();
    const play = () => vidRef.current?.play();

    return (
        <>
            <Container>
                <Content>
                    <Routes>
                        <Route index element={<MainPage play={play} pause={stop}/>}/>
                        <Route element={<Layout/>}>
                            <Route path="/form"/>
                            <Route path="/final"/>
                        </Route>
                    </Routes>
                </Content>
                <BackgroundVideo ref={vidRef} autoPlay muted loop preload="auto">
                    <source src="assets/background.mp4" type="video/mp4"/>
                </BackgroundVideo>
            </Container>
            <GlobalStyles/>
        </>
    );
};

export default App;
