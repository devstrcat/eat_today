import React from 'react'
import { CancelButton, CancelButtonIcon } from '../../styles/recipewriteStyle'

const WriteCancel = () => {
  return (
    <CancelButton>
    <CancelButtonIcon>
      <img src="/images/cancel_icon.svg" />
    </CancelButtonIcon>
  </CancelButton>
  )
}

export default WriteCancel