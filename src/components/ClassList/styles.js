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

  grid-template-columns: 6fr 2fr;
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

  grid-gap: 30px;
  grid-template-columns: repeat(6, calc(50%));
  grid-template-rows: minmax(150px, 1fr);

  overflow-x: scroll;
  scroll-snap-type: x proximity;

  padding: 10px;

  height: calc(100% - 5px);
`;

export const Teacher = styled.div`

  grid-area: title;

  h1 {
    font-size: 18px;
  }
`;

export const Descriptor = styled.div`
  grid-area: question;
  font-size: 25px;
`;

export const ClassNumber = styled.div`
  grid-area: id;
  font-size: 25px;
  margin-left: auto;
`;

export const Add = styled.button`
  width: 30px;
  height: 30px;
  border-radius: 14px;
  background-color: #01D088;
`;