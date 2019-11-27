import styled from 'styled-components';

export const Container = styled.div`
  border-left: 3px solid #01D088;
  border-top: 2px solid #01D088;
  border-radius: 6px;

  color: #FFF;

  width: 100%;
  height: 200px;

  header {
    background-color: #01D088;
    border-right: 2px solid #fff;
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