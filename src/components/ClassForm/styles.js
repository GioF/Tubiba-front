import styled from 'styled-components';

export const Overlay = styled.div`
  background-color: #01D08870;
  
  position: fixed;

  height: 100%;
  width: 100%;

  z-index: 2000;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;

  backdrop-filter: blur(4px);

  display: ${props => props.shouldDisplay ? 'flex' : 'none'};
  flex-direction: column;
  justify-content: center;
`;

export const Container = styled.div`

  height: auto;
  width: 50%;
  
  margin: auto;

  padding: 10vh 40px 20px 40px;

  background-color: #fff;
  
  border-radius: 20px;

  color: #000;

  input {
    border-radius: 10px;
    border: 2px solid #01D088;
  }

  bold {
    font-weight: bold;
  }

  button {
    margin-top: auto;
  }

`;