import styled, { css } from 'styled-components';

const Button = styled.a`
  height: 44px;
  padding: 0 19px;
  font-size: 14px;
  display: inline-block;
  line-height: 44px;
  color: #999;
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 5px;
  cursor: pointer;
  box-shadow: 0 1px 1px rgba(0,0,0,.04);
  transition: all .2s ease-in-out;

  &:hover {
    color: #111;
    border-color: #111;
    box-shadow: 0 1px 1px rgba(0,0,0,.08);
  }

  ${props => props.primary && css`
    height: 32px;
    padding: 0 11px;
    font-size: 12px;
    font-weight: 700;
    border: 1px solid transparent;
    background-color: #3cb46e;
    line-height: 32px;
    color: #fff;

    &:hover {
      border: 1px solid transparent;
      background-color: #37a866;
      color: #fff;
    }
  `}
`

export default Button;
