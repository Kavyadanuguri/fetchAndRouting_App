// Write your JS code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import './index.css'

class BlogItemDetails extends Component {
  state = {BlogItemDetailsData: {}, isValue1: true}

  componentDidMount() {
    this.getData()
  }

  getData = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/blogs/${id}`)
    const data = await response.json()
    const updatedList = {
      title: data.title,
      imageUrl: data.image_url,
      content: data.content,
      avatarUrl: data.avatar_url,
      author: data.author,
    }
    this.setState({BlogItemDetailsData: updatedList})
    this.setState({isValue1: false})
  }

  render() {
    const {BlogItemDetailsData, isValue1} = this.state
    const {title, imageUrl, content, avatarUrl, author} = BlogItemDetailsData
    console.log(isValue1)
    return (
      <div>
        {isValue1 ? (
          <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
        ) : (
          <div className="blog-item-details-container1">
            <h1 className="blog-item-details-h1">{title}</h1>
            <div className="blog-item-details-con1">
              <img
                className="blog-item-details-img1"
                alt="avatar"
                src={avatarUrl}
              />
              <p className="blog-item-details-p1">{author}</p>
            </div>
            <img
              className="blog-item-details-img2"
              alt={title}
              src={imageUrl}
            />
            <p className="blog-item-details-p2">{content}</p>
          </div>
        )}
      </div>
    )
  }
}

export default BlogItemDetails
