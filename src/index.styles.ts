import styled, {createGlobalStyle} from "styled-components";
import {Link} from "react-router-dom";

export const GlobalStyles = createGlobalStyle`
  
  :root{
    --blue: #86D3F4;
    --black: #000000;
    --white: #fff;
  }
  
  
  /* Указываем box sizing */
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
    font-style: normal;
    font-weight: 500;
  }

  /* Убираем внутренние отступы */
  ul[class],
  ol[class] {
    padding: 0;
  }

  /* Убираем внешние отступы */
  body,
  h1,
  h2,
  h3,
  h4,
  p,
  ul[class],
  ol[class],
  li,
  figure,
  figcaption,
  blockquote,
  dl,
  dd {
    margin: 0;
  }

  /* Выставляем основные настройки по-умолчанию для body */
  body {
    min-height: 100vh;
    scroll-behavior: smooth;
    text-rendering: optimizeSpeed;
    line-height: 1.5;

    background-attachment: fixed;
    background-size: cover;
  }

  /* Удаляем стандартную стилизацию для всех ul и il, у которых есть атрибут class*/
  ul[class],
  ol[class] {
    list-style: none;
  }

  /* Элементы a, у которых нет класса, сбрасываем до дефолтных стилей */
  a:not([class]) {
    text-decoration-skip-ink: auto;
    text-decoration: none;
  }

  /* Упрощаем работу с изображениями */
  img {
    max-width: 100%;
    display: block;
  }

  /* Указываем понятную периодичность в потоке данных у article*/
  article > * + * {
    margin-top: 1em;
  }

  /* Наследуем шрифты для инпутов и кнопок */
  input,
  button,
  textarea,
  select {
    font: inherit;
  }
`;

export const Container = styled.div`
  position: relative;
  min-height: 100vh;
`;

export const Content = styled.div`
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: row;
`;

export const BackgroundVideo = styled.video`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

interface ButtonProps{
    active?: boolean;
    color?: "blue" | "black" | "white";
    opacity?: number;
    pd?: {
        x: number;
        y: number;
    };
}

export const Button = styled(Link)<ButtonProps>`
  opacity: ${({opacity}) => opacity || 1};
  padding: ${({pd}) => pd? `${pd.y}rem ${pd.x}rem` :"1rem 3rem"};
  color: ${({color}) => 
          color? `var(--${color})`: `var(--white)`};
  background: ${({active}) => 
          active? `var(--black)`: `var(--white)`};
  border: 2px solid var(--black);
  text-decoration: none;
  
  &:active{
    color: var(--white);
    background: var(--black);
  }
`;
