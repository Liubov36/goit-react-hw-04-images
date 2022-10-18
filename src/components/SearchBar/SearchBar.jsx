import { Component } from 'react';
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

class SearchBar extends Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };

  state = {
    searchInput: '',
  };

  handleChange = e => {
    this.setState({ searchInput: e.target.value.toLowerCase() });
  };

  handleFormSubmit = e => {
    e.preventDefault();

    if (this.state.searchInput.trim() === '') {
      Notiflix.Notify.failure('Please enter a search term!');
      return;
    }

    this.props.onSubmit(this.state.searchInput);
  };

  render() {
    return (
      <SearchbarHeader>
        <SearchForm onSubmit={this.handleFormSubmit}>
          <SearchFormInput
            value={this.state.searchInput}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={this.handleChange}
          />

          <SearchFormButton type="submit">
            <IconContext.Provider
              value={{ style: { verticalAlign: 'middle' } }}
            >
              <BiSearchAlt2 size={24} />
            </IconContext.Provider>
          </SearchFormButton>
        </SearchForm>
      </SearchbarHeader>
    );
  }
}

export default SearchBar;

Notiflix.Notify.init({
  distance: '10px',
  timeout: 1500,
});