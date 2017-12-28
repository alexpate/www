import React from 'react';
import PureComponent from 'react-pure-render/component';
import styled from 'styled-components';

const StyledToggle = styled('div')`
  width: 44px;
  height: 18px;
  background-color: ${props => props.theme.colors.toggleBackground};
  border-radius: 20px;
  cursor: pointer;
  display: flex;
  align-items: center;
  transition: background-color 0.1s ease-in-out;

  span {
    transition: left 0.1s ease-in-out;
    border-radius: 50%;
    width: 14px;
    height: 14px;
    background-color: ${props => props.theme.colors.toggleButton};
    display: block;
    position: relative;
    left: ${props => (props.on ? '2px' : 'calc(100% - 16px)')};
  }
`;

export default class Toggle extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      on: this.props.on,
    };

    this.onToggle = this.onToggle.bind(this);
  }

  onToggle(ev) {
    ev.preventDefault();
    this.props.onToggle();

    this.setState({on: !this.state.on});
  }

  render() {
    return (
      <StyledToggle on={this.state.on} onClick={this.onToggle}>
        <span />
      </StyledToggle>
    );
  }
}
