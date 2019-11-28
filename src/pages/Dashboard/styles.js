import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;  
  width: 100%;
  height: 100%;
`;

export const Sidebar = styled.div`

  background-color: #01D088;

  width: 90px;
  min-height: 100%;

  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;

  float: left;

  button {
    width: 65px;
    height: 65px;
  
    border-radius: 16px;
    border: 0px;
  
    margin-top: 8px;
  
    cursor: pointer;
  
    background: rgba(0, 172, 112, 0.5);
  }

  button:hover {
    background: rgba(35, 231, 162, 0.5);
    transition-duration: 200ms;
  }

`;

export const Content = styled.div `
  padding: 50px;

  float: right;
  position: fixed;

  width: 100%;
  max-width: calc(100% - 90px);
  height: 100%;
  max-height: 100%;


  left: +90px;

  display: grid;
  grid-gap: 30px;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 2fr 1fr;
  grid-template-areas: "st gr"
                       "ex ex"

`;