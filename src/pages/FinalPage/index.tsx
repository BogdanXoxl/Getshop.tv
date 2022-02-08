import React, {FC} from 'react';
import {Container, Description, Title} from './FinalPage.styles';

interface Props{
    play: () => void;
}

const FinalPage:FC<Props> = ({play}) => {
    play();
    return (
        <Container>
            <Title>ЗАЯВКА ПРИНЯТА</Title>
            <Description>
                Держите телефон под рукой. <br/>
                Скоро с Вами свяжется наш менеджер.
            </Description>
        </Container>
    );
};

export default FinalPage;