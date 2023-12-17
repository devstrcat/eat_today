import React, { useState } from 'react'
import Footer from '../components/Footer';
import { BtWrap, CakeImg, ContentWrap, HashTagWrap, HeaderWrap, MoreMainWrap, MoreWrap, Title } from '../styles/more/moreStyle';
import Search from '../components/Search';

const RecipeMore = () => {
  const [isClicked, setIsClicked] = useState(false);
  const bookMarkHover = () => {
    setIsClicked(!isClicked);
  }

  return (
    <MoreWrap>
      <Search></Search>
      <HeaderWrap>
        <Title>초코케이크</Title>
        <BtWrap>
          <button className={isClicked ? "bookmarkhover" : "bookmark"} onClick={bookMarkHover}></button>
          <button className='edit'>
          </button>
          <button className='trash'>   
          </button>
        </BtWrap>
      </HeaderWrap> 
      <MoreMainWrap>
        <CakeImg src='/images/chocolate.svg'/>
        <HashTagWrap>
          <span className='hashtag'>#달달구리</span>
          <span className='hashtag'>#초코케이크</span>
          <span className='hashtag'>#딸기</span>
          <span className='hashtag'>#스트로베리초코</span>
          <span className='hashtag'>#베이킹원데이클래스</span>
        </HashTagWrap>
        <ContentWrap>
          <div className='ingredient'></div>
          <div className='recipe'></div>
          <div className='comment'></div>
        </ContentWrap>
      </MoreMainWrap>
      <Footer />
    </MoreWrap>
  )
};

export default RecipeMore;
