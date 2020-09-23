import React from "react"

export function PageHeaderCommon() {
  const sectionStyle = {
    backgroundImage: `url(${process.env.PUBLIC_URL}/img/slides/slide-corporate-16-1.jpg)`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
  }

  return (
    <section
      className="page-header page-header-modern page-header-background overlay overlay-color-dark overlay-show overlay-op-4 mt-0 mb-5"
      style={sectionStyle}>
    </section>
  )
}

