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
  padding: 20px;
  border-radius: 20px;
  width:80%;
  margin: auto;
  
  background-color: #fff;

  form {
    height: 100%;

    button {
      width: 90px;
      margin: auto;
      margin-bottom: 0px;
    }
  }
`;

export const Titling = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  width: 100%;

  label {
    padding-left: 10px;
    margin: 0px;
    font-weight: 500;
  }

  input {
    padding: 5px 10px;
    margin: 0px;
    width: 80%;
  }

`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;
`;

export const Question = styled.div`
  display: flex;
  flex-direction: column;
  height: 40%;

  label {
    margin: 0 auto;
    margin-top: 20px;
  }

  textarea {
    height: 100%;
    color: #6F6F6F;
    padding: 5px 10px;
  }

`;

export const Answers = styled.div`
  li {
    list-style: none;
    margin: 0px;
  }
`;