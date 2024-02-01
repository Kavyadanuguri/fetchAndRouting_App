// Write your JS code here
import {Link} from 'react-router-dom'
import './index.css'

const BlogItem = props => {
  const {blogListDetails} = props
  const {id, title, imageUrl, author, avatharUrl, topic} = blogListDetails

  return (
    <Link to={`/blogs/${id}`} className="blog-item-link ">
      <li className="blog-item-list" key={id}>
        <div>
          <img className="blog-item-img1" alt={title} src={imageUrl} />
        </div>
        <div className="blog-item-container1">
          <p className="blog-item-p1">{topic}</p>
          <h1 className="blog-item-h1">{title}</h1>
          <div className="blog-item-container2">
            <img className="blog-item-img2" alt="avathar" src={avatharUrl} />
            <p className="blog-item-p2">{author}</p>
          </div>
        </div>
      </li>
    </Link>
  )
}

export default BlogItem
