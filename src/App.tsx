import React, {FC, useRef} from 'react';
import { Routes, Route } from 'react-router-dom';

import MainPage from "./pages/MainPage";
import Layout from "./components/Layout";
import FinalPage from "./pages/FinalPage";

import {GlobalStyles, Container, Content, BackgroundVideo} from "./index.styles";
import FormPage from "./pages/FormPage";



const App:FC = () => {
    const vidRef = useRef<HTMLVideoElement>(null);

    const stop = () => vidRef.current?.pause();
    const play = () => vidRef.current?.play();

    return (
        <>
            <Container>
                <Content>
                    <Routes>
                        <Route index element={<MainPage/>}/>
                        <Route element={<Layout/>}>
                            <Route path="/form" element={<FormPage play={play} pause={stop}/>}/>
                            <Route path="/final" element={<FinalPage/>}/>
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
