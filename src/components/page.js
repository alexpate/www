import styled from 'styled-components';

export default styled.div`
  background-color: ${props => props.theme.colors.primary};
  /* background-color: white; */
  min-height: 100vh;
  transition: color 0.2s ease-out, background 0.2s ease-out;
`;
