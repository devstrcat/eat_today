import React from 'react'
import Footer from '../components/Footer';
import { BtWrap, CakeImg, ContentWrap, HashTagWrap, HeaderWrap, MoreMainWrap, MoreWrap, Title } from '../styles/more/moreStyle';
import Search from '../components/Search';

const RecipeMore = () => {
  return (
    <MoreWrap>
      <Search></Search>
            <HeaderWrap>
            <Title>초코케이크</Title>
                <BtWrap>
                  <button className='edit'>
                  </button>
                  <button className='trash'>   
                  </button>
                </BtWrap>
                </HeaderWrap>
        <MoreMainWrap>
            <CakeImg src='/images/chocolate.svg'/>
            <HashTagWrap>
              <li className='hashtag_1'>#달달구리</li>
              <li className='hashtag_2'>#초코케이크</li>
              <li className='hashtag_3'>#스트로베리초코</li>
              <li className='hashtag_4'>#베이킹원데이클래스</li>
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
}

export default RecipeMore