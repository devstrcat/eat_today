import React from 'react'
import { CancelButtonDiv, CancelButtonIcon } from '../../styles/write/cancelbutton'
import { useNavigate } from 'react-router';


const CancelButton = () => {
  const navigate = useNavigate();

  const handleCancel = () => {
    // 페이지 뒤로가기
    navigate(-1);
  };

  return (
    <div>
        <CancelButtonDiv  onClick={handleCancel}>
          <CancelButtonIcon>
            <img src="/images/cancel_icon.svg" />
          </CancelButtonIcon>
        </CancelButtonDiv>
    </div>
  )
}

export default CancelButton