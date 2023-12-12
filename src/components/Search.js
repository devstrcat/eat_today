import styled from "@emotion/styled";
import React from "react";

const Search = props => {
  const HeaderStyle = styled.header`
    display: flex;
    justify-content: center;
    margin: 20px 0;
    height: 30px;
  `;
  const SearchForm = styled.form`
    display: ${props.isHidden ? "flex" : "none"};
    justify-content: space-between;
    align-items: center;
    padding: 0 7px;
    width: 266px;
    height: 30px;
    border-radius: 20px;
    background: #fff;
    box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 0.2);
  `;
  const SearchInput = styled.input`
    border: 0;
    width: 200px;
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
      <SearchForm method="post" action="">
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
