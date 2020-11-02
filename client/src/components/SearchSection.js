import React from "react";
import {Link} from 'react-router-dom';
import { InputGroup, Input, Button } from "reactstrap";

export default function SearchSection(props) {
  const { onChangeSearchValue, onKeyPressSearchValue, onClickSearch } = props;

  return (
    <section className="search-section bg-primary ">
      <div class="toast-header bg-danger text-light">
        <div class="toast-body">My Show. My Time. My Seat</div>
      </div>
      <InputGroup>
        <Input
          placeholder=" Search movie name..."
          onChange={onChangeSearchValue}
          onKeyPress={onKeyPressSearchValue}
        />
        <Button color="success" onClick={onClickSearch}>
          Search
        </Button>
        <Link to={`/add-movie`} className="btn bg-info">
          Add Movie
        </Link>
      </InputGroup>
    </section>
  );
}

