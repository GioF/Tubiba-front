import styled from 'styled-components';

export const Container = styled.li`
  background-color: #fff;

  color: #000;

  border-radius: 20px;

  padding: 20px;
  display: grid;

  scroll-snap-align: center;

  & > * {
    grid-column: 2 / -2;
  }

  grid-template-columns: 6fr 1fr;
  grid-template-rows: 1fr 6fr;
  grid-template-areas: "  title    id  "  
                       "question status";

  cursor: pointer;
  
`;

export const Listing = styled.ul`
  background-color: #01D088;

  list-style: none;

  display: grid;

  grid-gap: 10px;
  grid-template-columns: repeat(${props => props.listSize}, calc(50%));
  grid-template-rows: minmax(150px, 1fr);

  overflow-x: scroll;
  scroll-snap-type: x proximity;

  padding: 10px;

  height: 100%;
  max-width: 570px;
`;

export const Title = styled.div`

  grid-area: title;

  h1 {
    font-size: 12px;
  }
`;

export const Question = styled.div`
  grid-area: question;
  font-size: 12px;
`;

export const Add = styled.button`
  width: 30px;
  height: 30px;
  border-radius: 14px;
  background-color: #01D088;
`;