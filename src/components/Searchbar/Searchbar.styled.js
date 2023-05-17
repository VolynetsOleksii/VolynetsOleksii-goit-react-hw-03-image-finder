import styled from 'styled-components';

export const Wrapper = styled.div`
  background-color: ${props => props.theme.colors.lightBlue};
  padding-bottom: 15px;
  padding-top: 15px;
  position: fixed;
  z-index: 100;
  left: 0;
  top: 0;
  right: 0;
`;

export const Form = styled.form`
  border: 1px solid ${props => props.theme.colors.gray};
  width: 320px;
  display: flex;
  padding: 5px;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.theme.colors.white};
  margin: 0 auto;
  opacity: 1;
  border-radius: 5px;
  box-shadow: ${props => props.theme.shadows.shadow};
`;

export const Input = styled.input`
  font-size: 20px;
  border: none;
  outline: none;
  background-color: transparent;
  &::placeholder {
    font-size: 20px;
  }
`;

export const Button = styled.button`
  margin-top: 5px;
  background-color: transparent;
  border-color: transparent;
  cursor: pointer;
  transform: scale(1);
  color: ${props => props.theme.colors.gray};
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1),
    color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  &:focus {
    transform: scale(1.15);
  }
`;
