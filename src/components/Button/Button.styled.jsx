import styled from '@emotion/styled';

export const ButtonSubmit = styled.button`
  width: 200px;
  height: 40px;
  margin-top: 50px;
  margin-bottom: 30px;
  margin-left: 50%;
  transform: translateX(-50%);
  font-size: 16px;
  font-weight: 700;
  background-color: rgba(0, 0, 255, 0.404);
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: font-weight 250ms linear, color 250ms linear,
    background-color 250ms linear;
  &:hover,
  &:focus {
    background-color: rgb(5, 11, 92);
    color: #ffffff;
    font-weight: 700;
  }
`;