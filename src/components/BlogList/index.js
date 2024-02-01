// Write your JS code here
import {Component} from 'react'

import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import BlogItem from '../BlogItem'
import './index.css'

class BlogList extends Component {
  state = {blogList: [], isValue: true}

  componentDidMount() {
    this.getBlogListData()
  }

  getBlogListData = async () => {
    const response = await fetch('https://apis.ccbp.in/blogs')
    const data = await response.json()
    const updatedList = data.map(each => ({
      id: each.id,
      title: each.title,
      imageUrl: each.image_url,
      author: each.author,
      avatharUrl: each.avathar_url,
      topic: each.topic,
    }))
    this.setState({blogList: updatedList})
    this.setState({isValue: false})
  }

  render() {
    const {blogList, isValue} = this.state
    console.log(isValue)

    return (
      <ul className="blogList-ul">
        {isValue ? (
          <div data-testid="loader">
            <Loader type="TailSpin" color="#00bfff" height={50} width={50} />
          </div>
        ) : (
          blogList.map(each => (
            <BlogItem blogListDetails={each} key={each.id} />
          ))
        )}
      </ul>
    )
  }
}

export default BlogList
