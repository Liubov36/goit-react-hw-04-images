import { useState } from 'react';
import PropTypes from 'prop-types';
import {
  SearchbarHeader,
  SearchForm,
  SearchFormButton,
  SearchFormInput,
} from './SearchBar.styled';
import { IconContext } from 'react-icons';
import { BiSearchAlt2 } from 'react-icons/bi';
import Notiflix from 'notiflix';

export default function SearchBar({ onSubmit }) {
  const [searchInput, setSearchInput] = useState('');

  const handleChange = e => {
    setSearchInput(e.currentTarget.value.toLowerCase());
  };

  const handleFormSubmit = e => {
    e.preventDefault();

    if (searchInput.trim() === '') {
      Notiflix.Notify.failure('Please enter a search term!');
      return;
    }

    onSubmit(searchInput);
    setSearchInput('');
  };

  return (
    <SearchbarHeader>
      <SearchForm onSubmit={handleFormSubmit}>
        <SearchFormInput
          value={searchInput}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          onChange={handleChange}
        />

        <SearchFormButton type="submit">
          <IconContext.Provider value={{ style: { verticalAlign: 'middle' } }}>
            <BiSearchAlt2 size={24} />
          </IconContext.Provider>
        </SearchFormButton>
      </SearchForm>
    </SearchbarHeader>
  );
}

Notiflix.Notify.init({
  distance: '10px',
  timeout: 1500,
});

SearchBar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};