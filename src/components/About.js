import React from 'react'
import about1 from '../images/Mario and Adrian A.jpg'
import about2 from '../images/Mario and Adrian b.jpg'

const About = () => {
  return (
    <section className="about" id="about">
      <div className="section-center about-center">
        <article className="about-info">
          <div className="about-title">Little Lemon</div>
          <div className="about-sub-title">Vancouver</div>
          <div className="about-text">
            Little Lemon opened in 1995 by two Italian brothers, Adrian and
            Mario. Despite the city's diversity, the two brothers recognized the
            lack of Mediterranean cuisine in Chicago, and were inspired to bring
            the flavors of their hometown in Italy to the people of Chicago. The
            two brothers continue to oversee the Little Lemon restaurant, nearly
            thirty years later.
          </div>
        </article>
        <div className="about-img">
          <img src={about1} className="about-1" alt="awesome food" />
          <img src={about2} className="about-2" alt="awesome food" />
        </div>
      </div>
    </section>
  )
}

export default About
