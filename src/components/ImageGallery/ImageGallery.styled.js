import styled from 'styled-components';

export const ImageList = styled.ul`
display: grid;
max-width: calc(100vw - 60px);
grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
grid-gap: 20px;
margin-top: 0;
margin-bottom: 0px;
padding: 100px 20px 20px;
list-style: none;
margin-left: auto;
margin-right: auto;
`;