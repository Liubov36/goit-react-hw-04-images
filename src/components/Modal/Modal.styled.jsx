import styled from '@emotion/styled';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 1200;
`;

export const ModalImg = styled.div`
  max-width: calc(100vw - 250px);
`;

export const Img = styled.img`
  display: block;
  max-width: 100%;
  height: auto;
`;