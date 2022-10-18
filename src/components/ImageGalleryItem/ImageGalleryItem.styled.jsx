import styled from '@emotion/styled';

export const GalleryItem = styled.li`
  border-radius: 6px;
  overflow: hidden;
  box-shadow: 0px 5px 5px 0px rgba(0, 4, 56, 0.5);
`;

export const GalleryItemImage = styled.img`
  width: 100%;
  height: 260px;
  object-fit: cover;
  transition: transform 250ms cubic-bezier(0.5, 0, 0.5, 1);
  &:hover {
    transform: scale(1.1);
    cursor: zoom-in;
  }
`;