import styled from '@emotion/styled';

export const SearchbarHeader = styled.header`
  position: fixed;
  z-index: 2;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 25px 0 25px 0;
  background: linear-gradient(to right, rgb(5, 11, 92), rgb(26, 115, 232));
  box-shadow: 0px 3px 5px 0px rgba(0, 4, 56, 0.5);
`;

export const SearchForm = styled.form`
  display: flex;
  font-size: 16px;
  outline: none;
  border: none;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
`;

export const SearchFormButton = styled.button`
  width: 100px;
  font-size: 16px;
  background-color: rgb(126, 126, 241);
  border: none;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  cursor: pointer;
  transition: font-weight 250ms linear, color 250ms linear,
    background-color 250ms linear;
  &:hover {
    background-color: rgb(5, 11, 92);
    color: #ffffff;
  }
`;

export const SearchFormInput = styled.input`
  width: 800px;
  height: 20px;
  padding: 10px;
  font-size: 16px;
  outline: none;
  border: none;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  &::placeholder {
    font-size: 16px;
    color: #cccccc;
  }
`;