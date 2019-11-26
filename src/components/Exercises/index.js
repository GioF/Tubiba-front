import React from 'react';

import { Container, Card, MainContent, ExerciseHeader, Primer, Tags } from './styles';

export default function Exercises() {
  return (
    <Container>
      <Card>
        <MainContent>
          <ExerciseHeader>
            <h1>
              Como sonegar impostos sem ser pego?
            </h1>
            <h2>
              Paulo Kogos
            </h2>
            <h2>
              01/01/1970
            </h2>
          </ExerciseHeader>
          <Primer>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget ligula eu lectus lobortis condimentum. Aliquam nonummy auctor massa. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla at risus. Quisque purus magna, auctor et, sagittis ac, posuere eu, lectus. Nam mattis, felis ut adipiscing.
          </Primer>
        </MainContent>
        <Tags>
          <ul>
            <li>Tag 1</li>
            <li>Tag 2</li>
            <li>Tag 3</li>
          </ul>
        </Tags>
      </Card>
    </Container>
  );
}
