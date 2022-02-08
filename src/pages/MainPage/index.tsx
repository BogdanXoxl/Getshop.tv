import React, {FC, useEffect} from 'react';
import {Container, Title, Wrapper} from "./MainPage.styles";
import {Button} from "../../index.styles";

interface Props{
    play: () => void;
    pause: () => void;
}

const MainPage:FC<Props> = ({play, pause}) => {

    useEffect(() => {
        play();
    }, [play]);

    return (
        <Container>
            <Wrapper>
                <Title>ИСПОЛНИТЕ МЕЧТУ ВАШЕГО МАЛЫША! <br/> ПОДАРИТЕ ЕМУ СОБАКУ!</Title>
                <img src="assets/QR.png" alt="qr" width={126}/>
                <p>Сканируйте QR-код или нажмите ОК</p>
                <Button to="/form" active color={"blue"} onClick={pause}>OK</Button>
            </Wrapper>
        </Container>
    );
};

export default MainPage;
