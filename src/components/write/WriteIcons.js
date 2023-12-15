import React from 'react'
import { WriteButtons } from '../../styles/recipewriteStyle'

const WriteIcons = () => {
  return (
    <WriteButtons>
    <div className="restart-bt">
      <img src="/images/reset_icon.png" />
    </div>
    <div className="complete-bt">
      <img src="/images/check_icon.svg"  />
    </div>
    <div className="delete-bt">
      <img src="/images/trash_icon.png"/>
    </div>
  </WriteButtons>
  )
}

export default WriteIcons