import styled from 'styled-components';

export const Container = styled.div`
  padding: 20px;
  border: 1px solid #A7A3A3;
  border-radius: 6px;
  width:90%;
  height: 100%;
  color: #6F6F6F;

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
