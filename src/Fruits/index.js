import './index.css'

import {Component} from 'react'

class Fruits extends Component {
  constructor(props) {
    super(props)
    this.state = {
      eachList: props.eachList,
      imageUrl: props.eachList.imageUrl,
      newImage: props.newImage,

      imgId: props.eachList.id,
    }
  }

  onChangeImage = () => {
    const {newImage, imageUrl, imgId} = this.state

    newImage(imageUrl, imgId)
  }

  imageChange = () => {
    const {imgId} = this.state
    // console.log(imgId)
    const {reqFruitId} = this.props
    // console.log(reqFruitId)
    if (reqFruitId === imgId) {
      return 'active-thumbnail-btn'
    }
    return 'in-active-thumbnail-btn'
  }

  render() {
    const {eachList} = this.state

    const {thumbnailUrl} = eachList
    return (
      <li className="each-fruit">
        <button
          type="button"
          onClick={this.onChangeImage}
          className={this.imageChange()}
        >
          <img src={thumbnailUrl} alt="thumbnail" className="thumbnail-img" />
        </button>
      </li>
    )
  }
}

export default Fruits
