import styled from "@emotion/styled";
import React from "react";

// emotion
const HeaderStyle = styled.header`
  position: fixed;
  top: 0;
  max-width: 320px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 28px;
  height: 30px;
  background-color: #fdb456;
  z-index: 10;
`;
const SearchForm = styled.form`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
  width: 280px;
  height: 30px;
  border-radius: 20px;
  background: #fff;
  box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 0.2);
`;
const SearchInput = styled.input`
  border: 0;
  width: 250px;
`;
const SearchButton = styled.button`
  width: 26px;
  height: 26px;
  border: 0;
  background: url("/images/index/search_icon.svg") no-repeat;
  background-size: cover;
  cursor: pointer;
`;

const Search = props => {
  return (
    <HeaderStyle>
      <SearchForm>
        <SearchInput
          type="text"
          id="searchTxt"
          name="search"
          maxLength="10"
          placeholder="제목으로 찾기, 태그로 찾기"
          value={props.searchText}
          onChange={props.handleChange}
        >
          {props.setsearchText}
        </SearchInput>
        <SearchButton
          type="submit"
          onClick={props.handleSearchReset}
        ></SearchButton>
      </SearchForm>
    </HeaderStyle>
  );
};

export default Search;
