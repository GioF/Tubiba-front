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

  grid-template-rows: minmax(150px, 1fr);

  display: grid;

  grid-gap: 10px;
  grid-template-columns: repeat(6, calc(50%));
  grid-template-rows: minmax(150px, 1fr);

  overflow-x: scroll;
  scroll-snap-type: x proximity;

  padding: 10px;
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
  margin-top:auto;
`;

export const Identification = styled.div`
  grid-area: id;
  margin-left: auto;
`;

export const Status = styled.div`
  width: 20px;
  height: 20px;

  background-color:${props => props.status + 'D5'};

  border-radius: 10px;

  margin-top: auto;
  margin-left: auto;

  grid-area: status;
`;