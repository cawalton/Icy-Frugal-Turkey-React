import React from 'react'

import PropTypes from 'prop-types'

import './feature-card31.css'

const FeatureCard31 = (props) => {
  return (
    <div className={`feature-card31-feature-card ${props.rootClassName} `}>
      <h2 className="feature-card31-text">{props.title}</h2>
      <span className="feature-card31-text1">{props.description}</span>
      <span className="feature-card31-text2">{props.action}</span>
    </div>
  )
}

FeatureCard31.defaultProps = {
  rootClassName: '',
  image_src: 'https://play.teleporthq.io/static/svg/default-img.svg',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing.',
  image_alt: 'image',
  title: 'Lorem ipsum',
  action: 'SEE MORE',
}

FeatureCard31.propTypes = {
  rootClassName: PropTypes.string,
  image_src: PropTypes.string,
  description: PropTypes.string,
  image_alt: PropTypes.string,
  title: PropTypes.string,
  action: PropTypes.string,
}

export default FeatureCard31
