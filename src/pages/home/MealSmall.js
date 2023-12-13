import React, { useState } from "react";
import Search from "../../components/Search";
import Footer from "../../components/Footer";

const MealSmall = () => {
  // 상태를 사용하여 버튼 클릭 여부를 추적
  const [isHidden, setIsHidden] = useState(true);

  // 버튼 클릭 시 상태 변경
  const handleClick = () => {
    setIsHidden(!isHidden);
  };

  return (
    <div>
      <Search handleClick={handleClick} isHidden={isHidden}></Search>
      <main>group</main>
      햣
    </div>
  );
};

export default MealSmall;
