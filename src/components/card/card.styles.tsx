import styled from 'styled-components';

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  padding: 5px;
  cursor: pointer;
  text-align: center;
  -moz-osx-font-smoothing: grayscale;
  backface-visibility: hidden;
  transform: translateZ(0);
  transition: transform 0.25s ease-out;

  &:hover {
    transform: scale(1.05);
  }
`;
