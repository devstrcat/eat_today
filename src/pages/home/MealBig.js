import React, { useState } from "react";

import Footer from "../../components/Footer";
import Search from "../../components/Search";
import {
  BulletinboxHashtag,
  BulletinboxPicture,
  BulletinboxTitle,
  Derail,
  Detais,
  DulletInbox,
} from "../../styles/mealbigcss";

const MealBig = () => {
  // 상태를 사용하여 버튼 클릭 여부를 추적
  const [isHidden, setIsHidden] = useState(true);

  // 버튼 클릭 시 상태 변경
  const handleClick = () => {
    setIsHidden(!isHidden);
  };

  return (
    <>
      <Search handleClick={handleClick} isHidden={isHidden}></Search>
      <Detais>
        <DulletInbox>
          <BulletinboxTitle>
            <input></input>
          </BulletinboxTitle>
          <BulletinboxPicture>
            <img src="/images/choco.png" alt="사진을 넣어주세요" />
          </BulletinboxPicture>
          <BulletinboxHashtag>
            <span># 초콜릿</span>
            <span># 테그</span>
            <span># 힘들다</span>
            <span># 난 뭐했니</span>
            <span># 하앙 집갈레</span>
          </BulletinboxHashtag>
          <Derail
            type="text"
            maxLength="1000"
            placeholder="여기에 적으세요."
            autoFocus
          ></Derail>
        </DulletInbox>
      </Detais>

      <Footer handleClick={handleClick}></Footer>
    </>
  );
};

export default MealBig;
