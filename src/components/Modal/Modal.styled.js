import styled from 'styled-components';

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 200;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const ModalWindow = styled.div`
  position: absolute;
  max-width: 80vw;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) scale(1);
`;

export const ModalImage = styled.img`
  object-fit: fill;
  width: 100%;
  height: 100%;
  border-radius: 5px;
  border: 1px solid ${props => props.theme.colors.lightBlue};
`;
