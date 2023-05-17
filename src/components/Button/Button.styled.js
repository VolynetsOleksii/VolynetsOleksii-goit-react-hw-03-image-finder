import styled from 'styled-components';

export const Button = styled.button`
  display: block;
  margin: 20px auto;
  width: 150px;
  height: 50px;
  font-size: 20px;
  cursor: pointer;
  background-color: ${props => props.theme.colors.lightBlue};
  border: 1px solid ${props => props.theme.colors.lightGray};
  border-radius: 10px;
  transform: scale(1);
  transition: ${props => props.theme.transition.cubicBezier};
  &:hover {
    transform: scale(1.05);
    background-color: ${props => props.theme.colors.white};
    border: 1px solid ${props => props.theme.colors.lightBlue};
    color: ${props => props.theme.colors.lightBlue};
  }
`;
