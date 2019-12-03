import React, { useState, useEffect }from 'react';

import { Container, Options, Overlay, Fill, Option, Wrapper} from './styles';

export default function Exercise(props) {

  const [response, setResponse] = useState(null);

  function handleResponseChange(event){
    setResponse(event.target.value);
  }

  function handleSubmit(){
    props.undo('none');
  }

  return (
    <Overlay display={props.display}>
      <Container>
        <h1>
          {props.data.title ? props.data.title : "teste"}
        </h1>

        <h2>
          {props.data.question ? props.data.question : "is cioccolata dumb?"}
        </h2>

       

        <Fill>
          <p><label>Resposta:</label></p>
          
          <Options>
            <Wrapper><Option onChange={handleResponseChange} type="radio" name="answer" value='0'/><label>A: {props.data.options[0]}</label></Wrapper>
            <Wrapper><Option onChange={handleResponseChange} type="radio" name="answer" value='1'/><label>B: {props.data.options[1]}</label></Wrapper>
            <Wrapper><Option onChange={handleResponseChange} type="radio" name="answer" value='2'/><label>C: {props.data.options[2]}</label></Wrapper>
            <Wrapper><Option onChange={handleResponseChange} type="radio" name="answer" value='3'/><label>D: {props.data.options[3]}</label></Wrapper>
          </Options>
          <button onClick={handleSubmit}>Enviar</button>
        </Fill>
      </Container>
    </Overlay>
  );
}
