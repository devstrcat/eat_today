import React from 'react'
import { AddImagesBlank, AddImagesDiv, AddImagesSelect } from '../../styles/write/addimages'

const AddImages = () => {
  return (
    <div>
        <AddImagesDiv>
          <AddImagesSelect>
            <img src="/images/choco.png" />
          </AddImagesSelect>
          <AddImagesBlank>
            <img src="/images/add_icon.svg" />
          </AddImagesBlank>
          <AddImagesBlank>
            <img src="/images/add_icon.svg" />
          </AddImagesBlank>
        </AddImagesDiv>
    </div>
  )
}

export default AddImages