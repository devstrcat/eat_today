import React from 'react'
import { RecipeComment, TextBoxHashTags, TextBoxes } from '../../styles/recipewriteStyle'

const WriteTexts = () => {
  return (
    <TextBoxes>
    <input
      className="textboxes-title"
      placeholder="제목을 입력해주세요."
    ></input>
    <input
      className="textboxes-ingre"
      placeholder="재료를 입력해주세요."
    ></input>

    {/* 해시 태그 */}
    <TextBoxHashTags>
      <input
        className="textboxes-tags-today"
        placeholder="#오늘의디저트"
      ></input>
      <input
        className="textboxes-tags-chococake"
        placeholder="#크리스마스초코케익"
      ></input>
      <div className="textboxes-tags-add">
        <img src="/images/add_icon.svg"  />
      </div>
    </TextBoxHashTags>

    {/* 레시피 기록 및 다이어리 코멘트 */}
    <RecipeComment>
    <input className="textboxes-recipe" placeholder="Recipe" />
    <input className="textboxes-comment" placeholder="Diary comment..." />
    </RecipeComment>
  </TextBoxes>
 
  )
}

export default WriteTexts