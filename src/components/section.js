import styled from 'styled-components';
import {H2} from 'components/typography';

const Section = styled.section`
  padding: 20px 0;
  border-bottom: 2px solid ${props => props.theme.colors.flare};
  margin-bottom: 36px;
  padding-bottom: 36px;
`;
export default Section;

export const SectionTitle = styled(H2)`
  color: ${props => props.theme.colors.flare};
  margin-bottom: 16px;
`;
