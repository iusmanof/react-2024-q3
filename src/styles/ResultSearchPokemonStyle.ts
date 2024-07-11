import styled from 'styled-components';

export const PokemonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-self: start;
  align-items: flex-start;
  flex-wrap: wrap;
`;

export const PokemonBlock = styled.div`
  width: 150px;
  margin: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid rebeccapurple;
  background-color: aliceblue;
`;
