import React from "react"
import { Col } from 'reactstrap'

import AboutLayout from "../components/aboutlayout"
import SEO from "../components/seo"

const AboutPage = () => (
  <AboutLayout pageTitle = "About">
    <SEO title="About | Rodeo Round Up"/>
    <Col md = '12' className = 'image-block'>
      <div className = 'my-face fillout'></div>
    </Col>
    <Col md = '6'>
      <h1>I'm Caleb.</h1>
      <p>Moseying around Texas as a finger-gunning, rant enjoying, and hot-dogging kind of guy</p>
      <p>I like creating things, whether that's music, drawing, writing, or developing with the following:</p>
      <ul className = 'about-me-list'>
        <li>Python</li>
        <li>HTML</li>
        <li>CSS</li>
        <li>Sass</li>
        <li>Bootstrap</li>
        <li>Javascript</li>
        <li>React</li>
        <li>Gatsby</li>
        <li>VBA</li>
      </ul>
      <p>Rodeo Round Up is the rootin-tootin center for my reviews, essays, recipies, stories, and strange banter</p>
      <h4 className = 'round-up about-me-description'>Hell Yeah, Brother</h4>
    </Col>
    <Col md = '6'>
      <div className = 'cartoonish fillout'></div>
    </Col>
  </AboutLayout>
)

export default AboutPage
