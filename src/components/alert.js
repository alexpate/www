import {Box} from 'grid-styled';

const Alert = Box.extend`
  width: 100%;
  padding: 24px 16px;
  margin: 16px 0;
  border-radius: 4px;
  background-color: ${props =>
    props.type === 'warning' ? '#fff3cf' : '#e9f7ff'};
  font-size: 14px;
  color: ${props => props.theme.colors.text};
`;

export default Alert;
