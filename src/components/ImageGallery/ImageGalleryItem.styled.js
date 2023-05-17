import styled from 'styled-components';

export const ImageItem = styled.li`
  border: 1px solid ${props => props.theme.colors.gray};
  transform: scale(1);
  transition: box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1),
    transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  &:hover,
  &:focus {
    transform: scale(1.05);
    box-shadow: ${props => props.theme.shadows.shadow};
  }
`;

export const Image = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
  cursor: zoom-in;
`;
