import styled from 'styled-components';

export const Container = styled.div`
  border: 2px solid #01D088;
  border-radius: 6px;

  color: #FFF;

  width: 100%;

  header {
    background-color: #01D088;
    border-radius: 3px 3px 0px 0px;
    padding: 3px 0px;

    display: flex;
    justify-content: space-between;
  }
`;

export const Content = styled.div`
  color: #acacac;
  padding-right: 2px;

  height: calc(100% - 10px - 13px);
`;