import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const Wrapper = styled.div`
  width: 380px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: var(--blue);
`;

export const InfoContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
  padding: 1rem;

  @media screen and (max-width: 620px){
    display: none;
  }
`;

export const QRContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
  
  p{
    width: 194px;
    color: var(--white);
   
    font-size: 1rem;
    font-weight: 500;
    line-height: 1.2rem;
    text-align: right;
    
    text-transform: uppercase;
  }
  
  img{
    width: 110px;
  }
  
`;

