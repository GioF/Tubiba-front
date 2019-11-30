import styled from 'styled-components';

export const Container = styled.div`
  border: 3px solid #01D088;
  border-radius: 24px;

  color: #000;
  
  grid-area: ${props => props.gridArea};

  width: 100%;
  max-height:100%;

  header {
    font-size: 16px;
    padding: 18px 18px 12px 18px;

    display: flex;
    justify-content: space-between;
  }
`;

export const Content = styled.div`
  color: #acacac;

  height: calc(100%);
`;