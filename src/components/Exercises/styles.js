import styled from 'styled-components';

export const Container = styled.div`
  border: 1px solid #4287F5;
  border-radius: 6px;
  width:90%;

  grid-area: ${props => props.selectedArea};
`;

export const Card = styled.div`
  display: flex;
`;

export const MainContent = styled.div`
  padding: 10px;
  max-width: 80%;
`;

export const ExerciseHeader = styled.div`
  margin: 5px 30px 20px 0px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;

  h1 {
    font-size: 14px;
  }

  h2 {
    font-size: 14px;
  }

`;

export const Primer = styled.div`
  padding: 5px;

  margin-right: 30px;
  
  border: 2px solid #C4C4C4;
  border-radius: 6px;
  
  height: 100px;
  overflow: hidden;
`;

export const Tags = styled.div`
  padding: 10px 0px;
  
  border-left: 1px solid #acacac;

  display: flex;
  flex-direction: row;

  width: 100%;
  max-width: 20%;

  text-align: center;
  
  ul {
    
    margin: 0 auto;
  }

`;