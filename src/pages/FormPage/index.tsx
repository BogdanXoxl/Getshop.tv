import React, {FC, useEffect} from 'react';
import {Agreement, Container, Display, NumPad, Title} from "./FormPage.styles";
import {Button} from "../../index.styles";

interface Props{
    play:  () => void;
    pause: () => void;
}

const FormPage:FC<Props> = ({play, pause}) => {
    useEffect(() => {
        pause();
        return play;
    }, [play, pause]);
    return (
        <Container>
            <Title>Введите ваш номер мобильного телефона</Title>
            <Display>
                <h2>+7(_ _ _)___-__-__</h2>
                <p>и с Вами свяжется наш менеждер для дальнейшей консультации</p>
            </Display>
            <NumPad>

            </NumPad>
            <Agreement>
                <input type="checkbox"/>
                <span className="checkmark"></span>
                <p>Согласие на обработку персональных данных</p>
            </Agreement>
            <Button to='/final' color={"black"}>Подтвердить номер</Button>

        </Container>
    );
};

export default FormPage;