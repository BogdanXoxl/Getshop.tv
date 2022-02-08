import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  
  width: 100vw;
  height: 100vh;

  opacity: 0;
  animation: ani 10s forwards;
  @keyframes ani {
      0% {opacity: 0;}
      50% {opacity: 0;}
      100% {opacity: 1;}
  }
  
`;

export const Wrapper = styled.div`
  width: 250px;
  background-color: var(--blue);
  padding: 20px 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  
  p{
    width: 130px;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 16px;
    text-align: center;
  }
`;

export const Title = styled.h2`
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  display: flex;
  align-items: center;
  text-align: center;
  text-transform: uppercase;
`;