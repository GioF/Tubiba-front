import styled from 'styled-components';

export const Counter = styled.button`
      margin-right: 5px;
      width: 16px;

      border: 0px;
      border-radius: 6px;
      
      background-color: rgba(0,172,112,0.8);

      color: #fff;

      cursor: pointer;

    &:hover {
      background: rgba(35,231,162,0.5);
      border-radius:16px;
      transition-duration: 200ms;
    }

`;

export const Selector = styled.div`
  padding-left: 10px;
`;

export const Listing = styled.div`
  color: #acacac;
  padding-right: 2px;

  height: calc(100% - 10px - 13px);

  button {
    border: 0px;
    background: #dcdcdc;
    text-align: left;
    padding: 4px;
  }

  ul {
    flex-direction: column;
    overflow: auto;
    height: calc(100% - 10px - 13px);
  }

  li {
    display: flex;
    flex-direction: row;
    padding: 4px;
  }

`;

export const Title = styled.button`
  width: 60%;
`;

export const Date = styled.button`
  width: 20%;
`;

export const Difficulty = styled.button`
  width: 20%;
`;
