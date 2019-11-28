import styled from 'styled-components';

export const Container = styled.div`
  /*
  border: 2px solid #01D088;
  border-radius: 6px;
  */
  color: #FFF;
  background-color: #01d08824;

  width: 100%;

  header {
    background-color: #01D088;
    border-radius: 6px 6px 0px 0px;
    padding: 3px 2px 3px 10px;

    display: flex;
    justify-content: space-between;
  }
`;

export const Content = styled.div`
  color: #acacac;

  height: calc(100% - 10px - 13px);
`;