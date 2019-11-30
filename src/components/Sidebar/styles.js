import styled from 'styled-components';

export const Container = styled.div`
background-color: #01D088;

width: 90px;
min-height: 100%;

position: fixed;
display: flex;
flex-direction: column;
align-items: center;

float: left;

button {
  width: 65px;
  height: 65px;

  border-radius: 16px;
  border: 0px;

  margin-top: 8px;

  cursor: pointer;

  background: rgba(0, 172, 112, 0.5);
}

button:hover {
  background: rgba(35, 231, 162, 0.5);
  transition-duration: 200ms;
}

`;