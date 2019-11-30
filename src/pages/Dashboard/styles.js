import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;  
  width: 100%;
  height: 100%;
`;

export const Content = styled.div `
  padding: 20px 40px;

  float: right;
  position: fixed;

  width: 100%;
  max-width: calc(100% - 90px);
  height: 100%;
  max-height: 100%;


  left: +90px;

  display: grid;
  grid-gap: 20px;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 3fr 4fr;
  grid-template-areas: "tit tit"
                       "st gr"
                       "ex ex"

`;