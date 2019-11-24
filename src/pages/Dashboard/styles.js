import styled from 'styled-components';

export const Container = styled.div`
display: flex;
flex-direction: row;
width: 100%;
height: 100%;
`;

export const Sidebar = styled.div`
  background-color: #01D088;
  width: 90px;
  min-height: 100%;
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;

  button {
    width: 65px;
    height: 65px;
  
    border-radius: 16px;
    border: 0px;
  
    margin-top: 8px;
  
    cursor: pointer;
  
    background: rgba(0, 172, 112, 0.5);
  }

`;