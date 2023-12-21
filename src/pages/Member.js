import React from 'react'
import { Mem, Mem1, Mem2, Mem3, Mem4, Member1, Member2, Member3, Member4 } from '../styles/memberStyle'


const Member = () => {
  return (
    <div>
        <Mem>
            <div className='mem1'>
                <p>김 경 민 (총괄 팀장) <br/>
                메인 페이지 (MealBig), 에러 페이지<br />
                제작 및 노션 관리
                </p>
            </div>
            <div className='mem2'>
                <p>김 현 수 (팀장)<br />
                일지 리스트 / 일지 상세정보 / 일지 태그 삭제 / 예외 처리
                </p>
            </div>
            <div className='mem3'>
                <p>박 소 연 (팀원) <br />
                상세 페이지, 소개 페이지 제작<br />
                및 캔바 활용  
                </p>
            </div>
            <div className='mem4'> 
                <p>문 하 나 (팀원)<br />
                요구사항명세서 작성 / 일지 사진 추가 / 일지 태그 추가 / 일지 삭제 / 일지 사진 삭제
                </p>
                
            </div>
            <div className='mem4'>
               
            </div>
            <div className='mem5'>
                <p>문 하 나 (팀원)<br />
                요구사항명세서 작성 / 일지 사진 추가 / 일지 태그 추가 / 일지 삭제 / 일지 사진 삭제
                </p>
            </div>
            <div className='mem6'>
                <p>한 상 원 (팀원)<br />
                ERD작성 / 일지작성 / 북마크표시, 해제 / 일지 사진 수정 / 일지 태그 수정
                </p>
            </div>
            <p>송 가 람 (팀원) <br />
                수정, 삭제 페이지 제작 및<br />
                피그마 활용
                </p>
                <p>최 배 근 (팀장)<br />
                메인 페이지 (MealSmall), 인트로 페이지,<br />
                로고 제작 및 프로젝트 총 관리
                </p>
        </Mem>
    </div>
  )
}

export default Member