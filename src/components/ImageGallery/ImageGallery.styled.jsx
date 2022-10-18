import styled from '@emotion/styled';

export const GalleryImage = styled.ul`
  display: grid;
  max-width: calc(100vw - 50px);
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  grid-gap: 16px;
  margin-top: 120px;
  margin-bottom: 0;
  padding: 0;
  list-style: none;
  margin-left: auto;
  margin-right: auto;
`;