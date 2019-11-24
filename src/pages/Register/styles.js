import styled from 'styled-components';

export const Centered = styled.div`
  margin: 80px auto 0;

  border: 1px solid;
  border-color: #bbbbbb;
  border-radius: 12px;

  padding: 30px 0px;

  width: 100%;
  max-width: 550px;

  display: flex;
  flex-direction: column;
  align-items: center;
  
  form {
    min-width: 50%;

    button {
      margin: 0px 0px;
    }
  }
`
export const RadioContainer = styled.div`
  justify-content: left;
  float: left;
  margin-left: 0px;

  input {
    margin: 0px 0px;
    margin: 0px 6px;
  }
`
