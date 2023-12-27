import React from "react";
import {
  MemberBox,
  MemberWrap
} from "../styles/memberStyle";
import Footer from "../components/Footer";

const Member = () => {
  return (
    <div>
    <MemberWrap>
      <MemberBox>
        <div className="circle">
          김 경 민 
        </div>
        <div className="role">
          <img src="../images/bg_color.jpeg"/>
          (총괄 팀장) 
          메인 페이지 (MealBig), <br />
          에러 페이지 제작 및 노션 관리
        </div>
      </MemberBox>
      <MemberBox>
        <div  className="circle">
          김 현 수 
        </div>
          <div className="role">
          (팀장)
          일지 리스트 / 일지 상세정보 / 일지 태그 삭제 / 예외 처리
          </div>
      </MemberBox>
      <MemberBox>
        <div  className="circle">
          박 소 연 
        </div>
          <div className="role">
          (팀원)
          상세 페이지, 소개 페이지 제작
          기능명세서 작성
          </div>
      </MemberBox>
      <MemberBox>
        <div  className="circle">
          문 하 나 
        </div>
          <div className="role">
          (팀원)
          요구사항명세서 작성 / 일지 사진, 태그 추가 / 일지 삭제 /
          일지 사진 삭제
          </div>
      </MemberBox>
      <MemberBox>
        <div  className="circle">
          송 가 람  <br />
        </div>
          <div className="role">
          (팀원)
          수정, 삭제 페이지 제작 및<br />
          피그마 활용
          </div>
      </MemberBox>
      <MemberBox>
        <div  className="circle">
          한 상 원 
        </div>
          <div className="role">
          (팀원)
          ERD작성 / 일지작성 / 북마크표시, 해제 / 일지 사진 수정 / 일지 태그
          수정
          </div>
      </MemberBox>
      <MemberBox>
        <div  className="circle">
          최 배 근 
        </div>
          <div className="role">
          (팀장)
          메인 페이지 (MealSmall), <br />
          인트로 페이지,
          로고 제작 및 프로젝트 총 관리
          </div>
      </MemberBox>
    </MemberWrap>
      <Footer/>
      </div>
  );
};

export default Member;
