import React from 'react';
import Form from 'react-bootstrap/Form';
import { ReactComponent as SearchButton } from 'bootstrap-icons/icons/search.svg';
import style from './style.module.scss';

const SearchBar = () => (
  <Form className="d-flex">
    <Form.Control
      type="search"
      placeholder="Buscar senarauta"
      className="me-2"
      aria-label="Buscar senarauta"
    />
    <button
      className={style.search}
      type="button"
    >
      {/* <i className="bi bi-search"> </i> */}
      <SearchButton />
    </button>
  </Form>
);

export default SearchBar;
