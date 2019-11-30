import styled from 'styled-components';


export const Circle = styled.div`
  background-color: #01D088;

  width: 28px;
  height: 28px;

  border-radius: 14px;

  left: -16px;
  position: relative;
  float: left;
`;
export const Container = styled.div`

  padding-left: 20px;

  ul {

    display: flex;
    flex-direction: column;

   li {
    flex-direction: row;
    padding-bottom: 45px;
    border-left: 3px solid #01D088;

    & + li {
      position: relative;
      top: -2px;

      ${Circle} {
        background-color: #01D088;

        width: 18px;
        height: 18px;

        border-radius: 9px;

        left: -7px;
        position: relative;
        float: left;
      }
    }
    
    &:last-child{
      padding-bottom: 0px;
      border-left: 0;
    }

   }
 
  }

  h1 {
    color: #000;
    font-weight: normal;
    font-size: 19px;
    padding: 3px 0px 3px 40px;
  }

  h2 {
    font-weight: normal;
    font-size: 18px;
    padding-left: 30px;
  }

`;