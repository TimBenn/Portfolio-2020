import React from "react"
import PropTypes from "prop-types"

const Card = props => {
  let { style, hideShadow, animation, delay, duration, link } = props

  return link ? (
    <a
      href={link}
      target="_blank"
      rel="noreferrer"
      data-sal={animation}
      data-sal-delay={delay}
      data-sal-duration={duration}
      data-sal-easing="ease"
      style={{
        boxShadow: !hideShadow ? "2px 2px 5px rgba(0, 0, 0, 0.25)" : "none",
        borderRadius: "10px",
        opacity: 1,
        width: "100%",
        minHeight: "300px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: 15,
        ...style,
      }}
      className="image-card"
    >
      <div>{props.children}</div>
    </a>
  ) : (
    <div
      href={link}
      data-sal={animation}
      data-sal-delay={delay}
      data-sal-duration={duration}
      data-sal-easing="ease"
      style={{
        boxShadow: !hideShadow ? "3px 6px 10px rgba(0, 0, 0, 0.45)" : "none",
        borderRadius: "10px",
        opacity: 1,
        width: "100%",
        minHeight: "300px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: 15,
        ...style,
      }}
      className="image-card"
    >
      <div>{props.children}</div>
    </div>
  )
}

Card.propTypes = {
  style: PropTypes.object,
  hideShadow: PropTypes.bool,
  animation: PropTypes.string,
  delay: PropTypes.string,
  duration: PropTypes.string,
  link: PropTypes.string,
}

export default Card
