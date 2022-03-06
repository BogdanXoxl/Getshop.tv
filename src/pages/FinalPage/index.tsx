import React, {FC} from 'react';
import {Container, Description, Title} from './FinalPage.styles';


const FinalPage:FC = () => {
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