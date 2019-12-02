import styled from 'styled-components';

export const Container = styled.div`
  height: 90%;
  width: 50%;
  
  margin: auto;

  padding: 70px 40px 20px 40px;

  background-color: goldenrod;
  
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
  }

  bold {
    font-weight: bold;
  }


`;

export const Answer = styled.div`
  margin: 20px 0px;
  width: 100%;
`;

export const Options = styled.div`
  display: flex;
  flex-direction: column;
  float: left;
`;

export const Correto = styled.button`
  margin: auto;
`;

export const Parcial = styled.button`
  margin: auto;
`;

export const Incorreto = styled.button`
  margin: auto;
`;
