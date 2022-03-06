import styled from "styled-components";

export const Container = styled.div`
  width: 284px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const Title = styled.h1`
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 400;
  line-height: 30px;
  text-align: center;
`;

export const Display = styled.div`
  
  h2{
    font-size: 32px;
    font-style: normal;
    font-weight: 700;
    line-height: 38px;
    text-align: left;
  }
  
  p{
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 16px;
    text-align: center;
    margin-top: 13px;
  }
`;

export const NumPad = styled.div`
  height: 278px;
  width: 284px;
  padding: 20px 0;
  
  border: 1px solid black;
`;

export const Agreement = styled.label`
  margin-top: 1rem;
  height: 52px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  cursor: pointer;
  

  input {
    height: 0;
    width: 0;
  }

  .checkmark {
    height: 40px;
    width: 40px;
    border: 2px solid var(--black);
  }
  
  p{
    width: 214px;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 16px;
    text-align: left;
  }
  
  
  .checkmark:after {
    content: "";
    position: absolute;
    display: none;
  }
  input:checked ~ .checkmark:after {
    display: block;
  }
  .checkmark:after {
    left: 32px;
    top: 10px;
    width: 15px;
    height: 25px;
    border: solid var(--black);
    border-width: 0 3px 3px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
  }
`;

