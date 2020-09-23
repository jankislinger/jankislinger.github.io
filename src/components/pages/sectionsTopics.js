import React from "react"

const animationSpeed = 20

export const headerClass = "font-weight-normal text-7"
export const rowClass = "row pb-lg-4 mt-lg-2"

export function sectionClass(color) {
  return `section bg-color-${color} m-0 border-0`
}



export function Topic({title, text, delayGroup, icon}) {
  const animationDelay = delayGroup * animationSpeed
  if (icon === undefined) {
    icon = "far fa-question-circle"
  }
  return (
    <div className="col-md-6 col-lg-4 pb-4 mt-2 appear-animation animated fadeInRightShorter appear-animation-visible"
         data-appear-animation="fadeInRightShorter"
         data-appear-animation-delay={`${animationDelay}`}
         style={{animationDelay: `${animationDelay}ms`}}>
      <div className="feature-box feature-box-style-2">
        <div className="feature-box-icon">
          <i className={icon + " text-7 text-color-primary"}/>
        </div>
        <div className="feature-box-info">
          <h4 className="font-weight-bold mb-2">{title}</h4>
          <p>{text}</p>
        </div>
      </div>
    </div>

  )
}
