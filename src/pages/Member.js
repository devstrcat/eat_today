import React from "react";
import {
    Circle,
  MemberBox,
  MemberWrap
} from "../styles/memberStyle";
import Footer from "../components/Footer";

const Member = () => {
  return (
    <div>
    <MemberWrap>
      <MemberBox>
        <Circle>
          김 경 민 
        </Circle>
        <div className="box-wrap">
          <img src="../images/bg_color.jpeg"/>
          <div className="role">
          (총괄 팀장)<br />
          메인 페이지 (MealBig), <br />
          로그인, 회원가입 페이지 제작<br />
          에러 페이지 제작 및 노션 관리
          </div>
        </div>
      </MemberBox>
      <MemberBox>
        <Circle>
          김 현 수 
        </Circle>
        <div className="box-wrap">
          <img src="../images/bg_color.jpeg"/>
          <div className="role">
          (팀장)<br />
          일지 리스트 / 일지 상세정보 <br />
          일지 태그 삭제 / 예외 처리
          </div>
          </div>
      </MemberBox>
      <MemberBox>
        <Circle>
          박 소 연 
        </Circle>
        <div className="box-wrap">
          <img src="../images/bg_color.jpeg"/>
          <div className="role">
          (팀원)<br />
          상세 페이지, 소개 페이지 제작<br />
          다이어그램 활용
          </div>
          </div>
      </MemberBox>
      <MemberBox>
        <Circle>
          문 하 나 
        </Circle>
        <div className="box-wrap">
          <img src="../images/bg_color.jpeg"/>
          <div className="role">
          (팀원)<br />
          요구사항명세서 작성 <br /> 
          일지 사진, 태그 추가 <br />일지 삭제 /
          일지 사진 삭제
          </div>
          </div>
      </MemberBox>
      <MemberBox>
        <Circle>
          송 가 람  <br />
        </Circle>
        <div className="box-wrap">
          <img src="../images/bg_color.jpeg"/>
          <div className="role">
          (팀원)<br />
          수정, 삭제 페이지 제작 및<br />
          피그마 활용
          </div>
          </div>
      </MemberBox>
      <MemberBox>
        <Circle>
          한 상 원 
        </Circle>
        <div className="box-wrap">
          <img src="../images/bg_color.jpeg"/>
          <div className="role">
          (팀원)<br />
          ERD작성 / 일지작성 <br />북마크표시, 해제<br />
          일지 사진 수정 / 일지 태그
          수정
          </div>
          </div>
      </MemberBox>
      <MemberBox>
        <Circle>
          최 배 근 
        </Circle>
        <div className="box-wrap">
          <img src="../images/bg_color.jpeg"/>
          <div className="role">
          (팀장)<br />
          메인 페이지 (MealSmall), <br />
          인트로 페이지,
          로고 제작 및<br /> 프로젝트 총 관리
          </div>
          </div>
      </MemberBox>
    </MemberWrap>
      <Footer/>
      </div>
  );
};

export default Member;
