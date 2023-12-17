import React from 'react'
import { CancelButtonDiv, CancelButtonIcon } from '../../styles/write/cancelbutton'


const CancelButton = () => {
  return (
    <div>
        <CancelButtonDiv>
          <CancelButtonIcon>
            <img src="/images/cancel_icon.svg" />
          </CancelButtonIcon>
        </CancelButtonDiv>
    </div>
  )
}

export default CancelButton