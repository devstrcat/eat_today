import styled from "@emotion/styled";
import React from "react";

const Search = ({handleSubmit}) => {
  const HeaderStyle = styled.header`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 28px;
    height: 30px;
    background-color: #fdb456;
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
  `;

  return (
    <HeaderStyle>
      <SearchForm onSubmit={handleSubmit}>
        <SearchInput
          type="text"
          id="searchTxt"
          name="search"
          placeholder="텍스트를 입력하세요."
        ></SearchInput>
        <SearchButton type="submit"></SearchButton>
      </SearchForm>
    </HeaderStyle>
  );
};

export default Search;
