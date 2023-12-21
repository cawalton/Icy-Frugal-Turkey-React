import React from 'react'

import PropTypes from 'prop-types'

import './blog-post-card1.css'

const BlogPostCard1 = (props) => {
  return (
    <div className={`blog-post-card1-blog-post-card ${props.rootClassName} `}>
      <img
        alt={props.image_alt}
        src={props.image_src}
        className="blog-post-card1-image"
      />
      <div className="blog-post-card1-container">
        <span className="blog-post-card1-text">{props.title}</span>
        <span className="blog-post-card1-text1">{props.description}</span>
        <span className="blog-post-card1-text2">{props.description2}</span>
      </div>
    </div>
  )
}

BlogPostCard1.defaultProps = {
  profile_src:
    'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDd8fG1hbiUyMHBvcnRyYWl0fGVufDB8fHx8MTYyNjQzMTMwMw&ixlib=rb-1.2.1&h=1200',
  image_src:
    'https://images.unsplash.com/photo-1547841243-eacb14453cd9?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDIyfHxjaXR5fGVufDB8fHx8MTYyNjE4NjYxMg&ixlib=rb-1.2.1&h=400',
  title: 'Lorem ipsum dolor sit amet',
  description1:
    'Lorem ipsum dolor sit amet, consectetur, adipiscing elit. Sed non volutpat turpis.  ​ Mauris luctus rutrum mi ut rhoncus. Integer in dignissim tortor. Lorem  ​​ ipsum dolor sit amet, consectetur adipiscing elit.',
  profile_alt: 'profile',
  rootClassName: '',
  image_alt: 'image',
  time: '5 min read',
  description:
    'Lorem ipsum dolor sit amet, consectetur, adipiscing elit. Sed non volutpat turpis.  ​ Mauris luctus rutrum mi ut rhoncus. Integer in dignissim tortor. Lorem  ​​ ipsum dolor sit amet, consectetur adipiscing elit.',
  label: 'ENTERPRISE',
  author: 'Jon Doe',
  description2:
    'Lorem ipsum dolor sit amet, consectetur, adipiscing elit. Sed non volutpat turpis.  ​ Mauris luctus rutrum mi ut rhoncus. Integer in dignissim tortor. Lorem  ​​ ipsum dolor sit amet, consectetur adipiscing elit.',
}

BlogPostCard1.propTypes = {
  profile_src: PropTypes.string,
  image_src: PropTypes.string,
  title: PropTypes.string,
  description1: PropTypes.string,
  profile_alt: PropTypes.string,
  rootClassName: PropTypes.string,
  image_alt: PropTypes.string,
  time: PropTypes.string,
  description: PropTypes.string,
  label: PropTypes.string,
  author: PropTypes.string,
  description2: PropTypes.string,
}

export default BlogPostCard1
