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

  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: stretch;

  height: 90%;
  width: 50%;
  
  margin: auto auto;

  padding: 10vh 40px 20px 40px;

  background-color: #fff;
  
  border-radius: 20px;

  color: #000;

  h2, h3 {
    font-weight: normal;
    font-size: 20px;
  }

  h2 {
    margin-bottom: 30px;
  }

  h3 {
    margin-bottom: 30px;
  }

  label {
    font-weight: bold;
    font-size: 18px;
  }

  bold {
    font-weight: bold;
  }


`;

export const Answer = styled.div`
  margin: 20px 0px;
  width: 100%;
  height: 100%;
`;

export const Options = styled.div`
  display: flex;
  flex-direction: column;
  float: left;

  margin-top: auto;

  position: relative;

  width: 100%;
  

  button {
    margin-top: 10px;
    height: 42px;
    width: 120px;
    color: #000;
  }
`;

export const Grading = styled.button`
  background-color: ${props => props.btncolor};

  visibility: ${props => props.display};

  &:hover {
    background-color: ${props => props.btncolor + 'A5'};
    transition-duration: 300ms;
  }

`;

export const Justificatory = styled.textarea`
  background-color: ${props => props.background};

  position: absolute;
  visibility: ${props => props.display};

  border-radius: 12px;
  border: 0px;

  padding: 20px;

  height:100%;
  width: 100%;

  resize: none;

`;

export const Fill = styled.div`
  width: 100%;
  height: 100%;
`;